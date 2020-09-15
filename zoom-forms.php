<?php
/**
 * ZOOM Forms - Custom forms for WordPress, by WPZOOM.
 *
 * @package   WPZOOM_Forms
 * @author    WPZOOM
 * @copyright 2020 WPZOOM
 * @license   GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name: ZOOM Forms
 * Plugin URI:  https://wpzoom.com/plugins/forms/
 * Description: Custom forms for WordPress, by WPZOOM.
 * Author:      WPZOOM
 * Author URI:  https://wpzoom.com
 * Version:     1.0.0
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

// Instance the plugin
$zoom_forms = new ZOOM_Forms();

// Register plugin activation hook
register_activation_hook( __FILE__, array( $zoom_forms, 'activate' ) );

// Hook the plugin into WordPress
add_action( 'init', array( $zoom_forms, 'init' ), 9 );

/**
 * Class ZOOM_Forms
 *
 * Main container class of the ZOOM Forms WordPress plugin.
 *
 * @since 1.0.0
 */
class ZOOM_Forms {
	/**
	 * The version of this plugin.
	 *
	 * @var    string
	 * @access public
	 * @since  1.0.0
	 */
	public const VERSION = '1.0.0';

	/**
	 * Whether the plugin has been initialized.
	 *
	 * @var    boolean
	 * @access public
	 * @since  1.0.0
	 */
	public $initialized = false;

	/**
	 * The path to this plugin's root directory.
	 *
	 * @var    string
	 * @access public
	 * @since  1.0.0
	 */
	public $plugin_dir_path;

	/**
	 * The URL to this plugin's root directory.
	 *
	 * @var    string
	 * @access public
	 * @since  1.0.0
	 */
	public $plugin_dir_url;

	/**
	 * The path to this plugin's "main" directory.
	 *
	 * @var    string
	 * @access public
	 * @since  1.0.0
	 */
	public $main_dir_path;

	/**
	 * The URL to this plugin's "main" directory.
	 *
	 * @var    string
	 * @access public
	 * @since  1.0.0
	 */
	public $main_dir_url;

