var form_validation = {

    required : function (element) {
        if ('' == $(element).val()) {
            var error_message = 'This field is required field';
            this.add_error(element, error_message);
            return false;
        }
        return true;
    },

    checkbox_required: function (element) {
        if (! $('[name="' + element.name + '"]').is(':checked')) {
            var error_message = 'Select atleast one';
            this.add_error(element, error_message);
            return false;
        }
        return true;
    },

    email : function (element) {
        if (! /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test($(element).val())) {
            var error_message = 'Enter a valid email address';
            this.add_error(element, error_message);
            return false;
        }
        return true;
    },

    number: function (element, number) {
        var regex =  new RegExp('^[0-9]{' + number + '}$');
        if ( '' != $(element).val() && ! regex.test($(element).val())) {
            var error_message = 'This field should have 2 digits!';
            this.add_error(element, error_message);
            return false;
        }
        return true;
    },

    add_error: function (element, error_message) {
        $(element).closest('.form-group').find('span.message').text(error_message);
        $(element).addClass('has-error');
    }
};

$(function () {
    var valid_data = true;
    $('form').on('submit', function (e) {
        e.preventDefault();

        $('span.message').text('');

        $.each($('input'), function (index, element) {

            $(element).removeClass('has-error');

            switch ($(element).attr('name')) {
                case 'name' :
                    valid_data = form_validation.required(element);
                    break;
                case 'number' :
                    valid_data = form_validation.number(element, 2);
                    break;
                case 'email' :
                    valid_data = form_validation.email(element);
                    break;
                case 'language[]' :
                    valid_data = form_validation.checkbox_required(element);
                    break;
            }

            if(! valid_data) {
                return false;
            }
        });

        if(valid_data) {
            $('form')[0].submit();
        }
    });
});