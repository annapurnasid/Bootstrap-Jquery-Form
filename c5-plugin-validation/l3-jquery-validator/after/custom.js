$(function () {
    $('form').validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,

        rules: {
            name: 'required',
            email: {
                email: true
            },
            'language[]': 'required'

        },
        messages: {
            name : 'Please mention your name!',
            email : {
                required: 'We want your email',
                email: 'Invalid email'
            }
        },
        errorPlacement: function (error, element) {
            if ('language[]' == element.attr('name')) {
                error.appendTo('.error-container');
            } else {
                error.insertAfter(element);
            }
        },
        invalidHandler: function (event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                alert('Not accepted');
            }
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            alert('Congratulations')
        }
    });
});