	/**
	 * Initializes the plugin and sets up needed hooks and features.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 * @see    ZOOM_Forms::block_setup()
	 */
	public function init() {
		if ( false === $this->initialized ) {
			$this->plugin_dir_path = plugin_dir_path( __FILE__ );
			$this->plugin_dir_url = plugin_dir_url( __FILE__ );
			$this->main_dir_path = trailingslashit( $this->plugin_dir_path . 'build' );
			$this->main_dir_url = trailingslashit( $this->plugin_dir_url . 'build' );

			load_plugin_textdomain( 'zoom-forms', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );

			add_filter( 'allowed_block_types', array( $this, 'filter_allowed_block_types' ), 10, 2 );
			add_filter( 'block_categories', array( $this, 'filter_block_categories' ), 10, 2 );
			add_action( 'enqueue_block_editor_assets', array( $this, 'register_backend_assets' ) );
			add_action( 'enqueue_block_assets', array( $this, 'register_frontend_assets' ) );
			add_filter( 'post_row_actions', array( $this, 'remove_quick_edit' ), 10, 2 );
			add_filter( 'bulk_actions-edit-wpzf-form', array( $this, 'remove_bulk_actions' ) );
			add_action( 'admin_post_wpzf_submit', array( $this, 'action_form_post' ) );

			register_post_type(
				'wpzf-form',
				array(
					'label'               => __( 'ZOOM Forms', 'zoom-forms' ),
					'labels'              => array(
						'name'                     => _x( 'ZOOM Forms', 'post type general name', 'zoom-forms' ),
						'singular_name'            => _x( 'Form', 'post type singular name', 'zoom-forms' ),
						'add_new'                  => _x( 'Add New', 'post', 'zoom-forms' ),
						'add_new_item'             => __( 'Add New Form', 'zoom-forms' ),
						'edit_item'                => __( 'Edit Form', 'zoom-forms' ),
						'new_item'                 => __( 'New Form', 'zoom-forms' ),
						'view_item'                => __( 'View Form', 'zoom-forms' ),
						'view_items'               => __( 'View Forms', 'zoom-forms' ),
						'search_items'             => __( 'Search Forms', 'zoom-forms' ),
						'not_found'                => __( 'No forms found.', 'zoom-forms' ),
						'not_found_in_trash'       => __( 'No forms found in Trash.', 'zoom-forms' ),
						'all_items'                => __( 'All Forms', 'zoom-forms' ),
						'archives'                 => __( 'Form Archives', 'zoom-forms' ),
						'attributes'               => __( 'Form Attributes', 'zoom-forms' ),
						'insert_into_item'         => __( 'Insert into form', 'zoom-forms' ),
						'uploaded_to_this_item'    => __( 'Uploaded to this form', 'zoom-forms' ),
						'featured_image'           => _x( 'Featured image', 'post', 'zoom-forms' ),
						'set_featured_image'       => _x( 'Set featured image', 'post', 'zoom-forms' ),
						'remove_featured_image'    => _x( 'Remove featured image', 'post', 'zoom-forms' ),
						'use_featured_image'       => _x( 'Use as featured image', 'post', 'zoom-forms' ),
						'filter_items_list'        => __( 'Filter forms list', 'zoom-forms' ),
						'items_list_navigation'    => __( 'Forms list navigation', 'zoom-forms' ),
						'items_list'               => __( 'Forms list', 'zoom-forms' ),
						'item_published'           => __( 'Form saved.', 'zoom-forms' ),
						'item_published_privately' => __( 'Form saved privately.', 'zoom-forms' ),
						'item_reverted_to_draft'   => __( 'Form reverted to draft.', 'zoom-forms' ),
						'item_scheduled'           => __( 'Form scheduled.', 'zoom-forms' ),
						'item_updated'             => __( 'Form updated.', 'zoom-forms' )
					),
					'public'              => true,
					'exclude_from_search' => true,
					'publicly_queryable'  => false,
					'show_in_rest'        => true,
					'menu_position'       => 30,
					'menu_icon'           => 'dashicons-feedback',
					'supports'            => array( 'title', 'editor', 'custom-fields' )
				)
			);

			register_meta(
				'post',
				'_form_method',
				array(
					'object_subtype'    => 'wpzf-form',
					'show_in_rest'      => true,
					'single'            => true,
					'type'              => 'string',
					'default'           => 'email',
					'sanitize_callback' => 'sanitize_text_field',
					'auth_callback'     => function() { return current_user_can( 'edit_posts' ); }
				)
			);

			register_meta(
				'post',
				'_form_email',
				array(
					'object_subtype'    => 'wpzf-form',
					'show_in_rest'      => true,
					'single'            => true,
					'type'              => 'string',
					'default'           => '',
					'sanitize_callback' => 'sanitize_text_field',
					'auth_callback'     => function() { return current_user_can( 'edit_posts' ); }
				)
			);

			if ( $this->is_forms_post_type() ) {
				$this->forms_display();
				$this->register_blocks();
				$this->block_patterns();
			} else {
				$this->register_form_block();
			}

			$this->initialized = true;
		}
	}

	/**
	 * Runs once during the activation of the plugin to run some one-time setup functions.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 * @see    ZOOM_Forms::init()
	 */
	public function activate() {
		$this->init();

		flush_rewrite_rules();
	}

