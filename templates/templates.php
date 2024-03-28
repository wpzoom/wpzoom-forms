<?php

$templates = array(
	array(
		'id'      => 'contact-form',
		'name'    => 'Contact Form',
		
		'icon'    => '<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3L10 7.88L2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5.28L9.48 9.85C9.63202 9.93777 9.80446 9.98397 9.98 9.98397C10.1555 9.98397 10.328 9.93777 10.48 9.85L18 5.28V13Z" /></svg>',

		'desc'    => 'A simple contact form with fields for name, email, subject, and message.',
		'content' => "<!-- wp:wpzoom-forms/form -->\n<div class=\"wp-block-wpzoom-forms-form\"><!-- wp:group -->\n<div class=\"wp-block-group\"><!-- wp:columns -->\n<div class=\"wp-block-columns\"><!-- wp:column {\"width\":\"100%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:100%\"><!-- wp:wpzoom-forms/text-name-field {\"id\":\"input_name\",\"name\":\"Name\",\"label\":\"Name\",\"className\":\"fullwidth\"} -->\n<label for=\"input_name\"><label for=\"input_name\">Name</label><sup class=\"wp-block-wpzoom-forms-required\">*</sup></label><input type=\"text\" name=\"input_name\" id=\"input_name\" placeholder=\"\" required class=\"wp-block-wpzoom-forms-text-name-field fullwidth\"/>\n<!-- /wp:wpzoom-forms/text-name-field -->\n\n<!-- wp:wpzoom-forms/text-email-field {\"id\":\"input_email\",\"name\":\"Email\",\"label\":\"Email\",\"replyto\":true,\"className\":\"fullwidth\"} -->\n<label for=\"input_email\"><label for=\"input_email\">Email</label><sup class=\"wp-block-wpzoom-forms-required\">*</sup></label><input type=\"email\" name=\"input_email\" id=\"input_email\" placeholder=\"\" required data-replyto=\"true\" class=\"wp-block-wpzoom-forms-text-email-field fullwidth\"/>\n<!-- /wp:wpzoom-forms/text-email-field -->\n\n<!-- wp:wpzoom-forms/text-plain-field {\"id\":\"input_subject\",\"name\":\"Subject\",\"label\":\"Subject\",\"subject\":true,\"className\":\"fullwidth\"} -->\n<label for=\"input_subject\"><label for=\"input_subject\">Subject</label><sup class=\"wp-block-wpzoom-forms-required\">*</sup></label><input type=\"text\" name=\"input_subject\" id=\"input_subject\" placeholder=\"\" required data-subject=\"true\" class=\"wp-block-wpzoom-forms-text-plain-field fullwidth\"/>\n<!-- /wp:wpzoom-forms/text-plain-field -->\n\n<!-- wp:wpzoom-forms/textarea-field {\"id\":\"input_message\",\"name\":\"Message\",\"label\":\"Message\",\"className\":\"fullwidth\"} -->\n<label for=\"input_message\"><label for=\"input_message\">Message</label><sup class=\"wp-block-wpzoom-forms-required\">*</sup></label><textarea name=\"input_message\" id=\"input_message\" cols=\"55\" rows=\"10\" placeholder=\"\" required class=\"wp-block-wpzoom-forms-textarea-field fullwidth\"></textarea>\n<!-- /wp:wpzoom-forms/textarea-field --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->\n\n<!-- wp:columns -->\n<div class=\"wp-block-columns\"><!-- wp:column {\"width\":\"30%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:30%\"><!-- wp:wpzoom-forms/submit-field {\"id\":\"input_submit\"} -->\n<input type=\"submit\" id=\"input_submit\" value=\"Submit\" class=\"wp-block-wpzoom-forms-submit-field\"/>\n<!-- /wp:wpzoom-forms/submit-field --></div>\n<!-- /wp:column -->\n\n<!-- wp:column {\"width\":\"70%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:70%\"><!-- wp:paragraph {\"align\":\"right\",\"style\":{\"typography\":{\"fontSize\":16}}} -->\n<p class=\"has-text-align-right\" style=\"font-size:16px\">Fields marked with <strong class=\"has-accent-color has-text-color\">*</strong> are required.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns --></div>\n<!-- /wp:group --></div>\n<!-- /wp:wpzoom-forms/form -->"
	),
	array(
		'id'      => 'subscription-form',
		'name'    => 'Subscription Form',
		
		'icon'    => '<svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3.79004 4.49999H1.79004C1.52482 4.49999 1.27047 4.60535 1.08293 4.79288C0.895396 4.98042 0.790039 5.23477 0.790039 5.49999C0.790039 5.7652 0.895396 6.01956 1.08293 6.20709C1.27047 6.39463 1.52482 6.49999 1.79004 6.49999H3.79004C4.05526 6.49999 4.30961 6.39463 4.49715 6.20709C4.68468 6.01956 4.79004 5.7652 4.79004 5.49999C4.79004 5.23477 4.68468 4.98042 4.49715 4.79288C4.30961 4.60535 4.05526 4.49999 3.79004 4.49999ZM20.57 1.65999V1.59999C20.2835 1.24978 19.9215 0.968913 19.5111 0.77842C19.1007 0.587927 18.6525 0.492741 18.2 0.499988H10.27C9.53524 0.493388 8.82358 0.756704 8.27004 1.23999C7.75304 1.69552 7.41313 2.31869 7.31004 2.99999L6.43004 7.99999C6.35437 8.43178 6.37424 8.87491 6.48827 9.2982C6.6023 9.72149 6.80771 10.1146 7.09004 10.45C7.3709 10.7842 7.72132 11.0531 8.11685 11.2379C8.51237 11.4227 8.94347 11.519 9.38004 11.52H17.32C18.0333 11.5308 18.727 11.2871 19.2768 10.8326C19.8266 10.3781 20.1965 9.74253 20.32 9.03999L21.2 4.03999C21.2693 3.62129 21.249 3.19265 21.1404 2.78238C21.0318 2.37212 20.8374 1.98956 20.57 1.65999ZM17.83 2.49999L14.43 5.25999C14.229 5.422 13.9731 5.49999 13.7159 5.47762C13.4587 5.45526 13.2201 5.33427 13.05 5.13999L10.72 2.49999H17.83ZM18.31 8.66999C18.2696 8.90478 18.1466 9.11741 17.9632 9.26958C17.7799 9.42174 17.5483 9.50345 17.31 9.49999H9.38004C9.23482 9.49877 9.0916 9.46593 8.96036 9.40376C8.82911 9.34159 8.71298 9.25158 8.62004 9.13999C8.52686 9.02898 8.45893 8.89905 8.42094 8.75919C8.38296 8.61933 8.37582 8.47288 8.40004 8.32999L9.20004 3.79999L11.55 6.45999C12.0615 7.04136 12.778 7.40242 13.5496 7.46765C14.3212 7.53289 15.0882 7.29723 15.69 6.80999L19.13 3.99999L18.31 8.66999ZM4.79004 0.499988H1.79004C1.52482 0.499988 1.27047 0.605345 1.08293 0.792882C0.895396 0.980418 0.790039 1.23477 0.790039 1.49999C0.790039 1.7652 0.895396 2.01956 1.08293 2.20709C1.27047 2.39463 1.52482 2.49999 1.79004 2.49999H4.79004C5.05526 2.49999 5.30961 2.39463 5.49715 2.20709C5.68468 2.01956 5.79004 1.7652 5.79004 1.49999C5.79004 1.23477 5.68468 0.980418 5.49715 0.792882C5.30961 0.605345 5.05526 0.499988 4.79004 0.499988Z" />
		</svg>',

		'desc'    => 'A simple contact form with fields for name, email, subject, and message.',
		'content' => "<!-- wp:wpzoom-forms/form --><div class=\"wp-block-wpzoom-forms-form\"><!-- wp:wpzoom-forms/text-email-field {\"id\":\"input_a7daa440\",\"label\":\"Email\"} --><label for=\"input_a7daa440\"><label for=\"input_a7daa440\">Email</label><sup class=\"wp-block-wpzoom-forms-required\">*</sup></label><input type=\"email\" name=\"input_a7daa440\" id=\"input_a7daa440\" placeholder=\"\" required data-replyto=\"false\" class=\"wp-block-wpzoom-forms-text-email-field\"/><!-- /wp:wpzoom-forms/text-email-field --><!-- wp:group --><div class=\"wp-block-group\"><!-- wp:columns --><div class=\"wp-block-columns\"><!-- wp:column {\"width\":\"30%\"} --><div class=\"wp-block-column\" style=\"flex-basis:30%\"><!-- wp:wpzoom-forms/submit-field {\"id\":\"input_submit\"} -->
		<input type=\"submit\" id=\"input_submit\" value=\"Subscribe\" class=\"wp-block-wpzoom-forms-submit-field\"/><!-- /wp:wpzoom-forms/submit-field --></div><!-- /wp:column --><!-- wp:column {\"width\":\"70%\"} -->
		<div class=\"wp-block-column\" style=\"flex-basis:70%\"><!-- wp:paragraph {\"align\":\"right\",\"style\":{\"typography\":{\"fontSize\":16}}} -->
		<p class=\"has-text-align-right\" style=\"font-size:16px\">Fields marked with <strong class=\"has-accent-color has-text-color\">*</strong> are required.</p><!-- /wp:paragraph --></div><!-- /wp:column --></div><!-- /wp:columns --></div><!-- /wp:group --></div><!-- /wp:wpzoom-forms/form -->"
	),
	array(
		'id'      => 'registration-form',
		'name'    => 'Wedding Invitation RSVP',
		
		'icon'    => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.58 11.3C15.0345 10.7319 15.2846 10.0275 15.29 9.3C15.29 8.42744 14.9434 7.59061 14.3264 6.97362C13.7094 6.35662 12.8726 6.01 12 6.01C11.1274 6.01 10.2906 6.35662 9.67362 6.97362C9.05662 7.59061 8.71 8.42744 8.71 9.3C8.71542 10.0275 8.96551 10.7319 9.42 11.3C8.52863 11.8424 7.8293 12.6502 7.42 13.61C7.36271 13.7318 7.3306 13.8639 7.32558 13.9984C7.32056 14.1329 7.34274 14.267 7.39079 14.3927C7.43884 14.5184 7.51177 14.6331 7.60521 14.73C7.69865 14.8268 7.81068 14.9038 7.93459 14.9563C8.0585 15.0089 8.19174 15.0358 8.32632 15.0357C8.4609 15.0355 8.59406 15.0081 8.71782 14.9552C8.84157 14.9023 8.95338 14.825 9.04655 14.7279C9.13971 14.6308 9.21231 14.5159 9.26 14.39C9.48983 13.8527 9.87157 13.3943 10.3583 13.071C10.8451 12.7477 11.4157 12.5735 12 12.57C12.586 12.5716 13.1588 12.7448 13.6475 13.0683C14.1362 13.3917 14.5195 13.8512 14.75 14.39C14.8266 14.5707 14.9546 14.725 15.1182 14.8334C15.2818 14.9419 15.4737 14.9998 15.67 15C15.8038 14.9975 15.936 14.9704 16.06 14.92C16.3039 14.8164 16.4966 14.6203 16.596 14.3747C16.6954 14.129 16.6932 13.854 16.59 13.61C16.1781 12.6487 15.4751 11.8408 14.58 11.3ZM12 10.57C11.7444 10.57 11.4946 10.4941 11.2823 10.3519C11.0699 10.2097 10.9046 10.0076 10.8073 9.77132C10.7099 9.53502 10.685 9.27514 10.7356 9.02463C10.7862 8.77413 10.91 8.5443 11.0914 8.36429C11.2728 8.18429 11.5036 8.06222 11.7545 8.01358C12.0054 7.96494 12.2651 7.99192 12.5006 8.09109C12.7362 8.19026 12.9369 8.35716 13.0775 8.57061C13.218 8.78406 13.292 9.03445 13.29 9.29C13.2874 9.63039 13.1503 9.95595 12.9087 10.1957C12.667 10.4355 12.3404 10.57 12 10.57ZM18 2H6C5.20435 2 4.44129 2.31607 3.87868 2.87868C3.31607 3.44129 3 4.20435 3 5V16C3 16.7956 3.31607 17.5587 3.87868 18.1213C4.44129 18.6839 5.20435 19 6 19H8.59L11.29 21.71C11.3834 21.8027 11.4943 21.876 11.6161 21.9258C11.7379 21.9755 11.8684 22.0008 12 22C12.2383 22 12.4689 21.9149 12.65 21.76L15.87 19H18C18.7956 19 19.5587 18.6839 20.1213 18.1213C20.6839 17.5587 21 16.7956 21 16V5C21 4.20435 20.6839 3.44129 20.1213 2.87868C19.5587 2.31607 18.7956 2 18 2ZM19 16C19 16.2652 18.8946 16.5196 18.7071 16.7071C18.5196 16.8946 18.2652 17 18 17H15.5C15.2617 17 15.0311 17.0851 14.85 17.24L12.05 19.64L9.71 17.29C9.61656 17.1973 9.50574 17.124 9.38391 17.0742C9.26207 17.0245 9.13161 16.9992 9 17H6C5.73478 17 5.48043 16.8946 5.29289 16.7071C5.10536 16.5196 5 16.2652 5 16V5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4H18C18.2652 4 18.5196 4.10536 18.7071 4.29289C18.8946 4.48043 19 4.73478 19 5V16Z" />
		</svg>',

		'desc'    => 'A simple form that can be used to invite people to a party or a wedding.',
		'content' => '<!-- wp:wpzoom-forms/form -->
<div class="wp-block-wpzoom-forms-form"><!-- wp:group -->
<div class="wp-block-group"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"100%"} -->
<div class="wp-block-column" style="flex-basis:100%"><!-- wp:wpzoom-forms/text-name-field {"id":"input_name","name":"Your Name","label":"Your Name","className":"fullwidth"} -->
<label for="input_name"><label for="input_name">Your Name</label><sup class="wp-block-wpzoom-forms-required">*</sup></label><input type="text" name="input_name" id="input_name" placeholder="" required class="wp-block-wpzoom-forms-text-name-field fullwidth"/>
<!-- /wp:wpzoom-forms/text-name-field -->

<!-- wp:wpzoom-forms/text-email-field {"id":"input_email","name":"Email","label":"Email","replyto":true,"className":"fullwidth"} -->
<label for="input_email"><label for="input_email">Email</label><sup class="wp-block-wpzoom-forms-required">*</sup></label><input type="email" name="input_email" id="input_email" placeholder="" required data-replyto="true" class="wp-block-wpzoom-forms-text-email-field fullwidth"/>
<!-- /wp:wpzoom-forms/text-email-field -->

<!-- wp:wpzoom-forms/radio-field {"id":"input_3cac9a4a","name":"Will you be attending?","options":["Yes","No"],"label":"Will you be attending?"} -->
<label for="input_3cac9a4a"><label for="input_3cac9a4a">Will you be attending?</label></label><ul class="wp-block-wpzoom-forms-radio-field"><li><label><input type="radio" name="input_3cac9a4a" id="input_3cac9a4a" value="Yes"/>Yes</label></li><li><label><input type="radio" name="input_3cac9a4a" id="input_3cac9a4a" value="No"/>No</label></li></ul>
<!-- /wp:wpzoom-forms/radio-field -->

<!-- wp:wpzoom-forms/select-field {"id":"input_15145568","name":"Your meal preference","options":["Omnivore","Vegetarian","Gluten Free","Kosher","Vegan","Halal"],"label":"Your meal preference"} -->
<label for="input_15145568"><label for="input_15145568">Your meal preference</label></label><select name="input_15145568" id="input_15145568" defaultvalue="Item #1" class="wp-block-wpzoom-forms-select-field"><option value="Omnivore">Omnivore</option><option value="Vegetarian">Vegetarian</option><option value="Gluten Free">Gluten Free</option><option value="Kosher">Kosher</option><option value="Vegan">Vegan</option><option value="Halal">Halal</option></select>
<!-- /wp:wpzoom-forms/select-field -->

<!-- wp:wpzoom-forms/radio-field {"id":"input_7a40e84d","name":"Are you bringing a +1?","options":["Yes","No"],"label":"Are you bringing a +1?"} -->
<label for="input_7a40e84d"><label for="input_7a40e84d">Are you bringing a +1?</label></label><ul class="wp-block-wpzoom-forms-radio-field"><li><label><input type="radio" name="input_7a40e84d" id="input_7a40e84d" value="Yes"/>Yes</label></li><li><label><input type="radio" name="input_7a40e84d" id="input_7a40e84d" value="No"/>No</label></li></ul>
<!-- /wp:wpzoom-forms/radio-field -->

<!-- wp:wpzoom-forms/text-plain-field {"id":"input_0bbcc55a","name":"Your guest\'s name","label":"Your guest\'s name"} -->
<label for="input_0bbcc55a"><label for="input_0bbcc55a">Your guest\'s name</label></label><input type="text" name="input_0bbcc55a" id="input_0bbcc55a" placeholder="" data-subject="false" class="wp-block-wpzoom-forms-text-plain-field"/>
<!-- /wp:wpzoom-forms/text-plain-field -->

<!-- wp:wpzoom-forms/select-field {"id":"input_15145568","name":"Your guest\'s meal preference","options":["Omnivore","Vegetarian","Gluten Free","Kosher","Vegan","Halal"],"label":"Your guest\'s meal preference"} -->
<label for="input_15145568"><label for="input_15145568">Your guest\'s meal preference</label></label><select name="input_15145568" id="input_15145568" defaultvalue="Item #1" class="wp-block-wpzoom-forms-select-field"><option value="Omnivore">Omnivore</option><option value="Vegetarian">Vegetarian</option><option value="Gluten Free">Gluten Free</option><option value="Kosher">Kosher</option><option value="Vegan">Vegan</option><option value="Halal">Halal</option></select>
<!-- /wp:wpzoom-forms/select-field -->

<!-- wp:wpzoom-forms/textarea-field {"id":"input_message","name":"Any comments or questions?","label":"Any comments or questions?","className":"fullwidth"} -->
<label for="input_message"><label for="input_message">Any comments or questions?</label></label><textarea name="input_message" id="input_message" cols="55" rows="10" placeholder="" class="wp-block-wpzoom-forms-textarea-field fullwidth"></textarea>
<!-- /wp:wpzoom-forms/textarea-field --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"30%"} -->
<div class="wp-block-column" style="flex-basis:30%"><!-- wp:wpzoom-forms/submit-field {"id":"input_submit"} -->
<input type="submit" id="input_submit" value="Submit" class="wp-block-wpzoom-forms-submit-field"/>
<!-- /wp:wpzoom-forms/submit-field --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"70%"} -->
<div class="wp-block-column" style="flex-basis:70%"><!-- wp:paragraph {"align":"right","style":{"typography":{"fontSize":16}}} -->
<p class="has-text-align-right" style="font-size:16px">Fields marked with <strong class="has-accent-color has-text-color">*</strong> are required.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group --></div>
<!-- /wp:wpzoom-forms/form -->'
	),
	array(
		'id'      => 'order-form',
		'name'    => 'Request a Quote',
		
		'icon'    => '<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 5H12V4C12 2.93913 11.5786 1.92172 10.8284 1.17157C10.0783 0.421427 9.06087 0 8 0C6.93913 0 5.92172 0.421427 5.17157 1.17157C4.42143 1.92172 4 2.93913 4 4V5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V6C16 5.73478 15.8946 5.48043 15.7071 5.29289C15.5196 5.10536 15.2652 5 15 5ZM6 4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2C8.53043 2 9.03914 2.21071 9.41421 2.58579C9.78929 2.96086 10 3.46957 10 4V5H6V4ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V7H4V8C4 8.26522 4.10536 8.51957 4.29289 8.70711C4.48043 8.89464 4.73478 9 5 9C5.26522 9 5.51957 8.89464 5.70711 8.70711C5.89464 8.51957 6 8.26522 6 8V7H10V8C10 8.26522 10.1054 8.51957 10.2929 8.70711C10.4804 8.89464 10.7348 9 11 9C11.2652 9 11.5196 8.89464 11.7071 8.70711C11.8946 8.51957 12 8.26522 12 8V7H14V17Z" />
		</svg>',

		'desc'    => 'A simple contact form with fields for name, email, subject, and message.',
		'content' => '<!-- wp:wpzoom-forms/form -->
<div class="wp-block-wpzoom-forms-form"><!-- wp:group -->
<div class="wp-block-group"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"100%"} -->
<div class="wp-block-column" style="flex-basis:100%"><!-- wp:wpzoom-forms/text-name-field {"id":"input_name","name":"Your Name","label":"Your Name","className":"fullwidth"} -->
<label for="input_name"><label for="input_name">Your Name</label><sup class="wp-block-wpzoom-forms-required">*</sup></label><input type="text" name="input_name" id="input_name" placeholder="" required class="wp-block-wpzoom-forms-text-name-field fullwidth"/>
<!-- /wp:wpzoom-forms/text-name-field -->

