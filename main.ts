// function validateEmail(emailAddress: string) {
//     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(emailAddress);
// }

// function validate() {
//     var emailValue: string = (<HTMLInputElement>document.getElementById("entry.1917220112")).value;
//     if (validateEmail(emailValue)) {
//         document.getElementById("entry.1917220112")!.className += "red-border formInvalid";
//         alert("Please provide a valid email address.");
//         document.getElementById("entry.1917220112")!.removeAttribute("formInvalid")
//         return false;
//         }
// }
  
// $("#validate").on('click', validate);

const validateEmail = (email: any) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
const validate = () => {
const $result = $('#result');
const email = $('#entry.1917220112').val();
$result.text('');

if (validateEmail(email)) {
    $result.text(email + ' is valid :)');
    $result.css('color', 'green');
} else {
    $result.text(email + ' is not valid :(');
    $result.css('color', 'red');
}
return false;
}
  
$('#validate').on('click', validate);

$('#gform').on('submit', function (e) {
    $('#gform *').fadeOut(0);
    $('#gform').prepend('Thank you! We will notify you with product updates!');
}); 