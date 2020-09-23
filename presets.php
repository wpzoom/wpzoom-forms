<?php
/**
 * ZOOM Forms - Custom forms for WordPress, by WPZOOM.
 *
 * @package    ZOOM_Forms
 * @subpackage ZOOM_Forms_Presets
 * @author     WPZOOM
 * @copyright  2020 WPZOOM
 * @license    GPL-2.0-or-later
 */

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

/**
 * Class ZOOM_Forms_Presets
 *
 * Contains form presets for the ZOOM Forms WordPress plugin.
 *
 * @since 1.0.0
 */
class ZOOM_Forms_Presets {
	/**
	 * A contact form preset.
	 *
	 * @var    array
	 * @access public
	 * @since  1.0.0
	 */
	public $contact_form = array();

	/**
	 * Initializes the class.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function __construct() {
		$this->contact_form = array(
			'title'       => __( 'Contact Form', 'zoom-forms' ),
			'description' => _x( 'A simple contact form.', 'Block pattern description', 'zoom-forms' ),
			'keywords'    => array( __( 'Contact', 'zoom-forms' ), __( 'Form', 'zoom-forms' ) ),
			'categories'  => array( 'zoom-forms' ),
			'content'     => $this->preset_contact_form()
		);
	}

	/**
	 * Defines the content of the contact form preset.
	 *
	 * @access private
	 * @return string
	 * @since  1.0.0
	 */
	private function preset_contact_form() {
		$label_name = __( 'Name', 'zoom-forms' );
		$label_email = __( 'Email', 'zoom-forms' );
		$label_subject = __( 'Subject', 'zoom-forms' );
		$label_message = __( 'Message', 'zoom-forms' );
		$label_submit = __( 'Submit', 'zoom-forms' );
		$label_required = __( 'Fields marked with <strong class="has-accent-color has-text-color">*</strong> are required.', 'zoom-forms' );

		return <<<EOT
		<!-- wp:group {"style":{"color":{"background":"#ffffff"}}} -->
		<div class="wp-block-group has-background" style="background-color:#ffffff">
			<div class="wp-block-group__inner-container">
				<!-- wp:columns -->
				<div class="wp-block-columns">
					<!-- wp:column {"width":20} -->
					<div class="wp-block-column" style="flex-basis:20%">
						<!-- wp:paragraph {"className":"wp-block-zoom-forms-required alignright","align":"right","textColor":"accent"} -->
						<p class="wp-block-zoom-forms-required alignright has-text-align-right has-accent-color has-text-color"><strong><sup>*</sup></strong></p>
						<!-- /wp:paragraph -->
		
						<!-- wp:zoom-forms/label-field {"id":"input_label1","align":"right"} -->
						<label for="input_name" class="wp-block-zoom-forms-label-field alignright">$label_name</label>
						<!-- /wp:zoom-forms/label-field -->
					</div>
					<!-- /wp:column -->
		
					<!-- wp:column {"width":80} -->
					<div class="wp-block-column" style="flex-basis:80%">
						<!-- wp:zoom-forms/text-field {"id":"input_name","name":"$label_name","align":"left"} -->
						<input type="text" name="input_name" id="input_name" required class="wp-block-zoom-forms-text-field alignleft" />
						<!-- /wp:zoom-forms/text-field -->
					</div>
					<!-- /wp:column -->
				</div>
				<!-- /wp:columns -->
		
				<!-- wp:columns -->
				<div class="wp-block-columns">
					<!-- wp:column {"width":20} -->
					<div class="wp-block-column" style="flex-basis:20%">
						<!-- wp:paragraph {"className":"wp-block-zoom-forms-required alignright","align":"right","textColor":"accent"} -->
						<p class="wp-block-zoom-forms-required alignright has-text-align-right has-accent-color has-text-color"><strong><sup>*</sup></strong></p>
						<!-- /wp:paragraph -->
		
						<!-- wp:zoom-forms/label-field {"id":"input_label2","align":"right"} -->
						<label for="input_email" class="wp-block-zoom-forms-label-field alignright">$label_email</label>
						<!-- /wp:zoom-forms/label-field -->
					</div>
					<!-- /wp:column -->
		
					<!-- wp:column {"width":80} -->
					<div class="wp-block-column" style="flex-basis:80%">
						<!-- wp:zoom-forms/text-field {"id":"input_email","name":"$label_email","align":"left"} -->
						<input type="email" name="input_email" id="input_email" required class="wp-block-zoom-forms-text-field alignleft" />
						<!-- /wp:zoom-forms/text-field -->
					</div>
					<!-- /wp:column -->
				</div>
				<!-- /wp:columns -->
		
				<!-- wp:columns -->
				<div class="wp-block-columns">
					<!-- wp:column {"width":20} -->
					<div class="wp-block-column" style="flex-basis:20%">
						<!-- wp:paragraph {"className":"wp-block-zoom-forms-required alignright","align":"right","textColor":"accent"} -->
						<p class="wp-block-zoom-forms-required alignright has-text-align-right has-accent-color has-text-color"><strong><sup>*</sup></strong></p>
						<!-- /wp:paragraph -->
		
						<!-- wp:zoom-forms/label-field {"id":"input_label3","align":"right"} -->
						<label for="input_subject" class="wp-block-zoom-forms-label-field alignright">$label_subject</label>
						<!-- /wp:zoom-forms/label-field -->
					</div>
					<!-- /wp:column -->
		
					<!-- wp:column {"width":80} -->
					<div class="wp-block-column" style="flex-basis:80%">
						<!-- wp:zoom-forms/text-field {"id":"input_subject","name":"$label_subject","align":"left"} -->
						<input type="text" name="input_subject" id="input_subject" required class="wp-block-zoom-forms-text-field alignleft" />
						<!-- /wp:zoom-forms/text-field -->
					</div>
					<!-- /wp:column -->
				</div>
				<!-- /wp:columns -->
		
				<!-- wp:columns -->
				<div class="wp-block-columns">
					<!-- wp:column {"width":100} -->
					<div class="wp-block-column" style="flex-basis:100%">
						<!-- wp:zoom-forms/label-field {"id":"input_label4","align":"left","className":"nomarginright"} -->
						<label for="input_message" class="wp-block-zoom-forms-label-field alignleft nomarginright">$label_message</label>
						<!-- /wp:zoom-forms/label-field -->
		
						<!-- wp:paragraph {"className":"wp-block-zoom-forms-required alignleft","textColor":"accent"} -->
						<p class="wp-block-zoom-forms-required alignleft has-accent-color has-text-color"><strong><sup>*</sup></strong></p>
						<!-- /wp:paragraph -->
		
						<!-- wp:zoom-forms/textarea-field {"id":"input_message","name":"$label_message"} -->
						<textarea name="input_message" id="input_message" cols="55" rows="10" required class="wp-block-zoom-forms-textarea-field"></textarea>
						<!-- /wp:zoom-forms/textarea-field -->
					</div>
					<!-- /wp:column -->
				</div>
				<!-- /wp:columns -->
		
				<!-- wp:columns -->
				<div class="wp-block-columns">
					<!-- wp:column {"width":30} -->
					<div class="wp-block-column" style="flex-basis:30%">
						<!-- wp:zoom-forms/submit-field {"id":"input_submit"} -->
						<input type="submit" id="input_submit" value="$label_submit" class="wp-block-zoom-forms-submit-field" />
						<!-- /wp:zoom-forms/submit-field -->
					</div>
					<!-- /wp:column -->
		
					<!-- wp:column {"width":70} -->
					<div class="wp-block-column" style="flex-basis:70%">
						<!-- wp:paragraph {"align":"right","style":{"typography":{"fontSize":16}}} -->
						<p class="has-text-align-right" style="font-size:16px">$label_required</p>
						<!-- /wp:paragraph -->
					</div>
					<!-- /wp:column -->
				</div>
				<!-- /wp:columns -->
			</div>
		</div>
		<!-- /wp:group -->
		EOT;
	}
}