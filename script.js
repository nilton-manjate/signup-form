"use strict"

// Declaring the variables
const send = document.getElementById("send");
const input = document.getElementsByTagName("input");
const msg = document.getElementsByTagName("span");
const img = document.getElementsByTagName("img");

// Function to be executed when the user submits the form
send.addEventListener("submit", function(event) {
  //If the user try to submit an empty field
  event.preventDefault();
  if (input[0].value === "") {
    msg[0].innerHTML = "First Name cannot be empty";
    img[0].style.display = "block";
    input[0].placeholder = "";
    input[0].style.borderColor = "var(--red)";
  }

  if (input[1].value === "") {
    msg[1].innerHTML = "Last Name cannot be empty";
    img[1].style.display = "block";
    input[1].placeholder = "";
    input[1].style.borderColor = "var(--red)";
  }

  if (input[2].value === "") {
    msg[2].innerHTML = "Looks like this is not an email";
    img[2].style.display = "block";
    input[2].value = "example@mail.com";
    input[2].style.color = "var(--red)";
    input[2].style.borderColor = "var(--red)";
  }

  if (input[3].value === "") {
    msg[3].innerHTML = "Password cannot be empty";
    img[3].style.display = "block";
    input[3].placeholder = "";
    input[3].style.borderColor = "var(--red)";
  }

  // If the user submit the form filled
  if (input[0].value != "" && input[1] != "" && input[2].value != "" && input[3] != "") {
     alert("Sucess");
     msg[0].innerHTML = "";
     msg[1].innerHTML = "";
     msg[2].innerHTML = "";
     msg[3].innerHTML = "";
     img[0].style.display = "none";
     img[1].style.display = "none";
     img[2].style.display = "none";
     img[3].style.display = "none";
     input[0].placeholder = "First Name";
     input[1].placeholder = "Last Name";
     input[2].placeholder = "Email Adress";
     input[3].placeholder = "Password";
     input[0].style.borderColor = "lightgrey";
     input[1].style.borderColor = "lightgrey";
     input[2].style.borderColor = "lightgrey";
     input[3].style.borderColor = "lightgrey";
     input[0].value = "";
     input[1].value = "";
     input[2].value = "";
     input[3].value = "";
   }
});