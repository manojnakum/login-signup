$(document).ready(function() {
    $(document).on('click', '#register', function() {
    	$('.form-block').hide();
    	$('.link-block .register-link').hide();
    	$('.link-block .reset-link').hide();
    	$('.link-block .login-link').show();
    	$('.link-block .login-link span').html('I already have an account.');
    	$('.register-form').fadeIn();
    });
    $(document).on('click', '#login', function() {
    	$('.form-block').hide();
    	$('.link-block .register-link').show();
    	$('.link-block .reset-link').show();
    	$('.link-block .login-link').hide();
    	$('.login-form').fadeIn();
    });
    $(document).on('click', '#reset-password', function() {
    	$('.form-block').hide();
    	$('.link-block .register-link').hide();
    	$('.link-block .reset-link').hide();
    	$('.link-block .login-link').show();
    	$('.link-block .login-link span').html('I know my password.');
    	$('.reset-form').fadeIn();
    });
})