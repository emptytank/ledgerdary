$('#gform').on('submit', function (e) {
    $('#gform *').fadeOut(0);
    $('#gform').prepend('Thank you! We will notify you with product updates!');
});
