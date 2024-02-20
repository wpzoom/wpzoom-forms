<?php
/**
 * Class WPZOOM_Forms_Template_Manager
 *
 * @since   1.0.5
 * @package WPZOOM_Forms
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'WPZOOM_Forms_Template_Manager' ) ) {
	/**
	 * Main WPZOOM_Template_Manager Class.
	 *
	 * @since 1.0.5
	 */
	class WPZOOM_Forms_Template_Manager {
		/**
		 * This plugin's instance.
		 *
		 * @var WPZOOM_Forms_Template_Manager
		 * @since 1.0.5
		 */
		private static $instance;

		/**
		 * Provides singleton instance.
		 *
		 * @since 1.0.5
		 * @return self instance
		 */
		public static function instance() {
			if ( null === self::$instance ) {
				self::$instance = new WPZOOM_Forms_Template_Manager();
			}

			return self::$instance;
		}

		/**
		 * The Constructor.
		 */
		public function __construct() {
			
			add_action( 'admin_enqueue_scripts', array( $this, 'scripts' ) );
			add_action( 'admin_footer', array( $this, 'modal_window' ) );
			add_filter( 'default_content', array( $this, 'default_form_content' ), 10, 2 );
		
		}

	/**
	 * Set default content for the recipe card CPT.
	 *
	 * @since 1.2.0
	 */
	public function default_form_content( $content, $post ) {

		$template = isset( $_GET['template'] ) ? $_GET['template'] : '';

		if ( self::get_current_post_type( 'wpzf-form' ) ) {
			if( ! empty( $template ) ) {
				$templates = include WPZOOM_FORMS_PATH . 'templates/templates.php';
				foreach( $templates as $template_data ) {
					if( $template_data['id'] == $template ) {
						$content = $template_data['content'];
					}
				}
			}
		}


		return $content;

	}

	/**
	 * Get current post type.
	 *
	 * @since 1.2.0
	 */
	public static function get_current_post_type( $post_type = '' ) {
		
		$type = false;
	
		if( isset( $_GET['post'] ) ) {
			$id = $_GET['post'];
			$post = get_post( $id );
			if( is_object( $post ) && $post->post_type == $post_type ) {
				$type = true;
			}
		} elseif ( isset( $_GET['post_type'] ) && $_GET['post_type'] == $post_type ) {
			$type = true;
		}
		
		return $type;	
	}

		/**
		 * Include admin scripts & styles
		 */
		public function scripts() {

			global $pagenow;

			if( 'post-new.php' !== $pagenow && isset( $_GET['post_type'] ) && $_GET['post_type'] == 'wpzf-form' ) {
				// Enqueue modal scripts
				wp_enqueue_script( 'wpzoom-forms-modal', WPZOOM_FORMS_URL . 'dist/assets/admin/js/modal.js', array( 'jquery' ), WPZOOM_FORMS_VERSION, true );
				wp_enqueue_style( 'wpzoom-forms-modal', WPZOOM_FORMS_URL . 'dist/assets/admin/css/modal.css', array(), WPZOOM_FORMS_VERSION );
			}
		}

		/**
		 * Include modal window
		 */
		public function modal_window() {

			global $pagenow;

			if( 'post-new.php' !== $pagenow && isset( $_GET['post_type'] ) && $_GET['post_type'] == 'wpzf-form' ) {

				$new_post_link = admin_url( 'post-new.php?post_type=wpzf-form' );

				$new_post_link = add_query_arg( array(
					'template' => 'contact-form',
				), $new_post_link );

				?>
				<div id="wpzoom-forms-modal" class="wpzoom-forms-modal">
					<div class="wpzoom-forms-modal-content">
						<div class="wpzoom-forms-modal-header">
							<h2><?php esc_html_e( 'Select a Template', 'wpzoom-forms' ); ?></h2>
							<span class="wpzoom-forms-modal-close">&times;</span>
						</div>
						<ul class="wpzoom-forms-templates-list">
							<?php
								$templates = include WPZOOM_FORMS_PATH . 'templates/templates.php';
								foreach( $templates as $template_data ) {
									$classActive = ( $template_data['id'] == 'contact-form' ) ? ' class="active" ' : '';
									?>
									<li <?php echo $classActive; ?>>
										<a href="#" data-template-id="<?php echo esc_attr( $template_data['id'] ) ?>">
											<?php echo $template_data['name'] ?>
											<span><?php echo $template_data['desc'] ?></span>
										</a>
									</li>
									<?php
								}
							?>
						</ul>
						<div class="wpzoom-forms-modal-footer">
							<a class="button-secondary wpzoom-btn-bordered" id="wpzoom_close_modal" href="#"><?php esc_html_e( 'Cancel', 'wpzoom-forms' ); ?></a>
							<a class="button-primary wpzoom-btn-solid" id="wpzoom_proceed_template" href="<?php echo esc_url( $new_post_link ); ?>"><?php esc_html_e( 'Proceed', 'wpzoom-forms' ); ?></a>
						</div>
					</div>
					
				</div>
				<?php
			}
		}



	
	
	}

	WPZOOM_Forms_Template_Manager::instance();
}