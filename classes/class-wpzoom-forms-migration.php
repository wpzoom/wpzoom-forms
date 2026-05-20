<?php
/**
 * Convert legacy block-based form content into the new JSON schema.
 *
 * Triggered the first time a legacy form is opened in the new builder, or on
 * demand via the REST API. The block content is left intact in post_content
 * so the legacy renderer remains a working fallback.
 *
 * @package WPZOOM_Forms
 */

defined( 'ABSPATH' ) || exit;

class WPZOOM_Forms_Migration {

	/** Block name → schema field type. */
	private static $type_map = array(
		'wpzoom-forms/text-plain-field'      => 'text',
		'wpzoom-forms/text-name-field'       => 'name',
		'wpzoom-forms/text-email-field'      => 'email',
		'wpzoom-forms/text-website-field'    => 'url',
		'wpzoom-forms/text-phone-field'      => 'tel',
		'wpzoom-forms/textarea-field'        => 'textarea',
		'wpzoom-forms/select-field'          => 'select',
		'wpzoom-forms/multi-checkbox-field'  => 'checkboxes',
		'wpzoom-forms/checkbox-field'        => 'checkbox',
		'wpzoom-forms/radio-field'           => 'radio',
		'wpzoom-forms/label-field'           => 'heading',
		'wpzoom-forms/submit-field'          => '__submit',
		'wpzoom-forms/datepicker-field'      => 'date',
		'core/paragraph'                     => 'paragraph',
		'core/heading'                       => 'heading',
		'core/separator'                     => 'divider',
	);

	/**
	 * Build a v2 schema from a form's existing block content.
	 *
	 * @param int $form_id
	 * @return array Sanitized schema (may be empty fields if no blocks present).
	 */
	public static function build_from_post_content( $form_id ) {
		$post = get_post( $form_id );
		if ( ! $post ) return WPZOOM_Forms_Schema::defaults();
		return self::build_from_content( $post->post_content );
	}

	/**
	 * Build a v2 schema from raw post_content (block markup). Useful for previewing
	 * a template before any post is created.
	 *
	 * @param string $post_content
	 * @return array Sanitized schema (always populated; falls back to defaults if empty).
	 */
	public static function build_from_content( $post_content ) {
		$schema             = WPZOOM_Forms_Schema::defaults();
		$schema['fields']   = array();
		$schema['settings']['submitLabel'] = __( 'Submit', 'wpzoom-forms' );

		$blocks = parse_blocks( (string) $post_content );
		self::walk_blocks( $blocks, $schema );

		// If no fields were found, fall back to a sensible starter form.
		if ( empty( $schema['fields'] ) ) {
			$schema = WPZOOM_Forms_Schema::defaults();
		}

		return WPZOOM_Forms_Schema::sanitize( $schema );
	}

	private static function walk_blocks( $blocks, &$schema ) {
		if ( ! is_array( $blocks ) ) return;
		foreach ( $blocks as $block ) {
			if ( ! is_array( $block ) ) continue;

			$name  = isset( $block['blockName'] ) ? $block['blockName'] : '';
			$attrs = isset( $block['attrs'] ) && is_array( $block['attrs'] ) ? $block['attrs'] : array();
			if ( ! empty( $block['innerHTML'] ) ) {
				$attrs['_innerHTML'] = $block['innerHTML'];
			}

			if ( isset( self::$type_map[ $name ] ) ) {
				$type = self::$type_map[ $name ];
				if ( '__submit' === $type ) {
					if ( ! empty( $attrs['name'] ) ) {
						$schema['settings']['submitLabel'] = sanitize_text_field( $attrs['name'] );
					}
				} else {
					$schema['fields'][] = self::block_to_field( $type, $attrs );
				}
			}

			if ( ! empty( $block['innerBlocks'] ) ) {
				self::walk_blocks( $block['innerBlocks'], $schema );
			}
		}
	}

