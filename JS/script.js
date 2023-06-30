const loginBox = document.querySelector(".login")
const dashboardBox = document.querySelector(".dashboard")
const bd4Box = document.querySelector(".bd4")
const clickBox = document.querySelector(".login")
const click1Box = document.querySelector(".bd4")
// const errorEl = document.querySelectorAll(".errorel")
const loginBtn = document.querySelectorAll('.login-btn')

loginBtn.forEach(btn => {
  btn.disabled = true
})



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


function validateField(event) {
    console.log(event.target)
    var inputValue = event.target.value;
    var numberPattern = /^[0-9]+$/;
    var alphabetPattern = /^[a-zA-Z]/;
    const errorEl = event.target.parentElement.querySelector(".errorel");
    const loginBtn = event.target.parentElement.querySelector(".login-btn");
    loginBtn.disabled = true;
    // console.log(inputValue);

    // Check alphabets
    // var pattern = inputValue.match(/[a-zA-Z]/g);
    // var pattern = /^\d{4}\d{8}[a-z]{2}$/i
    // var pattern = /\d\d\d\d\d\d\d\d\d\d\d\d[a-z][a-z]/i;

    // Check length
    if (inputValue.length > 14) {
      // alert("Field length should not exceed 14 characters.");
      errorEl.innerText = "Field length should not exceed 14 characters."
      // errorEl.forEach(err => {
      //   err.innerText = "Field length should not exceed 14 characters."
      // })
      loginBtn.disabled = true
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
      }
      else{
        console.log("Not number");
        errorEl.innerText = "Kindly Input Number digits."
        return false;
      }
    }
    if (inputValue.length > 12 & inputValue.length <= 14) {
      if (/^[0-9]{12}[a-zA-Z]{1,2}$/i.test(inputValue)) {
        if (inputValue.length === 14) {
          loginBtn.disabled = false
        }
        console.log("Its Alphabet");
        console.log(errorEl)
        errorEl.innerText = " "
        return true;
      }
      else{
        console.log("Not Alphabet");
        errorEl.innerText = "Kindly Input Last 2 alphabets."
        loginBtn.disabled = true
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
  
var validate = document.querySelectorAll('.validate');

validate.forEach(val => {
  val.addEventListener('input', function(event) {
    // Delay the execution to allow the value to update
    setTimeout(function() {
      validateField(event);
    }, 0);
  })
})

loginBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    validateField()
  })
})