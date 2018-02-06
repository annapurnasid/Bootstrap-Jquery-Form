$(function () {
    $('form').validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,

        rules: {
            name: {
                required: true,
                'two-words': true
            },
            email: {
                email: true
            },
            'language[]': "required"

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
        },
    });

    $.validator.addMethod('two-words', function (value) {
        return /^[A-Za-z]+\s[A-Za-z]+$/.test(value);
    }, 'Field must have atleast 2 words');

});