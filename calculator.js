let firstNum;
let secondNum;
let fxn;

const display = document.querySelector(".display");

function add (num1, num2) {
	if(!firstNum){
		firstNum = parseInt(display.textContent);
		fxn = "+";
		clearDisplay();
	}else if (firstNum && secondNum && fxn == "+") {
		display.textContent = num1+num2;
		clearCalc();
	}

}

function subtract (num1,num2) {
	return num1-num2;
}


function multiply (num1, num2) {
	return num1*num2;
}

function divide(num1,num2){
  return num1/num2;
}

function operator(){
	//will only do something if there is a first number
  if(firstNum && display.textContent){
		secondNum = parseInt(display.textContent);
		callFunction(fxn);
	}
}

function setDisplay(displayVal){
  display.textContent += displayVal;
}

function callFunction(fxn){
	if(fxn == "clear"){
		clearCalc();
		clearDisplay();
	}else if(fxn == "x"){
		console.log(fxn);
	}else if(fxn == "+"){
		add(firstNum,secondNum);
	}else if(fxn == "-"){
		console.log(fxn);
	}else if(fxn =="/"){
		console.log(fxn);
	}else if(fxn =="="){
		operator();
	}

}

//only clears the display
function clearDisplay(){
  display.textContent = undefined;
}

//clears the info stored for the calc(firstNum,secondNum, and fxn)
function clearCalc(){
  firstNum = undefined;
  secondNum= undefined;
  fxn= undefined;
}

function updateDisplay(e){
  //if button is a digit, then update display with a number
  if(/[0-9]/.test(e.target.textContent)){
    setDisplay(e.target.textContent);
    //else call function for the button
  }else{
    callFunction(e.target.textContent);
  }

}

function inatalizeButtons(){
  let buttons = document.querySelector(".keyboard");

  for(i=1; i< buttons.childNodes.length;i +=2){
    buttons.childNodes[i].addEventListener("click", updateDisplay);
  }

}

inatalizeButtons();
