function validateEmail(emailAddress) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailAddress);
}
function validate() {
    var emailValue = document.getElementById("entry.1917220112").value;
    if (emailValue == null) {
        alert('Please provide a valid email address.');
        return false;
    }
    else {
        if (validateEmail(emailValue)) {
            return true;
        }
        else {
            return false;
        }
    }
}
$('#validate').on('click', validate);
$('#gform').on('submit', function (e) {
    $('#gform *').fadeOut(0);
    $('#gform').prepend('Thank you! We will notify you with product updates!');
});
