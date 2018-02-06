$(function () {
	$('form').validate({
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		debug: true,

		rules: {
			name: {
				required: true,
				regex: /^[A-Za-z]+\s[A-Za-z]+$/
			},
			number: {
				digits: true,
			},
			email: {
				email : true
			},
			'language[]':{
				required : true
			}
		},
		errorPlacement: function(error, element) {
			if ('language[]' == element.attr('name'))
				error.appendTo($('.error-container'))
			else
				error.insertAfter(element);
		},
		messages: {
			name : 'Please mention your name!'
		},
		invalidHandler: function(event, validator) {

			var errors = validator.numberOfInvalids();
			if (errors) {
				alert('dead');
			} else {
				alert('good');
			}
		},
		submitHandler: function(form, e) {
			e.preventDefault();
			alert('form submitted')
		}
	});
});