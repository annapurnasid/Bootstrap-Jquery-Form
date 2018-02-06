$(function () {
    $('form').validator({
        custom : {
            'max-age' : function (element) {
                var matchValue = element.data('max-age');
                if (element.val() > matchValue) {
                    return 'Max age should be at max ' + matchValue
                }
            }
        }
    }).on('submit', function (e) {
        if(e.isDefaultPrevented()) {
            alert('Not Accepted');
        } else{
            alert('Congratulations!')
        }
    });
});
