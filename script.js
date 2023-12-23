"use strict"

const send = document.getElementById("send");
const input = document.getElementsByTagName("input");
const msg = document.getElementsByTagName("span");
const img = document.getElementsByTagName("img");

send.addEventListener("submit", function(event) {
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
    input[2].placeholder = "";
    input[2].style.borderColor = "var(--red)";
  }

  if (input[3].value === "") {
    msg[3].innerHTML = "Password cannot be empty";
    img[3].style.display = "block";
    input[3].placeholder = "";
    input[3].style.borderColor = "var(--red)";
  }
});

/*
input[0].addEventListener("click", function(){
  msg[0].innerHTML = "";
  img[0].style.display = "none";
});

input[1].addEventListener("click", function(){
  msg[1].innerHTML = "";
  img[1].style.display = "none";
});

input[2].addEventListener("click", function(){
  msg[2].innerHTML = "";
  img[2].style.display = "none";
});

input[3].addEventListener("click", function(){
  msg[3].innerHTML = "";
  img[3].style.display = "none";
});
*/