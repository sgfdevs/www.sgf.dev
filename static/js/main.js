$(function() {
    $('.something').on('click', function () {
        console.log("Horsin' Around");
    });

    $('form').on('submit', function (e) {
        var emailAddress = $('#email').val();

        if(validateEmail(emailAddress))
        {
            $.post($(this).attr('action'), $(this).serialize()).done(function( data ) {
                $('#email').val('');
                swal('You Are Awesome', "Thanks for signing up for updates. You'll be hearing from us soon!️", 'success');
            });
        } else {
            swal('Whoops', 'Something went wrong... Please double check that your email address is valid. And if so, yell at us on the Twitter and tell us our stuff is broken.', 'error');
        }

        e.preventDefault();
    });

    $('#email').on('keyup', function () {
        var value = $(this).val();
        if(validateEmail(value)) {
            $('form button').removeAttr('disabled');
        } else {
            $('form button').attr('disabled', 'disabled');
        }
    });

    function validateEmail(email)
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});