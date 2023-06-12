var emailForm = document.getElementById("emailForm");
emailForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var errorText = document.getElementById("errorText");

  
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    
    errorText.innerHTML = 'Din mail er nu blevet afsendt';
    }
   else {
    
    errorText.innerHTML = 'Ugyldig e-mailadresse.';
  }
});

/*
var emailForm = document.getElementById("emailForm");
emailForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var errorText = document.getElementById("errorText");

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    
    errorText.innerHTML = '';

    for (var i = 0; i < 3; i++) {
      sendEmail(email, i);
    }
  } else {
    // E-mail er ugyldig
    errorText.innerHTML = 'Ugyldig e-mailadresse.';
  }
});

function sendEmail(email, index) {

  console.log('E-mail ' + (index + 1) + ' sendt til: ' + email);

  var messageContainer = document.createElement("p");
  messageContainer.innerHTML = 'E-mail ' + (index + 1) + ' er blevet sendt til: ' + email;

  var box1 = document.querySelector(".box1");
  box1.appendChild(messageContainer);
}
*/