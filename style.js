const button = document.getElementById("clickbutton");
const inputs = document.querySelectorAll(".style8");

let nameInput = document.getElementById("nameInput");
let userNameInput = document.getElementById("userNameInput");
let emailInput = document.getElementById("emailInput");
let numberInput = document.getElementById("numberInput");

const nameField = document.querySelector(".nameField");
const userNameField = document.querySelector(".userNameField");
const emailField = document.querySelector(".emailField");
const numberField = document.querySelector(".numberField");

button.addEventListener("click", () => {
  let values = [];
  let isFormInvalid = true;

  if (nameField.value.trim().length < 5) {
    nameInput.innerText = "Name must be at least 5 characters long.";
    isFormInvalid = false;
  } else {
    nameInput.innerText = "";
  }

  if (userNameField.value.trim().length < 5) {
    userNameInput.innerText = "UserName must be at least 5 characters long.";
    isFormInvalid = false;
  } else {
    userNameInput.innerText = "";
  }

  if (!emailField.value.trim().endsWith("@gmail.com")) {
    emailInput.innerText = "Email must end with @gmail.com";
    isFormInvalid = false;
  } else {
    emailInput.innerText = "";
  }

  if (numberField.value.trim().length !== 10 || isNaN(numberField.value.trim())) {
    numberInput.innerText = "Phone number must be 10 digits long";
    isFormInvalid = false;
  } else {
    numberInput.innerText = "";
  }

  if (!isFormInvalid) return;


  inputs.forEach((inputValue) => {
    values.push(inputValue.value)
    inputValue.value = "";
  });

  localStorage.setItem("formData", JSON.stringify(values));
  console.log(values);

  window.location.href =
    "http://127.0.0.1:5502/superApp/moveCategory/index.html";
});

nameField.addEventListener("input", (e) => {
  if (e.target.value.trim().length >= 5) {
    nameInput.innerText = "";
  }
});

userNameField.addEventListener("input", (e) => {
  if (e.target.value.trim().length >= 5) {
    userNameInput.innerText = "";
  }
});
emailField.addEventListener("input", (e) => {
  if (e.target.value.trim().endsWith("@gmail.com")) {
    emailInput.innerText = "";
  }
});
numberField.addEventListener("input",() => {
  if (numberField.value.trim().length === 10 && !isNaN(numberField.value.trim())) {
    numberInput.innerText = "";
  }
});