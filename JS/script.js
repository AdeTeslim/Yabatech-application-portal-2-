const loginBox = document.querySelector(".login")
const dashboardBox = document.querySelector(".dashboard")
const bd4Box = document.querySelector(".bd4")
const clickBox = document.querySelector(".login")
const click1Box = document.querySelector(".bd4")
const errorEl = document.querySelector(".errorel")
const loginBtn = document.querySelector('.login-btn')

loginBtn.disabled = true

function showLogin() {
    loginBox.style.display = "block"
    dashboardBox.style.display = "none"
    bd4Box.style.display = "none"
}
function showPost() {
    loginBox.style.display = "none"
    bd4Box.style.display = "block"
    dashboardBox.style.display = "none"
}
function showClick() {
    loginBox.style.display = "block"
    dashboardBox.style.display = "none"
    bd4Box.style.display = "none"
}
function showClick1() {
    loginBox.style.display = "none"
    bd4Box.style.display = "block"
    dashboardBox.style.display = "none"
}
function showIcon() {
    loginBox.style.display = "none"
    bd4Box.style.display = "none"
    dashboardBox.style.display = "block"
}


function validateField() {
    var inputValue = validate.value;
    var numberPattern = /^[0-9]/;
    var alphabetPattern = /^[a-zA-Z]/;
    // console.log(inputValue);

    // Check alphabets
    // var pattern = inputValue.match(/[a-zA-Z]/g);
    // var pattern = /^\d{4}\d{8}[a-z]{2}$/i
    var pattern = /\d\d\d\d\d\d\d\d\d\d\d\d[a-z][a-z]/i;

    // Check length
    if (inputValue.length > 14) {
      // alert("Field length should not exceed 14 characters.");
      errorEl.innerText = "Field length should not exceed 14 characters."
      return false;
    }

    // Check if length equals empty
    if (inputValue.length <= 0) {
      // alert("Field length should not exceed 14 characters.");
      errorEl.innerText = " "
      return false;
    }

    // check if first input is number
    if (inputValue.length > 0 & inputValue.length <= 12) {
      if (numberPattern.test(inputValue)){
        console.log("Its number");
        errorEl.innerText = " "
        return true;
      }else{
        console.log("Not number");
        errorEl.innerText = "Kindly Input Number digits."
        return false;
      }
    }
    if (inputValue.length > 12 & inputValue.length <= 14) {
      if (alphabetPattern.test(inputValue)){
        console.log("Its Alphabet");
        errorEl.innerText = " "
        return true;
      }else{
        console.log("Not Alphabet");
        errorEl.innerText = "Kindly Input Last 2 alphabets."
        return false;
      }
    }
    // if (pattern.test(inputValue)) {
    //   console.log("Input matches")
    //   errorEl.innerText = ''
    //   loginBtn.disabled = false
    // } else {
    //   errorEl.innerText = "*Input must contain 12 numbers with 2 alphabets at the end"
    //   console.log("Input doesn't match")
    //   loginBtn.disabled = true

    // }
    return true;
  }
  
var validate = document.getElementById('validate');

validate.addEventListener('input', function(event) {
  // Delay the execution to allow the value to update
  setTimeout(function() {
    validateField();
  }, 0);
})

loginBtn.addEventListener('click', function () {
  validateField()
})