<?php

$templates = array(
	array(
		'id'      => 'contact-form',
		'name'    => 'Contact Form',
		'icon'    => 'dashicons-email',
		'desc'    => 'A simple contact form with fields for name, email, subject, and message.',
		'content' => "<!-- wp:wpzoom-forms/form -->\n<div class=\"wp-block-wpzoom-forms-form\"><!-- wp:group -->\n<div class=\"wp-block-group\"><!-- wp:columns -->\n<div class=\"wp-block-columns\"><!-- wp:column {\"width\":\"100%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:100%\"><!-- wp:wpzoom-forms/text-name-field {\"id\":\"input_name\",\"name\":\"Name\",\"label\":\"Name\",\"className\":\"fullwidth\"} -->\n<label for=\"input_name\"><label for=\"input_name\">Name</label><sup class=\"wp-block-wpzoom-forms-required\">*</sup></label><input type=\"text\" name=\"input_name\" id=\"input_name\" placeholder=\"\" required class=\"wp-block-wpzoom-forms-text-name-field fullwidth\"/>\n<!-- /wp:wpzoom-forms/text-name-field -->\n\n<!-- wp:wpzoom-forms/text-email-field {\"id\":\"input_email\",\"name\":\"Email\",\"label\":\"Email\",\"replyto\":true,\"className\":\"fullwidth\"} -->\n<label for=\"input_email\"><label for=\"input_email\">Email</label><sup class=\"wp-block-wpzoom-forms-required\">*</sup></label><input type=\"email\" name=\"input_email\" id=\"input_email\" placeholder=\"\" required data-replyto=\"true\" class=\"wp-block-wpzoom-forms-text-email-field fullwidth\"/>\n<!-- /wp:wpzoom-forms/text-email-field -->\n\n<!-- wp:wpzoom-forms/text-plain-field {\"id\":\"input_subject\",\"name\":\"Subject\",\"label\":\"Subject\",\"subject\":true,\"className\":\"fullwidth\"} -->\n<label for=\"input_subject\"><label for=\"input_subject\">Subject</label><sup class=\"wp-block-wpzoom-forms-required\">*</sup></label><input type=\"text\" name=\"input_subject\" id=\"input_subject\" placeholder=\"\" required data-subject=\"true\" class=\"wp-block-wpzoom-forms-text-plain-field fullwidth\"/>\n<!-- /wp:wpzoom-forms/text-plain-field -->\n\n<!-- wp:wpzoom-forms/textarea-field {\"id\":\"input_message\",\"name\":\"Message\",\"label\":\"Message\",\"className\":\"fullwidth\"} -->\n<label for=\"input_message\"><label for=\"input_message\">Message</label><sup class=\"wp-block-wpzoom-forms-required\">*</sup></label><textarea name=\"input_message\" id=\"input_message\" cols=\"55\" rows=\"10\" placeholder=\"\" required class=\"wp-block-wpzoom-forms-textarea-field fullwidth\"></textarea>\n<!-- /wp:wpzoom-forms/textarea-field --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->\n\n<!-- wp:columns -->\n<div class=\"wp-block-columns\"><!-- wp:column {\"width\":\"30%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:30%\"><!-- wp:wpzoom-forms/submit-field {\"id\":\"input_submit\"} -->\n<input type=\"submit\" id=\"input_submit\" value=\"Submit\" class=\"wp-block-wpzoom-forms-submit-field\"/>\n<!-- /wp:wpzoom-forms/submit-field --></div>\n<!-- /wp:column -->\n\n<!-- wp:column {\"width\":\"70%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:70%\"><!-- wp:paragraph {\"align\":\"right\",\"style\":{\"typography\":{\"fontSize\":16}}} -->\n<p class=\"has-text-align-right\" style=\"font-size:16px\">Fields marked with <strong class=\"has-accent-color has-text-color\">*</strong> are required.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns --></div>\n<!-- /wp:group --></div>\n<!-- /wp:wpzoom-forms/form -->"
	),
	array(
		'id'      => 'subscription-form',
		'name'    => 'Subscription Form',
		'icon'    => 'dashicons-email',
		'desc'    => 'A simple contact form with fields for name, email, subject, and message.',
		'content' => 'Subscription Form'
	),
	array(
		'id'      => 'registration-form',
		'name'    => 'Registration Form',
		'icon'    => 'dashicons-email',
		'desc'    => 'A simple contact form with fields for name, email, subject, and message.',
		'content' => 'Registration Form'
	),
	array(
		'id'      => 'order-form',
		'name'    => 'Order Form',
		'icon'    => 'dashicons-email',
		'desc'    => 'A simple contact form with fields for name, email, subject, and message.',
		'content' => 'Order Form'
	),
	array(
		'id'      => 'feedback-form',
		'name'    => 'Feedback Form',
		'icon'    =>  'dashicons-email',
		'desc'    => 'A simple contact form with fields for name, email, subject, and message.',
		'content' => 'Feedback Form'
	),
	array(
		'id'      => 'appointment-form',
		'name'    => 'Appointment Form',
		'icon'    =>  'dashicons-email',
		'desc'    => 'A simple contact form with fields for name, email, subject, and message.',
		'content' => 'Appointment Form'
	)
);

return $templates;