	private static function block_to_field( $type, $attrs ) {
		$over = array();
		if ( isset( $attrs['name'] ) ) {
			$over['label'] = $attrs['name'];
		} elseif ( isset( $attrs['label'] ) ) {
			$over['label'] = $attrs['label'];
		}

		if ( isset( $attrs['placeholder'] ) ) $over['placeholder'] = $attrs['placeholder'];
		if ( isset( $attrs['required'] ) )    $over['required']    = (bool) $attrs['required'];
		if ( isset( $attrs['id'] ) && is_string( $attrs['id'] ) && $attrs['id'] !== '' ) {
			$over['id'] = sanitize_key( $attrs['id'] );
		}

		if ( $type === 'textarea' && isset( $attrs['rows'] ) ) {
			$over['rows'] = (int) $attrs['rows'];
		}

		if ( $type === 'email' ) {
			$over['isReplyTo'] = isset( $attrs['replyto'] ) ? (bool) $attrs['replyto'] : false;
		}

		if ( $type === 'text' && isset( $attrs['subject'] ) ) {
			$over['isSubject'] = (bool) $attrs['subject'];
		}

		if ( in_array( $type, array( 'select', 'radio', 'checkboxes' ), true ) ) {
			$opts = array();
			if ( isset( $attrs['options'] ) && is_array( $attrs['options'] ) ) {
				foreach ( $attrs['options'] as $opt ) {
					$label = is_array( $opt ) && isset( $opt['label'] ) ? $opt['label'] : (string) $opt;
					$value = is_array( $opt ) && isset( $opt['value'] ) ? $opt['value'] : sanitize_title( $label );
					if ( $label === '' ) continue;
					$opts[] = array( 'label' => $label, 'value' => $value );
				}
			}
			if ( ! empty( $opts ) ) {
				$over['options'] = $opts;
			}
		}

		if ( $type === 'heading' ) {
			if ( isset( $attrs['name'] ) ) {
				// wpzoom-forms/label-field stores its text in the 'name' attribute
				$over['text'] = $attrs['name'];
			} elseif ( isset( $attrs['_innerHTML'] ) ) {
				// core/heading: renderer uses esc_html so strip all tags to plain text
				$over['text'] = wp_strip_all_tags( $attrs['_innerHTML'] );
				if ( isset( $attrs['level'] ) ) {
					$over['level'] = 'h' . (int) $attrs['level'];
				}
			} else {
				$over['text'] = __( 'Heading', 'wpzoom-forms' );
			}
			$over['label'] = '';
		}

		if ( $type === 'paragraph' ) {
			$html = isset( $attrs['_innerHTML'] ) ? trim( $attrs['_innerHTML'] ) : '';
			// Strip the outer <p> wrapper; .wpzf-paragraph div already acts as the container
			$html          = preg_replace( '/^\s*<p[^>]*>|<\/p>\s*$/i', '', $html );
			$over['text']  = wp_kses_post( $html );
			$over['label'] = '';
		}

		if ( $type === 'date' && isset( $attrs['format'] ) ) {
			$over['format'] = $attrs['format'];
		}

		// Extract inline styles from the old block's HTML output and carry them
		// into customCSS so visual styling isn't lost after migration.
		if ( isset( $attrs['_innerHTML'] ) ) {
			$css = self::extract_inline_css( $attrs['_innerHTML'], $type );
			if ( $css !== '' ) {
				$over['customCSS'] = $css;
			}
		}

		return WPZOOM_Forms_Schema::make_field( $type, $over );
	}

	/**
	 * Pull the style attribute off the first input/textarea/select in $html and
	 * return it as a customCSS block, or an empty string if nothing is found.
	 */
	private static function extract_inline_css( $html, $type ) {
		static $input_types = array( 'text', 'name', 'email', 'tel', 'url', 'number', 'date' );
		if ( in_array( $type, $input_types, true ) ) {
			$tag = 'input';
		} elseif ( $type === 'textarea' ) {
			$tag = 'textarea';
		} elseif ( $type === 'select' ) {
			$tag = 'select';
		} else {
			return '';
		}

		if ( ! preg_match( '/<' . $tag . '[^>]+\bstyle=["\']([^"\']+)["\'][^>]*>/i', $html, $m ) ) {
			return '';
		}

		return self::inline_style_to_css( $m[1], 'selector .wpzf-input' );
	}

	/**
	 * Convert an inline style string into a CSS rule block.
	 * e.g. "border-radius:99px;padding:14px" → "selector { border-radius: 99px;\n  padding: 14px;\n}"
	 */
	private static function inline_style_to_css( $style_string, $selector ) {
		$lines = array();
		foreach ( explode( ';', $style_string ) as $decl ) {
			$decl = trim( $decl );
			if ( $decl === '' || strpos( $decl, ':' ) === false ) continue;
			list( $prop, $val ) = explode( ':', $decl, 2 );
			$prop = trim( $prop );
			$val  = trim( $val );
			if ( $prop !== '' && $val !== '' ) {
				$lines[] = '  ' . $prop . ': ' . $val . ';';
			}
		}

		if ( empty( $lines ) ) return '';

		return $selector . " {\n" . implode( "\n", $lines ) . "\n}";
	}

	/**
	 * Migrate one form and persist its schema.
	 */
	public static function migrate( $form_id ) {
		$schema = self::build_from_post_content( $form_id );
		WPZOOM_Forms_Schema::save_for_form( $form_id, $schema );
		return $schema;
	}
}