	/**
	 * Modifies the way the backend forms list is displayed.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function forms_display() {
		global $wp_post_statuses;

		$wp_post_statuses[ 'publish' ]->label = __( 'Saved', 'zoom-forms' );
		$wp_post_statuses[ 'publish' ]->label_count[0] = __( 'Saved <span class="count">(%s)</span>', 'zoom-forms' );
		$wp_post_statuses[ 'publish' ]->label_count[1] = __( 'Saved <span class="count">(%s)</span>', 'zoom-forms' );
		$wp_post_statuses[ 'publish' ]->label_count[ 'singular' ] = __( 'Saved <span class="count">(%s)</span>', 'zoom-forms' );
		$wp_post_statuses[ 'publish' ]->label_count[ 'plural' ] = __( 'Saved <span class="count">(%s)</span>', 'zoom-forms' );
		unset( $wp_post_statuses[ 'future' ] );
		unset( $wp_post_statuses[ 'pending' ] );
		unset( $wp_post_statuses[ 'private' ] );
		unset( $wp_post_statuses[ 'request-pending' ] );
		unset( $wp_post_statuses[ 'request-confirmed' ] );
		unset( $wp_post_statuses[ 'request-failed' ] );
		unset( $wp_post_statuses[ 'request-completed' ] );

		add_filter( 'post_date_column_status', function() { return __( 'Last Modified', 'zoom-forms' ); } );
		add_filter( 'post_date_column_time', function( $time, $post ) {
			return sprintf(
				__( '%1$s at %2$s', 'zoom-forms' ),
				get_the_modified_time( __( 'Y/m/d', 'zoom-forms' ), $post ),
				get_the_modified_time( __( 'g:i a', 'zoom-forms' ), $post )
			);
		}, 10, 2 );
	}

	/**
	 * Registers all the custom blocks for this plugin.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function register_blocks() {
		$input_blocks = array(
			'text'     => array(
				'id'          => array(
					'type'    => 'string',
					'default' => ''
				),
				'type'        => array(
					'type'    => 'string',
					'default' => 'text'
				),
				'name'        => array(
					'type'    => 'string',
					'default' => ''
				),
				'placeholder' => array(
					'type'    => 'string',
					'default' => ''
				),
				'required'    => array(
					'type'    => 'boolean',
					'default' => false
				)
			),
			'textarea' => array(
				'id'          => array(
					'type'    => 'string',
					'default' => ''
				),
				'name'        => array(
					'type'    => 'string',
					'default' => ''
				),
				'cols'        => array(
					'type'    => 'string',
					'default' => '20'
				),
				'rows'        => array(
					'type'    => 'string',
					'default' => '4'
				),
				'placeholder' => array(
					'type'    => 'string',
					'default' => ''
				),
				'required'    => array(
					'type'    => 'boolean',
					'default' => false
				)
			),
			'select'   => array(
				'id'           => array(
					'type'    => 'string',
					'default' => ''
				),
				'name'         => array(
					'type'    => 'string',
					'default' => ''
				),
				'options'      => array(
					'type'    => 'array',
					'items'   => array(
						'type' => 'string'
					),
					'default' => array( __( 'Item #1', 'zoom-forms' ) )
				),
				'defaultValue' => array(
					'type'    => 'string',
					'default' => __( 'Item #1', 'zoom-forms' )
				),
				'multiple'     => array(
					'type'    => 'boolean',
					'default' => false
				),
				'required'     => array(
					'type'    => 'boolean',
					'default' => false
				)
			),
			'checkbox' => array(
				'id'           => array(
					'type'    => 'string',
					'default' => ''
				),
				'name'         => array(
					'type'    => 'string',
					'default' => ''
				),
				'defaultValue' => array(
					'type'    => 'boolean',
					'default' => false
				),
				'required'     => array(
					'type'    => 'boolean',
					'default' => false
				)
			),
			'radio'    => array(
				'id'           => array(
					'type'    => 'string',
					'default' => ''
				),
				'name'         => array(
					'type'    => 'string',
					'default' => ''
				),
				'options'      => array(
					'type'    => 'array',
					'items'   => array(
						'type' => 'string'
					),
					'default' => array( __( 'Item #1', 'zoom-forms' ) )
				),
				'defaultValue' => array(
					'type'    => 'string',
					'default' => __( 'Item #1', 'zoom-forms' )
				),
				'required'     => array(
					'type'    => 'boolean',
					'default' => false
				)
			),
			'label'    => array(
				'id'           => array(
					'type'    => 'string',
					'default' => ''
				),
				'forInput'     => array(
					'type'    => 'string',
					'default' => ''
				),
				'text' => array(
					'type'    => 'string',
					'default' => __( 'Label', 'zoom-forms' )
				)
			),
			'submit'   => array(
				'id'          => array(
					'type'    => 'string',
					'default' => ''
				),
				'name'        => array(
					'type'    => 'string',
					'default' => ''
				),
				'label'       => array(
					'type'    => 'string',
					'default' => __( 'Submit', 'zoom-forms' )
				)
			)
		);

		foreach ( $input_blocks as $block => $attributes ) {
			register_block_type(
				"zoom-forms/$block-field",
				array(
					'attributes'    => $attributes,
					'editor_script' => 'zoom-forms-js-backend-main',
					'editor_style'  => 'zoom-forms-css-backend-main'
				)
			);
		}
	}

	/**
	 * Registers the main form block used for inserting a form into a regular post/page.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function register_form_block() {
		register_block_type(
			"zoom-forms/form-block",
			array(
				'attributes'    => array(
					'formId' => array(
						'type'    => 'string',
						'default' => '-1'
					)
				),
				'script'          => 'zoom-forms-js-frontend-formblock',
				'style'           => 'zoom-forms-css-frontend-formblock',
				'editor_script'   => 'zoom-forms-js-backend-formblock',
				'editor_style'    => 'zoom-forms-css-backend-formblock',
				'render_callback' => array( $this, 'form_block_render' )
			)
		);
	}

	/**
	 * Registers custom block patterns for the form post type.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function block_patterns() {
		remove_theme_support( 'core-block-patterns' );

		register_block_pattern_category(
			'zoom-forms',
			array(
				'label' => __( 'ZOOM Forms', 'zoom-forms' )
			)
		);

		register_block_pattern(
			'zoom-forms/contact-form',
			array(
				'title'       => __( 'Contact Form', 'zoom-forms' ),
				'description' => _x( 'A simple contact form.', 'Block pattern description', 'zoom-forms' ),
				'keywords'    => array( __( 'Contact', 'zoom-forms' ), __( 'Form', 'zoom-forms' ) ),
				'categories'  => array( 'zoom-forms' ),
				'content'     => "<!-- wp:group {\"style\":{\"color\":{\"background\":\"#ffffff\"}}} -->\n\t<div class=\"wp-block-group has-background\" style=\"background-color:#ffffff\">\n\t\t<div class=\"wp-block-group__inner-container\">\n\t\t\t<!-- wp:columns -->\n\t\t\t\t<div class=\"wp-block-columns\">\n\t\t\t\t\t<!-- wp:column {\"width\":20} -->\n\t\t\t\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:20%\">\n\t\t\t\t\t\t\t<!-- wp:zoom-forms/label-field {\"id\":\"input_label1\",\"align\":\"right\"} -->\n\t\t\t\t\t\t\t\t<label for=\"input_name\" class=\"wp-block-zoom-forms-label-field alignright\">" . __( 'Name', 'zoom-forms' ) . "</label>\n\t\t\t\t\t\t\t<!-- /wp:zoom-forms/label-field -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /wp:column -->\n\n\t\t\t\t\t<!-- wp:column {\"width\":80} -->\n\t\t\t\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:80%\">\n\t\t\t\t\t\t\t<!-- wp:zoom-forms/text-field {\"id\":\"input_name\",\"align\":\"left\"} -->\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"input_name\" id=\"input_name\" required class=\"wp-block-zoom-forms-text-field alignleft\" />\n\t\t\t\t\t\t\t<!-- /wp:zoom-forms/text-field -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /wp:column -->\n\t\t\t\t</div>\n\t\t\t<!-- /wp:columns -->\n\n\t\t\t<!-- wp:columns -->\n\t\t\t\t<div class=\"wp-block-columns\">\n\t\t\t\t\t<!-- wp:column {\"width\":20} -->\n\t\t\t\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:20%\">\n\t\t\t\t\t\t\t<!-- wp:zoom-forms/label-field {\"id\":\"input_label2\",\"align\":\"right\"} -->\n\t\t\t\t\t\t\t\t<label for=\"input_email\" class=\"wp-block-zoom-forms-label-field alignright\">" . __( 'Email', 'zoom-forms' ) . "</label>\n\t\t\t\t\t\t\t<!-- /wp:zoom-forms/label-field -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /wp:column -->\n\n\t\t\t\t\t<!-- wp:column {\"width\":80} -->\n\t\t\t\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:80%\">\n\t\t\t\t\t\t\t<!-- wp:zoom-forms/text-field {\"id\":\"input_email\",\"align\":\"left\"} -->\n\t\t\t\t\t\t\t\t<input type=\"email\" name=\"input_email\" id=\"input_email\" required class=\"wp-block-zoom-forms-text-field alignleft\" />\n\t\t\t\t\t\t\t<!-- /wp:zoom-forms/text-field -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /wp:column -->\n\t\t\t\t</div>\n\t\t\t<!-- /wp:columns -->\n\n\t\t\t<!-- wp:columns -->\n\t\t\t\t<div class=\"wp-block-columns\">\n\t\t\t\t\t<!-- wp:column {\"width\":20} -->\n\t\t\t\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:20%\">\n\t\t\t\t\t\t\t<!-- wp:zoom-forms/label-field {\"id\":\"input_label3\",\"align\":\"right\"} -->\n\t\t\t\t\t\t\t\t<label for=\"input_subject\" class=\"wp-block-zoom-forms-label-field alignright\">" . __( 'Subject', 'zoom-forms' ) . "</label>\n\t\t\t\t\t\t\t<!-- /wp:zoom-forms/label-field -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /wp:column -->\n\n\t\t\t\t\t<!-- wp:column {\"width\":80} -->\n\t\t\t\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:80%\">\n\t\t\t\t\t\t\t<!-- wp:zoom-forms/text-field {\"id\":\"input_subject\",\"align\":\"left\"} -->\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"input_subject\" id=\"input_subject\" required class=\"wp-block-zoom-forms-text-field alignleft\" />\n\t\t\t\t\t\t\t<!-- /wp:zoom-forms/text-field -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /wp:column -->\n\t\t\t\t</div>\n\t\t\t<!-- /wp:columns -->\n\n\t\t\t<!-- wp:columns -->\n\t\t\t\t<div class=\"wp-block-columns\">\n\t\t\t\t\t<!-- wp:column {\"width\":100} -->\n\t\t\t\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:100%\">\n\t\t\t\t\t\t\t<!-- wp:zoom-forms/label-field {\"id\":\"input_label4\"} -->\n\t\t\t\t\t\t\t\t<label for=\"input_message\" class=\"wp-block-zoom-forms-label-field\">" . __( 'Message', 'zoom-forms' ) . "</label>\n\t\t\t\t\t\t\t<!-- /wp:zoom-forms/label-field -->\n\n\t\t\t\t\t\t\t<!-- wp:zoom-forms/textarea-field {\"id\":\"input_message\"} -->\n\t\t\t\t\t\t\t\t<textarea name=\"input_message\" id=\"input_message\" cols=\"55\" rows=\"10\" required class=\"wp-block-zoom-forms-textarea-field\"></textarea>\n\t\t\t\t\t\t\t<!-- /wp:zoom-forms/textarea-field -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /wp:column -->\n\t\t\t\t</div>\n\t\t\t<!-- /wp:columns -->\n\n\t\t\t<!-- wp:columns -->\n\t\t\t\t<div class=\"wp-block-columns\">\n\t\t\t\t\t<!-- wp:column {\"width\":100} -->\n\t\t\t\t\t\t<div class=\"wp-block-column\" style=\"flex-basis:100%\">\n\t\t\t\t\t\t\t<!-- wp:zoom-forms/submit-field {\"id\":\"input_submit\"} -->\n\t\t\t\t\t\t\t\t<input type=\"submit\" id=\"input_submit\" value=\"" . __( 'Submit', 'zoom-forms' ) . "\" class=\"wp-block-zoom-forms-submit-field\" />\n\t\t\t\t\t\t\t<!-- /wp:zoom-forms/submit-field -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /wp:column -->\n\t\t\t\t</div>\n\t\t\t<!-- /wp:columns -->\n\t\t</div>\n\t</div>\n<!-- /wp:group -->"
			)
		);
	}

	/**
	 * Filters the allowed Gutenberg block types for a given post.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function filter_allowed_block_types( $allowed_block_types, $post ) {
		if ( 'wpzf-form' == $post->post_type ) {
			$allowed_block_types = array(
				'zoom-forms/text-field',
				'zoom-forms/textarea-field',
				'zoom-forms/select-field',
				'zoom-forms/checkbox-field',
				'zoom-forms/radio-field',
				'zoom-forms/label-field',
				'zoom-forms/submit-field',
				'core/paragraph',
				'core/heading',
				'core/list',
				'core/quote',
				'core/code',
				'core/preformatted',
				'core/pullquote',
				'core/table',
				'core/verse',
				'core/image',
				'core/gallery',
				'core/audio',
				'core/cover',
				'core/file',
				'core/media-text',
				'core/video',
				'core/buttons',
				'core/columns',
				'core/group',
				'core/more',
				'core/nextpage',
				'core/separator',
				'core/spacer'
			);
		}

		return $allowed_block_types;
	}

	/**
	 * Adds needed categories to the Gutenberg block categories, if not already present.
	 *
	 * @access public
	 * @param  array   $categories Array containing all registered Gutenberg block categories.
	 * @param  WP_Post $post       A WP_Post object representing the post being loaded.
	 * @return array
	 * @since  1.0.0
	 */
	public function filter_block_categories( $categories, $post ) {
		if ( 'wpzf-form' == $post->post_type ) {
			$category_slugs = wp_list_pluck( $categories, 'slug' );

			if ( ! in_array( 'zoom-forms', $category_slugs, true ) ) {
				array_unshift(
					$categories,
					array(
						'slug' => 'zoom-forms',
						'title' => __( 'Input', 'zoom-forms' ),
						'icon' => 'wordpress'
					)
				);
			}
		} else {
			$category_slugs = wp_list_pluck( $categories, 'slug' );

			if ( ! in_array( 'wpzoom-blocks', $category_slugs, true ) ) {
				$categories = array_merge(
					$categories,
					array(
						array(
							'slug' => 'wpzoom-blocks',
							'title' => __( 'WPZOOM Blocks', 'zoom-forms' ),
							'icon' => 'wordpress'
						)
					)
				);
			}
		}

		return $categories;
	}