<!-- wp:wpzoom-forms/text-email-field {"id":"input_email","name":"Your Email","label":"Your Email","replyto":true,"className":"fullwidth"} -->
<label for="input_email"><label for="input_email">Your Email</label><sup class="wp-block-wpzoom-forms-required">*</sup></label><input type="email" name="input_email" id="input_email" placeholder="" required data-replyto="true" class="wp-block-wpzoom-forms-text-email-field fullwidth"/>
<!-- /wp:wpzoom-forms/text-email-field -->

<!-- wp:wpzoom-forms/text-phone-field {"id":"input_9ff254c3","name":"Phone Number","label":"Phone Number"} -->
<label for="input_9ff254c3"><label for="input_9ff254c3">Phone Number</label></label><input type="tel" name="input_9ff254c3" id="input_9ff254c3" placeholder="" class="wp-block-wpzoom-forms-text-phone-field"/>
<!-- /wp:wpzoom-forms/text-phone-field -->

<!-- wp:wpzoom-forms/text-plain-field {"id":"input_984c7374","name":"Your Address","label":"Your Address"} -->
<label for="input_984c7374"><label for="input_984c7374">Your Address</label></label><input type="text" name="input_984c7374" id="input_984c7374" placeholder="" data-subject="false" class="wp-block-wpzoom-forms-text-plain-field"/>
<!-- /wp:wpzoom-forms/text-plain-field -->

