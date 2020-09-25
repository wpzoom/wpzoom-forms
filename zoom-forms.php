<?php
/**
 * ZOOM Forms - Custom forms for WordPress, by WPZOOM.
 *
 * @package   ZOOM_Forms
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
	 * Presets used in the form builder.
	 *
	 * @var    ZOOM_Form_Presets
	 * @access public
	 * @since  1.0.0
	 */
	public $presets;

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

			require_once( $this->plugin_dir_path . 'presets.php' );

			$this->presets = new ZOOM_Forms_Presets();

			load_plugin_textdomain( 'zoom-forms', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );

			add_filter( 'allowed_block_types',                          array( $this, 'filter_allowed_block_types' ), 10, 2 );
			add_filter( 'block_categories',                             array( $this, 'filter_block_categories' ),    10, 2 );
			add_filter( 'post_row_actions',                             array( $this, 'modify_row_actions' ),         10, 2 );
			add_filter( 'bulk_actions-edit-wpzf-form',                  array( $this, 'remove_bulk_actions' ),        10 );
			add_filter( 'bulk_actions-edit-wpzf-submission',            array( $this, 'remove_bulk_actions' ),        10 );
			add_filter( 'manage_edit-wpzf-submission_columns',          array( $this, 'post_list_columns' ),          10 );
			add_filter( 'manage_edit-wpzf-submission_sortable_columns', array( $this, 'post_list_sortable_columns' ), 10 );
			add_filter( 'screen_options_show_screen',                   array( $this, 'remove_screen_options' ),      10, 2 );
			add_filter( 'views_edit-wpzf-submission',                   array( $this, 'post_list_views' ),            10 );
			add_filter( 'list_table_primary_column',                    array( $this, 'post_list_primary_column' ),   10, 2 );
			add_action( 'admin_enqueue_scripts',                        array( $this, 'admin_enqueue_scripts' ),      100 );
			add_action( 'enqueue_block_editor_assets',                  array( $this, 'register_backend_assets' ),    10 );
			add_action( 'enqueue_block_assets',                         array( $this, 'register_frontend_assets' ),   10 );
			add_action( 'manage_wpzf-submission_posts_custom_column',   array( $this, 'post_list_custom_columns' ),   10, 2 );
			add_action( 'pre_get_posts',                                array( $this, 'sort_custom_column' ),         10 );
			add_action( 'in_admin_header',                              array( $this, 'remove_meta_boxes' ),          100 );
			add_action( 'add_meta_boxes_wpzf-submission',               array( $this, 'add_meta_boxes' ),             10 );
			add_action( 'admin_post_wpzf_submit',                       array( $this, 'action_form_post' ),           10 );

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
			
			register_post_type(
				'wpzf-submission',
				array(
					'label'               => __( 'ZOOM Form Submissions', 'zoom-forms' ),
					'labels'              => array(
						'name'                     => _x( 'ZOOM Form Submissions', 'post type general name', 'zoom-forms' ),
						'singular_name'            => _x( 'ZOOM Form Submission', 'post type singular name', 'zoom-forms' ),
						'add_new'                  => _x( 'Add New', 'post', 'zoom-forms' ),
						'add_new_item'             => __( 'Add New Submission', 'zoom-forms' ),
						'edit_item'                => __( 'ZOOM Form Submission', 'zoom-forms' ),
						'new_item'                 => __( 'New Submission', 'zoom-forms' ),
						'view_item'                => __( 'View Submission', 'zoom-forms' ),
						'view_items'               => __( 'View Submissions', 'zoom-forms' ),
						'search_items'             => __( 'Search Submissions', 'zoom-forms' ),
						'not_found'                => __( 'No submissions found.', 'zoom-forms' ),
						'not_found_in_trash'       => __( 'No submissions found in Trash.', 'zoom-forms' ),
						'all_items'                => __( 'Submissions', 'zoom-forms' ),
						'archives'                 => __( 'Submission Archives', 'zoom-forms' ),
						'attributes'               => __( 'Submission Attributes', 'zoom-forms' ),
						'insert_into_item'         => __( 'Insert into submission', 'zoom-forms' ),
						'uploaded_to_this_item'    => __( 'Uploaded to this submission', 'zoom-forms' ),
						'featured_image'           => _x( 'Featured image', 'post', 'zoom-forms' ),
						'set_featured_image'       => _x( 'Set featured image', 'post', 'zoom-forms' ),
						'remove_featured_image'    => _x( 'Remove featured image', 'post', 'zoom-forms' ),
						'use_featured_image'       => _x( 'Use as featured image', 'post', 'zoom-forms' ),
						'filter_items_list'        => __( 'Filter form submission list', 'zoom-forms' ),
						'items_list_navigation'    => __( 'Form Submissions list navigation', 'zoom-forms' ),
						'items_list'               => __( 'Form Submissions list', 'zoom-forms' ),
						'item_published'           => __( 'Form Submission saved.', 'zoom-forms' ),
						'item_published_privately' => __( 'Form Submission saved privately.', 'zoom-forms' ),
						'item_reverted_to_draft'   => __( 'Form Submission reverted to draft.', 'zoom-forms' ),
						'item_scheduled'           => __( 'Form Submission scheduled.', 'zoom-forms' ),
						'item_updated'             => __( 'Form Submission updated.', 'zoom-forms' )
					),
					'public'              => true,
					'exclude_from_search' => true,
					'publicly_queryable'  => false,
					'show_in_nav_menus'   => false,
					'show_in_admin_bar'   => false,
					'show_in_rest'        => false,
					'show_in_menu'        => 'edit.php?post_type=wpzf-form',
					'menu_position'       => 31,
					'menu_icon'           => 'dashicons-feedback',
					'supports'            => array( '' ),
					'capabilities'        => array(
						'create_posts'  => 'do_not_allow',
						'publish_posts' => 'do_not_allow',
						'edit_posts'    => 'edit_posts',
						'delete_posts'  => 'delete_posts'
					),
					'map_meta_cap'        => true
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

			if ( $this->is_post_type( 'wpzf-form' ) ) {
				$this->forms_display();
				$this->register_blocks();
				$this->block_patterns();
			} elseif ( $this->is_post_type( 'wpzf-submission' ) ) {
				$this->submissions_display();
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

		$publish = $wp_post_statuses[ 'publish' ];

		$publish->label                     = __( 'Saved', 'zoom-forms' );
		$publish->label_count[ 0 ]          = __( 'Saved <span class="count">(%s)</span>', 'zoom-forms' );
		$publish->label_count[ 1 ]          = __( 'Saved <span class="count">(%s)</span>', 'zoom-forms' );
		$publish->label_count[ 'singular' ] = __( 'Saved <span class="count">(%s)</span>', 'zoom-forms' );
		$publish->label_count[ 'plural' ]   = __( 'Saved <span class="count">(%s)</span>', 'zoom-forms' );

		$wp_post_statuses[ 'publish' ] = $publish;

		$wp_post_statuses = array_diff_key(
			$wp_post_statuses,
			array_flip( [
				'future',
				'pending',
				'private',
				'request-pending',
				'request-confirmed',
				'request-failed',
				'request-completed'
			] )
		);

		add_filter( 'post_date_column_status', function() { return __( 'Last Modified', 'zoom-forms' ); } );
		add_filter( 'post_date_column_time',   function( $time, $post ) {
			return sprintf(
				__( '%1$s at %2$s', 'zoom-forms' ),
				get_the_modified_time( __( 'Y/m/d', 'zoom-forms' ), $post ),
				get_the_modified_time( __( 'g:i a', 'zoom-forms' ), $post )
			);
		}, 10, 2 );
	}

	/**
	 * Modifies the way the backend submissions list is displayed.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function submissions_display() {
		global $wp_post_statuses;

		$wp_post_statuses = array_diff_key(
			$wp_post_statuses,
			array_flip( [
				'future',
				'pending',
				'private',
				'request-pending',
				'request-confirmed',
				'request-failed',
				'request-completed'
			] )
		);

		add_filter( 'post_date_column_status', function() { return __( 'Submitted', 'zoom-forms' ); } );
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
				'name'        => array(
					'type'    => 'string',
					'default' => ''
				),
				'type'        => array(
					'type'    => 'string',
					'default' => 'text'
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
				'name'         => array(
					'type'    => 'string',
					'default' => ''
				),
				'forInput'     => array(
					'type'    => 'string',
					'default' => ''
				)
			),
			'submit'   => array(
				'id'          => array(
					'type'    => 'string',
					'default' => ''
				),
				'name'        => array(
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
			$this->presets->contact_form
		);
	}

	/**
	 * Filters the allowed Gutenberg block types for a given post.
	 *
	 * @access public
	 * @param  array   $allowed_block_types An array of all the allowed block types.
	 * @param  WP_Post $post                The post that is currently being rendered.
	 * @return array
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
	 * Registers needed scripts for use on the admin backend.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function admin_enqueue_scripts() {
		if ( 'wpzf-submission' == get_post_type() ) {
			wp_dequeue_script( 'autosave' );

			wp_enqueue_style(
				'zoom-forms-css-backend-submissions',
				trailingslashit( $this->main_dir_url ) . 'submissions/backend/style.css',
				array(),
				$this::VERSION
			);
		}
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
	 * Changes the row actions in post lists for certain post types.
	 *
	 * @access public
	 * @param  array   $actions An array of all the possible post row actions.
	 * @param  WP_Post $post    The post object for the post that is being displayed.
	 * @return array
	 * @since  1.0.0
	 */
	public function modify_row_actions( $actions, $post ) {
		if ( 'wpzf-form' == $post->post_type || 'wpzf-submission' == $post->post_type ) {
			if ( 'wpzf-submission' == $post->post_type && isset( $actions[ 'edit' ] ) ) {
				$actions[ 'edit' ] = preg_replace( '/\<a([^>]+)\>(.+)\<\/a\>/i', '<a$1>' . __( 'View', 'zoom-forms' ) . '</a>', $actions[ 'edit' ] );
			}

			if ( isset( $actions[ 'inline hide-if-no-js' ] ) ) {
				unset( $actions[ 'inline hide-if-no-js' ] );
			}
		}

		return $actions;
	}

	/**
	 * Removes the Inline Edit option from post types it doesn't make sense for.
	 *
	 * @access public
	 * @param  array  $actions An array of all the possible bulk actions.
	 * @return array
	 * @since  1.0.0
	 */
	public function remove_bulk_actions( $actions ) {
		if ( isset( $actions[ 'edit' ] ) ) {
			unset( $actions[ 'edit' ] );
		}

		return $actions;
	}

	/**
	 * Changes the columns displayed in the post list for certain post types.
	 *
	 * @access public
	 * @param  array  $columns An array of all the columns.
	 * @return array
	 * @since  1.0.0
	 */
	public function post_list_columns( $columns ) {
		return array(
			'cb'   => $columns[ 'cb' ],
			'desc' => __( 'Submission', 'zoom-forms' ),
			'form' => __( 'Form', 'zoom-forms' ),
			'date' => $columns[ 'date' ]
		);
	}

	/**
	 * Changes the sortable columns displayed in the post list for certain post types.
	 *
	 * @access public
	 * @param  array  $columns An array of all the sortable columns.
	 * @return array
	 * @since  1.0.0
	 */
	public function post_list_sortable_columns( $columns ) {
		$columns[ 'desc' ] = 'wpzf_desc';
		$columns[ 'form' ] = 'wpzf_form';

		return $columns;
	}

	/**
	 * Changes the column content displayed in the post list for certain post types.
	 *
	 * @access public
	 * @param  string $column  The name of the column to display.
	 * @param  int    $post_id The ID of the current post.
	 * @return array
	 * @since  1.0.0
	 */
	public function post_list_custom_columns( $column, $post_id ) {
		if ( 'desc' == $column ) {
			$data = get_post_meta( $post_id, '_wpzf_fields', true );
			$title = __( '[Unknown]', 'zoom-forms' );

			if ( ! is_null( $data ) && false !== $data && is_array( $data ) && ! empty( $data ) ) {
				$title = '';

				foreach ( $data as $name => $value ) {
					$title .= '<span class="field-name">' . esc_html( substr( $name, 0, 250 ) ) . ( strlen( $name ) > 250 ? '&hellip;' : '' ) . '</span>
					           <span class="field-value">' . esc_html( substr( $value, 0, 250 ) ) . ( strlen( $value ) > 250 ? '&hellip;' : '' ) . '</span>';
				}
			}

			printf( '<a href="%s" class="row-title">%s</a>', esc_url( get_edit_post_link( $post_id ) ), $title );
		} elseif ( 'form' == $column ) {
			$form_id = intval( get_post_meta( $post_id, '_wpzf_form_id', true ) );
			$form_name = __( '[Unknown]', 'zoom-forms' );

			if ( $form_id > 0 ) {
				$form_name = $form_id;

				if ( ! is_null( get_post( $form_id ) ) ) {
					$form_name = '<a href="' . esc_url( get_edit_post_link( $form_id ) ) . '">' . get_the_title( $form_id ) . '</a>';
				}
			}

			echo $form_name;
		}
	}

	/**
	 * Sets what the primary column is in the post list for certain post types.
	 *
	 * @access public
	 * @param  string $default The default/primary column.
	 * @param  string $screen  Which screen is currently being rendered.
	 * @return array
	 * @since  1.0.0
	 */
	public function post_list_primary_column( $default, $screen ) {
		if ( 'edit-wpzf-submission' == $screen ) {
			$default = 'desc';
		}

		return $default;
	}

	/**
	 * Handles sorting of custom columns in the post list for certain post types.
	 *
	 * @access public
	 * @param  WP_Query $query The current query.
	 * @return array
	 * @since  1.0.0
	 */
	public function sort_custom_column( $query ) {
		$orderby = $query->get( 'orderby' );

		if ( 'wpzf_desc' == $orderby || 'wpzf_form' == $orderby ) {
			$key = 'wpzf_desc' == $orderby ? '_wpzf_fields' : '_wpzf_form_id';

			$query->set( 'meta_query', array(
				'relation' => 'OR',
				array(
					'key'     => $key,
					'compare' => 'NOT EXISTS'
				),
				array(
					'key'     => $key
				)
			) );

			$query->set( 'orderby', 'meta_value' );
		}
	}

	/**
	 * Changes things on the edit screen of certain post types.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function remove_meta_boxes() {
		global $current_screen;

		if ( 'wpzf-submission' == $current_screen->post_type && 'wpzf-submission' == $current_screen->id ) {
			global $wp_meta_boxes;

			$wp_meta_boxes = array(
				'wpzf-submission' => array(
					'advanced' => array(),
					'side'     => array(),
					'normal'   => array(
						'high' => array(
							'wpzf-submission-mb' => $wp_meta_boxes[ 'wpzf-submission' ][ 'normal' ][ 'high' ][ 'wpzf-submission-mb' ]
						)
					)
				)
			);

			add_screen_option( 'layout_columns', array( 'max' => 1, 'default' => 1 ) );
		}
	}

	/**
	 * Removes screen options where not needed.
	 *
	 * @access public
	 * @param  bool      $show_screen Whether to show Screen Options tab.
	 * @param  WP_Screen $screen      Current WP_Screen instance.
	 * @return bool
	 * @since  1.0.0
	 */
	public function remove_screen_options( $show_screen, $screen ) {
		return 'wpzf-submission' == $screen->post_type && 'post' == $screen->base ? false : $show_screen;
	}

	/**
	 * Changes the views items for certain post types.
	 *
	 * @access public
	 * @param  array  $views All the possible views.
	 * @return bool
	 * @since  1.0.0
	 */
	public function post_list_views( $views ) {
		if ( isset( $views[ 'publish' ] ) ) {
			unset( $views[ 'publish' ] );
		}

		return $views;
	}

	/**
	 * Adds custom meta boxes to certain post types.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function add_meta_boxes() {
		add_meta_box(
			'wpzf-submission-mb',
			__( 'Submission', 'zoom-forms' ),
			array( $this, 'submission_meta_box' ),
			'wpzf-submission',
			'normal',
			'high'
		);
	}

	/**
	 * Outputs the content for the submission meta box.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function submission_meta_box() {
		$fields = get_post_meta( get_the_ID(), '_wpzf_fields', true );

		if ( ! is_null( $fields ) && false !== $fields && is_array( $fields ) && ! empty( $fields ) ) {
			echo '<ul class="wpzf-submission-view">';

			$form_id = intval( get_post_meta( get_the_ID(), '_wpzf_form_id', true ) );
			$form_name = __( '[Unknown]', 'zoom-forms' );

			if ( $form_id > 0 ) {
				$form_name = $form_id;

				if ( ! is_null( get_post( $form_id ) ) ) {
					$form_name = '<a href="' . esc_url( get_edit_post_link( $form_id ) ) . '">' . get_the_title( $form_id ) . '</a>';
				}
			}

			echo '<li class="top"><h3>' . sprintf( __( 'Form: %s', 'zoom-forms' ), $form_name ) . '</h3></li>';

			foreach ( $fields as $name => $value ) {
				echo '<li><h3>' . esc_html( $name ) . '</h3><div>' . make_clickable( apply_filters( 'the_content', esc_html( $value ) ) ) . '</div></li>';
			}

			echo '</ul>';

			return;
		}

		printf( '<p class="empty">%s</p>', __( 'Submission is empty&hellip;', 'zoom-forms' ) );
	}

	/**
	 * Returns whether the current page is related to the given post type.
	 *
	 * @access public
	 * @param  string $type The type to check for.
	 * @return bool
	 * @since  1.0.0
	 */
	public function is_post_type( $type ) {
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

		return $type == $typenow;
	}

	/**
	 * Called to render the form block on the frontend.
	 *
	 * @access public
	 * @param  array    $attributes An array containing the attributes for the block.
	 * @param  string   $content    A string containing the content of the block.
	 * @param  WP_Block $block      The WP_Block representation of the block.
	 * @return string
	 * @since  1.0.0
	 */
	public function form_block_render( $attributes, $content, $block ) {
		global $current_screen;

		$current_screen = function_exists( 'get_current_screen' ) ? get_current_screen() : null;

		if ( is_admin() || ( ! is_null( $current_screen ) && $current_screen->is_block_editor() ) ) return '';

		return sprintf(
			'<!-- ZOOM Forms Start -->
			<form id="wpzf-%2$s" method="post" action="%1$s" class="zoom-forms_form">
			<input type="hidden" name="action" value="wpzf_submit" />
			<input type="hidden" name="form_id" value="%2$s" />
			%3$s
			%4$s
			%5$s
			</form>
			<!-- ZOOM Forms End -->',
			admin_url( 'admin-post.php' ),
			intval( $attributes[ 'formId' ] ),
			wp_nonce_field( 'wpzf_submit', '_wpnonce', true, false ),
			( isset( $_GET[ 'success' ] )
				? '<div class="notice ' . ( '1' == $_GET[ 'success' ] ? 'success' : 'error' ) . '"><p>' .
				  ( '1' == $_GET[ 'success' ] ? __( 'Submitted successfully!', 'zoom-forms' ) : __( 'Submission failed!', 'zoom-forms' ) ) .
				  '</p></div>'
				: ''
			),
			preg_replace(
				array( '/<!--(.*)-->/Uis', '/<(input|textarea|select)(.*)name="([^"]+)"/Uis' ),
				array( '', '<$1$2name="wpzf_$3"' ),
				get_post_field( 'post_content', intval( $attributes[ 'formId' ] ), 'display' )
			)
		);
	}

	/**
	 * Callback that is triggered when a form is submitted on the frontend.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function action_form_post() {
		$success = false;
		$url = isset( $_POST[ '_wp_http_referer' ] ) ? sanitize_text_field( wp_unslash( $_POST[ '_wp_http_referer' ] ) ) : home_url();

		if ( isset( $_POST[ '_wpnonce' ] ) && wp_verify_nonce( $_POST[ '_wpnonce' ], 'wpzf_submit' ) ) {
			$form_id = isset( $_POST[ 'form_id' ] ) ? intval( $_POST[ 'form_id' ] ) : -1;
			$blocks = parse_blocks( $form_id > -1 ? get_post_field( 'post_content', $form_id, 'raw' ) : '' );

			if ( count( $blocks ) > 0 ) {
				$input_blocks = $this->get_input_blocks( $blocks );
				$form_method = get_post_meta( $form_id, '_form_method', true ) ?: 'email';
				$form_email = trim( get_post_meta( $form_id, '_form_email', true ) );

				if ( 'email' == $form_method && filter_var( $form_email, FILTER_VALIDATE_EMAIL ) ) {
					$email_body = '';

					foreach ( $_REQUEST as $key => $value ) {
						if ( strpos( $key, 'wpzf_' ) === 0 ) {
							$id = substr( $key, 5 );
							$name = isset( $input_blocks[ $id ] ) ? $input_blocks[ $id ] : __( 'Unnamed Input', 'zoom-forms' );

							$email_body .= '<strong>' . $name . ':</strong><br/>' . esc_html( $value ) . '<br/><br/>';
						}
					}

					$success = wp_mail(
						$form_email,
						sprintf( __( 'New Form Submission From %s', 'zoom-forms' ), esc_html( get_bloginfo( 'name' ) ) ),
						$email_body,
						array( 'Content-Type: text/html; charset=UTF-8' )
					);
				} elseif ( 'db' == $form_method ) {
					$content = array(
						'_wpzf_form_id' => $form_id,
						'_wpzf_fields'  => array()
					);

					foreach ( $_REQUEST as $key => $value ) {
						if ( strpos( $key, 'wpzf_' ) === 0 ) {
							$id = substr( $key, 5 );
							$name = isset( $input_blocks[ $id ] ) ? $input_blocks[ $id ] : __( 'Unnamed Input', 'zoom-forms' );

							$content[ '_wpzf_fields' ][ $name ] = $value;
						}
					}

					$success = false !== $content && 0 < wp_insert_post( array(
						'post_type'      => 'wpzf-submission',
						'post_status'    => 'publish',
						'comment_status' => 'closed',
						'ping_status'    => 'closed',
						'post_title'     => __( 'Submission', 'zoom-forms' ),
						'post_author'    => 1,
						'post_category'  => array( 1 ),
						'post_content'   => __( 'Submission', 'zoom-forms' ),
						'meta_input'     => $content
					) );
				}
			}
		}

		wp_safe_redirect(
			urldecode( add_query_arg( 'success', ( $success ? '1' : '0' ), $url ) ) .
			( $form_id > -1 ? '#wpzf-' . $form_id : '' )
		);

		exit;
	}

	/**
	 * Filters a hierarchical array of Gutenberg blocks to return just the blocks added by this plugin.
	 *
	 * @access public
	 * @param  array $blocks A hierarchical array of Gutenberg blocks.
	 * @return array
	 * @since  1.0.0
	 */
	public function get_input_blocks( $blocks ) {
		$found = [];

		if ( is_array( $blocks ) && count( $blocks ) > 0 ) {
			for ( $i = 0; $i < count( $blocks ); $i++ ) { 
				$block = $blocks[ $i ];

				if ( isset( $block[ 'blockName' ] ) &&
				     preg_match( '/^zoom\-forms\//i', $block[ 'blockName' ] ) &&
				     ! preg_match( '/(label|submit)\-field$/i', $block[ 'blockName' ] ) &&
				     isset( $block[ 'attrs' ] ) ) {
					$attrs = $block[ 'attrs' ];
					$found[ $attrs[ 'id' ] ] = $attrs[ 'name' ];
				}

				if ( isset( $block[ 'innerBlocks' ] ) ) {
					$found = array_merge( $found, $this->get_input_blocks( $block[ 'innerBlocks' ] ) );
				}
			}
		}

		return $found;
	}
}