	/**
	 * Registers needed scripts and styles for use on the backend.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function register_backend_assets() {
		if ( 'wpzf-form' == get_post_type() ) {
			wp_register_script(
				'zoom-forms-js-backend-main',
				trailingslashit( $this->main_dir_url ) . 'main/backend/script.js',
				array( 'wp-blocks', 'wp-components', 'wp-core-data', 'wp-data', 'wp-element', 'wp-i18n', 'wp-polyfill' ),
				$this::VERSION,
				true
			);

			wp_register_style(
				'zoom-forms-css-backend-main',
				trailingslashit( $this->main_dir_url ) . 'main/backend/style.css',
				array(),
				$this::VERSION
			);
		} else {
			wp_register_script(
				'zoom-forms-js-backend-formblock',
				trailingslashit( $this->main_dir_url ) . 'form-block/backend/script.js',
				array( 'wp-blocks', 'wp-components', 'wp-core-data', 'wp-data', 'wp-element', 'wp-i18n', 'wp-polyfill' ),
				$this::VERSION,
				true
			);

			wp_register_style(
				'zoom-forms-css-backend-formblock',
				trailingslashit( $this->main_dir_url ) . 'form-block/backend/style.css',
				array(),
				$this::VERSION
			);
		}
	}

	/**
	 * Registers needed scripts and styles for use on the frontend.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function register_frontend_assets() {
		wp_register_script(
			'zoom-forms-js-frontend-formblock',
			trailingslashit( $this->main_dir_url ) . 'form-block/frontend/script.js',
			array( 'wp-blocks', 'wp-components', 'wp-core-data', 'wp-data', 'wp-element', 'wp-i18n', 'wp-polyfill' ),
			$this::VERSION,
			true
		);

		wp_register_style(
			'zoom-forms-css-frontend-formblock',
			trailingslashit( $this->main_dir_url ) . 'form-block/frontend/style.css',
			array(),
			$this::VERSION
		);
	}

	/**
	 * Removes the Quick Edit option from the forms post type since it doesn't make sense for that type.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function remove_quick_edit( $actions, $post ) {
		if ( 'wpzf-form' == $post->post_type ) {
			unset( $actions[ 'inline hide-if-no-js' ] );
		}

		return $actions;
	}

	/**
	 * Removes the Inline Edit option from the forms post type since it doesn't make sense for that type.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function remove_bulk_actions( $actions ) {
		unset( $actions[ 'edit' ] );

		return $actions;
	}

	/**
	 * Returns whether the current page is related to the forms post type from this plugin.
	 *
	 * @access public
	 * @return bool
	 * @since  1.0.0
	 */
	public function is_forms_post_type() {
		$typenow = '';

		if ( is_admin() && current_user_can( 'edit_posts' ) ) {
			if ( isset( $_REQUEST[ 'post_type' ] ) && post_type_exists( $_REQUEST[ 'post_type' ] ) ) {
				$typenow = $_REQUEST[ 'post_type' ];
			} else {
				$post_id = -1;

				if ( isset( $_GET[ 'post' ] ) && isset( $_POST[ 'post_ID' ] ) && (int) $_GET[ 'post' ] !== (int) $_POST[ 'post_ID' ] ) {
					// Do nothing
				} elseif ( isset( $_GET[ 'post' ] ) ) {
					$post_id = (int) $_GET[ 'post' ];
				} elseif ( isset( $_POST[ 'post_ID' ] ) ) {
					$post_id = (int) $_POST[ 'post_ID' ];
				}

				if ( $post_id > -1 ) {
					$post = get_post( $post_id );
					$typenow = $post->post_type;
				}
			}
		}

		return 'wpzf-form' == $typenow;
	}

