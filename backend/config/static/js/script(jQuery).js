$('.navbar a').hover(
    function() {
        $('.navbar a').not(this).addClass('dim');
    }, function() {
        $('.navbar a').removeClass('dim');
    }
);



// jQuery ready function to ensure DOM is fully loaded
$(document).ready(function() {
    // Click event handler for button
    $('#st-btn').click(function() {
        $(this).addClass('active');
        $('#dict-btn').removeClass('active');
    });

    $('#dict-btn').click(function() {
        $(this).addClass('active');
        $('#st-btn').removeClass('active');
    });

    $('#in-text-btn').click(function() {
        // Adds 'active' class to text-btn and removes it from speech-btn
        $(this).addClass('active');
        $('#in-speech-btn').removeClass('active');
    });

    $('#in-speech-btn').click(function () {
        $(this).addClass('active');
        $('#in-text-btn').removeClass('active');
    });

    $('#out-text-btn').click(function() {
        // Adds 'active' class to text-btn and removes it from speech-btn
        $(this).addClass('active');
        $('#out-speech-btn').removeClass('active');
    });

    $('#out-speech-btn').click(function () {
        $(this).addClass('active');
        $('#out-text-btn').removeClass('active');
    });

});
    