<!-- wp:wpzoom-forms/radio-field {"id":"input_4d1cff39","name":"Required service","options":["General maintenance","Repairs","House keeping","Landscape gardening","Other"],"label":"Required service"} -->
<label for="input_4d1cff39"><label for="input_4d1cff39">Required service</label></label><ul class="wp-block-wpzoom-forms-radio-field"><li><label><input type="radio" name="input_4d1cff39" id="input_4d1cff39" value="General maintenance"/>General maintenance</label></li><li><label><input type="radio" name="input_4d1cff39" id="input_4d1cff39" value="Repairs"/>Repairs</label></li><li><label><input type="radio" name="input_4d1cff39" id="input_4d1cff39" value="House keeping"/>House keeping</label></li><li><label><input type="radio" name="input_4d1cff39" id="input_4d1cff39" value="Landscape gardening"/>Landscape gardening</label></li><li><label><input type="radio" name="input_4d1cff39" id="input_4d1cff39" value="Other"/>Other</label></li></ul>
<!-- /wp:wpzoom-forms/radio-field -->

<!-- wp:wpzoom-forms/textarea-field {"id":"input_message","name":"How can we help you?","label":"How can we help you?","className":"fullwidth"} -->
<label for="input_message"><label for="input_message">How can we help you?</label><sup class="wp-block-wpzoom-forms-required">*</sup></label><textarea name="input_message" id="input_message" cols="55" rows="10" placeholder="" required class="wp-block-wpzoom-forms-textarea-field fullwidth"></textarea>
<!-- /wp:wpzoom-forms/textarea-field --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"30%"} -->
<div class="wp-block-column" style="flex-basis:30%"><!-- wp:wpzoom-forms/submit-field {"id":"input_submit"} -->
<input type="submit" id="input_submit" value="Submit" class="wp-block-wpzoom-forms-submit-field"/>
<!-- /wp:wpzoom-forms/submit-field --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"70%"} -->
<div class="wp-block-column" style="flex-basis:70%"><!-- wp:paragraph {"align":"right","style":{"typography":{"fontSize":16}}} -->
<p class="has-text-align-right" style="font-size:16px">Fields marked with <strong class="has-accent-color has-text-color">*</strong> are required.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group --></div>
<!-- /wp:wpzoom-forms/form -->'
	),
	array(
		'id'      => 'feedback-form',
		'name'    => 'Feedback Form',
		
		'icon'    => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.36 14.23C13.6915 14.769 12.8587 15.0629 12 15.0629C11.1413 15.0629 10.3085 14.769 9.64 14.23C9.43579 14.0603 9.17251 13.9786 8.90808 14.003C8.64365 14.0274 8.39974 14.1558 8.23 14.36C8.06027 14.5642 7.9786 14.8275 8.00298 15.0919C8.02736 15.3563 8.15579 15.6003 8.36 15.77C9.38134 16.6226 10.6696 17.0896 12 17.0896C13.3304 17.0896 14.6187 16.6226 15.64 15.77C15.8442 15.6003 15.9726 15.3563 15.997 15.0919C16.0214 14.8275 15.9397 14.5642 15.77 14.36C15.686 14.2589 15.5828 14.1753 15.4665 14.1141C15.3501 14.0528 15.2229 14.0151 15.0919 14.003C14.8275 13.9786 14.5642 14.0603 14.36 14.23ZM9 11C9.19779 11 9.39113 10.9414 9.55557 10.8315C9.72002 10.7216 9.8482 10.5654 9.92388 10.3827C9.99957 10.2 10.0194 9.99889 9.98079 9.80491C9.9422 9.61093 9.84696 9.43275 9.70711 9.29289C9.56726 9.15304 9.38908 9.0578 9.19509 9.01921C9.00111 8.98063 8.80005 9.00043 8.61732 9.07612C8.43459 9.15181 8.27842 9.27998 8.16853 9.44443C8.05865 9.60888 8 9.80222 8 10C8 10.2652 8.10536 10.5196 8.2929 10.7071C8.48043 10.8946 8.73479 11 9 11ZM15 9C14.8022 9 14.6089 9.05865 14.4444 9.16853C14.28 9.27841 14.1518 9.43459 14.0761 9.61732C14.0004 9.80004 13.9806 10.0011 14.0192 10.1951C14.0578 10.3891 14.153 10.5673 14.2929 10.7071C14.4328 10.847 14.6109 10.9422 14.8049 10.9808C14.9989 11.0194 15.2 10.9996 15.3827 10.9239C15.5654 10.8482 15.7216 10.72 15.8315 10.5556C15.9414 10.3911 16 10.1978 16 10C16 9.73478 15.8946 9.48043 15.7071 9.29289C15.5196 9.10536 15.2652 9 15 9ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" />
		</svg>',

		'desc'    => 'A simple contact form with fields for name, email, subject, and message.',
		'content' => '<!-- wp:wpzoom-forms/form -->
<div class="wp-block-wpzoom-forms-form"><!-- wp:group -->
<div class="wp-block-group"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"100%"} -->
<div class="wp-block-column" style="flex-basis:100%"><!-- wp:wpzoom-forms/text-name-field {"id":"input_name","name":"Name","label":"Name","className":"fullwidth"} -->
<label for="input_name"><label for="input_name">Name</label><sup class="wp-block-wpzoom-forms-required">*</sup></label><input type="text" name="input_name" id="input_name" placeholder="" required class="wp-block-wpzoom-forms-text-name-field fullwidth"/>
<!-- /wp:wpzoom-forms/text-name-field -->

