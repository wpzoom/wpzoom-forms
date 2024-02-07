<?php
namespace WPZOOMElementorForms;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;

use Elementor\Plugin;
use Elementor\Utils;

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

/**
 * WPZOOM Elementor Forms Widget
 *
 * Elementor widget that inserts a customizable forms.
 *
 * @since 1.0.0
 */
class Wpzoom_Forms_Cpt extends Widget_Base {


	/**
	 * @var \WP_Query
	 */
	private $query = null;

	/**
	 * $post_type
	 * @var string
	 */
	private $post_type = 'wpzf-form';	

	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct( $data = array(), $args = null ) {
		parent::__construct( $data, $args );
	}

	/**
	 * Get widget name.
	 *
	 * Retrieve widget name.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget name.
	 */
	public function get_name() {
		return 'wpzoom-forms-widget-cpt';
	}

	/**
	 * Get widget title.
	 *
	 * Retrieve widget title.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget title.
	 */
	public function get_title() {
		return esc_html__( 'Insert WPZOOM Form', 'wpzoom-forms' );
	}

	/**
	 * Get widget icon.
	 *
	 * Retrieve widget icon.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget icon.
	 */
	public function get_icon() {
		return 'eicon-form-horizontal';
	}

	/**
	 * Get widget categories.
	 *
	 * Retrieve the list of categories the widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget categories.
	 */
	public function get_categories() {
		return array( 'wpzoom-elementor-form' );
	}

	/**
	 * Script Dependencies.
	 *
	 * Returns all the scripts the widget depends on.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Script slugs.
	 */
	public function get_script_depends() {
		$deps = array( 'jquery' );
		return $deps;
	}

	/**
	 * Get the query
	 *
	 * Returns the current query.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return \WP_Query The current query.
	 */
	public function get_query() {
		return $this->query;
	}

	/**
	 * Register Controls.
	 *
	 * Registers all the controls for this widget.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return void
	 */
	protected function register_controls() {
		$this->register_content_controls();
	}

	/**
	 * Register Content Controls.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return void
	 */
	protected function register_content_controls() {

		$this->start_controls_section(
			'_section_forms_cpt',
			array(
				'label' => esc_html__( 'WPZOOM Forms', 'wpzoom-forms' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			)
		);

		$inline_style = 'style="
		color:#856404;
		font-size:12px;
		line-height:22px;
		margin-top:10px;
		font-weight:300 !important; 
		display:block; 
		background:#fff3cd;
		border:1px solid;
		border-color:#ffeeba;
		border-radius:5px;
		padding:10px 15px;
	"';

	$rec_note = sprintf(
		'<span %s>Use only one instance of this widget per page/post</span>',
		$inline_style
	);

	$this->add_control(
		'recomendation_note',
		array(
			'label'       => 'IMPORTANT!' . $rec_note,
			'type'        => Controls_Manager::HEADING,
		)
	);

		$this->add_control(
			'forms_post_id',
			array(
				'label'    => esc_html__( 'Select a Form', 'wpzoom-forms' ),
				'type'     => Controls_Manager::SELECT2,
				'label_block' => true,
				'options'  => $this->get_forms_posts(),
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Get rcb posts.
	 *
	 * Retrieve a list of all forms posts.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array All rcb posts.
	 */
	protected function get_forms_posts() {

		$forms_posts = array();

		$args = array(
			'post_type'   => $this->post_type,
			'numberposts' => -1
		);

		$posts = get_posts( $args );

		if ( !empty( $posts ) && !is_wp_error( $posts ) ) {
			foreach ( $posts as $key => $post ) {
				if ( is_object( $post ) && property_exists( $post, 'ID' ) ) {
					$forms_posts[ $post->ID ] = get_the_title( $post );
				}
			}
		}

		return $forms_posts;

	}

	/**
	 * Render the Widget.
	 *
	 * Renders the widget on the frontend.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return void
	 */
	protected function render() {

		$settings = $this->get_settings_for_display();

		$post_id = isset( $settings['forms_post_id'] ) ? $settings['forms_post_id'] : null;

		if( ! $post_id ) {
			return;
		}

		echo do_shortcode( '[wpzf_form id="' . $post_id . '"]' );

	}

}