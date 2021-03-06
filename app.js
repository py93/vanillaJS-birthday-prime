const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const divShow = document.querySelector("#div-Show");

btnTranslate.addEventListener("click", clickEventHandler)

let outputMessage = "";
let number = "";
function clickEventHandler(){
    let inputText = txtInput.value;
    if(validateDate(inputText)===true)
  {
    checkPrimeNumber(number);
  }
   
  divShow.innerText = outputMessage;
  
};

function validateDate(userDOB)
{
  if( validateDateFormat(userDOB) && validateDateRange(userDOB))
  {
    return true;
  }
  else
  {
    return false;
  }
}

function validateDateFormat(userDOB)
{
  const userDD = userDOB.substring(0,2);
  const userMM = userDOB.substring(3,5);
  number = parseInt((userDD + userMM));
  
  if (isNaN(userDD) || isNaN(userMM) || isNaN(number))
  {
      outputMessage = "Please enter a valid date";
    return false;
  }
  return true;
}

function validateDateRange(userDOB)
{
  const userDD = parseInt(userDOB.substring(0,2));
  const userMM = parseInt(userDOB.substring(3,5));

  if((userDD>31) || (userMM>12))
  {
    outputMessage = "Date is not a valid birthdate";
    return false;
  }
  else if((userMM===2) && (userDD>29)){
    outputMessage = "Date is not a valid birthdate";
    return false;
  }
  else if((userMM===4 || userMM===6 || userMM===9 || userMM===11) && (userDD>30))
  {
    outputMessage = "Date is not a valid birthdate";
    return false;
  }
  return true;
}

function checkPrimeNumber(number)
{
  if (number < 4) {
    return true;
  } else if (number > 3) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        outputMessage = "\nYour DOB is NOT a PRIME NUMBER!!";
        return false;
    }
    }
  }
  outputMessage = "\nYour DOB is a PRIME NUMBER!! Share this on your social media! " 
  return true;
}