	/**
	 * Called to render the form block on the frontend.
	 *
	 * @access public
	 * @return bool
	 * @since  1.0.0
	 */
	public function form_block_render( $block_attributes, $content ) {
		global $current_screen;

		$current_screen = function_exists( 'get_current_screen' ) ? get_current_screen() : null;

		if ( is_admin() || ( ! is_null( $current_screen ) && $current_screen->is_block_editor() ) ) return '';

		return sprintf(
			"<!-- ZOOM Forms Start -->\n<form method=\"post\" action=\"%s\" class=\"zoom-forms_form\">\n\t<input type=\"hidden\" name=\"action\" value=\"wpzf_submit\" />\n\t%s\n\n\t%s\n</form>\n<!-- ZOOM Forms End -->",
			admin_url( 'admin-post.php' ),
			wp_nonce_field( 'wpzf_submit', '_wpnonce', true, false ),
			preg_replace( '/<!--(.*)-->/Uis', '', get_post_field( 'post_content', intval( $block_attributes[ 'formId' ] ), 'display' ) )
		);
	}

	/**
	 * Callback that is triggered when a form is submitted on the frontend.
	 *
	 * @access public
	 * @return bool
	 * @since  1.0.0
	 */
	public function action_form_post() {
		$success = false;
		$url = isset( $_POST[ '_wp_http_referer' ] ) ? sanitize_text_field( wp_unslash( $_POST[ '_wp_http_referer' ] ) ) : home_url();

		if ( isset( $_POST[ '_wpnonce' ] ) && wp_verify_nonce( $_POST[ '_wpnonce' ], 'wpzf_submit' ) ) {
			$success = true;
		} else {
			$success = false;
		}

		wp_safe_redirect( urldecode( add_query_arg( 'success', $success, $url ) ) );

		exit;
	}
}