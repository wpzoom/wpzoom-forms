function wpzf_submit(token) {
	// Check if required inputs are filled
	var allInputsFilled = true;
  
	jQuery('form.wpzoom-forms_form [required]').each(function() {
	  if (!jQuery(this).val()) {
		allInputsFilled = false;
  
		// Focus on the first empty required input
		jQuery(this).focus();
  
		return false; // exit the loop if any required input is not filled
	  }
	});
  
	if (allInputsFilled) {
	  // All required inputs are filled, trigger form submission
	  jQuery('form.wpzoom-forms_form').trigger('submit');
	}
  }