<!-- wp:wpzoom-forms/text-email-field {"id":"input_email","name":"Email","label":"Email","replyto":true,"className":"fullwidth"} -->
<label for="input_email"><label for="input_email">Email</label><sup class="wp-block-wpzoom-forms-required">*</sup></label><input type="email" name="input_email" id="input_email" placeholder="" required data-replyto="true" class="wp-block-wpzoom-forms-text-email-field fullwidth"/>
<!-- /wp:wpzoom-forms/text-email-field -->

<!-- wp:wpzoom-forms/select-field {"id":"input_8e4aa5c6","name":"Department","options":["Sales","Customer Support","Marketing","Development","Other"],"label":"Which department do you have a suggestion for?"} -->
<label for="input_8e4aa5c6"><label for="input_8e4aa5c6">Which department do you have a suggestion for?</label></label><select name="input_8e4aa5c6" id="input_8e4aa5c6" defaultvalue="Item #1" class="wp-block-wpzoom-forms-select-field"><option value="Sales">Sales</option><option value="Customer Support">Customer Support</option><option value="Marketing">Marketing</option><option value="Development">Development</option><option value="Other">Other</option></select>
<!-- /wp:wpzoom-forms/select-field -->

<!-- wp:wpzoom-forms/text-plain-field {"id":"input_subject","name":"Subject","label":"Subject","subject":true,"className":"fullwidth"} -->
<label for="input_subject"><label for="input_subject">Subject</label><sup class="wp-block-wpzoom-forms-required">*</sup></label><input type="text" name="input_subject" id="input_subject" placeholder="" required data-subject="true" class="wp-block-wpzoom-forms-text-plain-field fullwidth"/>
<!-- /wp:wpzoom-forms/text-plain-field -->

