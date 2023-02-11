function validateEmail(emailAddress) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailAddress);
}
function validate() {
    var emailValue = $('#entry.1917220112').val();
    if (validateEmail(emailValue)) {
        document.getElementById("entry.1917220112").className += "red-border formInvalid";
        alert("Please provide a valid email address.");
        document.getElementById("entry.1917220112").removeAttribute("formInvalid");
        return false;
    }
    else {
        return true;
    }
}
$('#validate').on('click', validate);
if (validate()) {
    $('#gform').on('submit', function () {
        $('#gform *').fadeOut(0);
        $('#gform').prepend('Thank you! We will notify you with product updates!');
    });
}