<!-- wp:wpzoom-forms/textarea-field {"id":"input_message","name":"Message","label":"Message","className":"fullwidth"} -->
<label for="input_message"><label for="input_message">Message</label><sup class="wp-block-wpzoom-forms-required">*</sup></label><textarea name="input_message" id="input_message" cols="55" rows="10" placeholder="" required class="wp-block-wpzoom-forms-textarea-field fullwidth"></textarea>
<!-- /wp:wpzoom-forms/textarea-field --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"30%"} -->
<div class="wp-block-column" style="flex-basis:30%"><!-- wp:wpzoom-forms/submit-field {"id":"input_submit"} -->
<input type="submit" id="input_submit" value="Submit" class="wp-block-wpzoom-forms-submit-field"/>
<!-- /wp:wpzoom-forms/submit-field --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"70%"} -->
<div class="wp-block-column" style="flex-basis:70%"><!-- wp:paragraph {"align":"right","style":{"typography":{"fontSize":16}}} -->
<p class="has-text-align-right" style="font-size:16px">Fields marked with <strong class="has-accent-color has-text-color">*</strong> are required.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group --></div>
<!-- /wp:wpzoom-forms/form -->'
	),
	array(
		'id'      => 'appointment-form',
		'name'    => 'Appointment Form',
		
		'icon'    =>  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 14C12.1978 14 12.3911 13.9414 12.5556 13.8315C12.72 13.7216 12.8482 13.5654 12.9239 13.3827C12.9996 13.2 13.0194 12.9989 12.9808 12.8049C12.9422 12.6109 12.847 12.4327 12.7071 12.2929C12.5673 12.153 12.3891 12.0578 12.1951 12.0192C12.0011 11.9806 11.8 12.0004 11.6173 12.0761C11.4346 12.1518 11.2784 12.28 11.1685 12.4444C11.0586 12.6089 11 12.8022 11 13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8946 11.7348 14 12 14ZM17 14C17.1978 14 17.3911 13.9414 17.5556 13.8315C17.72 13.7216 17.8482 13.5654 17.9239 13.3827C17.9996 13.2 18.0194 12.9989 17.9808 12.8049C17.9422 12.6109 17.847 12.4327 17.7071 12.2929C17.5673 12.153 17.3891 12.0578 17.1951 12.0192C17.0011 11.9806 16.8 12.0004 16.6173 12.0761C16.4346 12.1518 16.2784 12.28 16.1685 12.4444C16.0586 12.6089 16 12.8022 16 13C16 13.2652 16.1054 13.5196 16.2929 13.7071C16.4804 13.8946 16.7348 14 17 14ZM12 18C12.1978 18 12.3911 17.9414 12.5556 17.8315C12.72 17.7216 12.8482 17.5654 12.9239 17.3827C12.9996 17.2 13.0194 16.9989 12.9808 16.8049C12.9422 16.6109 12.847 16.4327 12.7071 16.2929C12.5673 16.153 12.3891 16.0578 12.1951 16.0192C12.0011 15.9806 11.8 16.0004 11.6173 16.0761C11.4346 16.1518 11.2784 16.28 11.1685 16.4444C11.0586 16.6089 11 16.8022 11 17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18ZM17 18C17.1978 18 17.3911 17.9414 17.5556 17.8315C17.72 17.7216 17.8482 17.5654 17.9239 17.3827C17.9996 17.2 18.0194 16.9989 17.9808 16.8049C17.9422 16.6109 17.847 16.4327 17.7071 16.2929C17.5673 16.153 17.3891 16.0578 17.1951 16.0192C17.0011 15.9806 16.8 16.0004 16.6173 16.0761C16.4346 16.1518 16.2784 16.28 16.1685 16.4444C16.0586 16.6089 16 16.8022 16 17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18ZM7 14C7.19778 14 7.39112 13.9414 7.55557 13.8315C7.72002 13.7216 7.84819 13.5654 7.92388 13.3827C7.99957 13.2 8.01937 12.9989 7.98079 12.8049C7.9422 12.6109 7.84696 12.4327 7.70711 12.2929C7.56725 12.153 7.38907 12.0578 7.19509 12.0192C7.00111 11.9806 6.80004 12.0004 6.61732 12.0761C6.43459 12.1518 6.27841 12.28 6.16853 12.4444C6.05865 12.6089 6 12.8022 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14ZM19 4H18V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2C16.7348 2 16.4804 2.10536 16.2929 2.29289C16.1054 2.48043 16 2.73478 16 3V4H8V3C8 2.73478 7.89464 2.48043 7.70711 2.29289C7.51957 2.10536 7.26522 2 7 2C6.73478 2 6.48043 2.10536 6.29289 2.29289C6.10536 2.48043 6 2.73478 6 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V10H20V19ZM20 8H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V8ZM7 18C7.19778 18 7.39112 17.9414 7.55557 17.8315C7.72002 17.7216 7.84819 17.5654 7.92388 17.3827C7.99957 17.2 8.01937 16.9989 7.98079 16.8049C7.9422 16.6109 7.84696 16.4327 7.70711 16.2929C7.56725 16.153 7.38907 16.0578 7.19509 16.0192C7.00111 15.9806 6.80004 16.0004 6.61732 16.0761C6.43459 16.1518 6.27841 16.28 6.16853 16.4444C6.05865 16.6089 6 16.8022 6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18Z" />
</svg>',

		'desc'    => 'A simple contact form with fields for name, email, subject, and message.',
		'content' => 'Appointment Form'
	)
);

return $templates;


