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
	if(!firstNum){
		firstNum = parseInt(display.textContent);
		fxn = "-";
		clearDisplay();
	}else if (firstNum && secondNum && fxn =="-") {
		display.textContent = num1-num2;
		clearCalc();
	}
}


function multiply (num1, num2) {
	if(!firstNum){
		firstNum = parseInt(display.textContent);
		fxn = "x";
		clearDisplay();
	}else if (firstNum && secondNum && fxn =="x") {
		display.textContent = num1*num2;
		clearCalc();
	}
}

function divide(num1,num2){
	if(!firstNum){
		firstNum = parseInt(display.textContent);
		fxn = "/";
		clearDisplay();
	}else if (secondNum =="0") {
		display.textContent = "no";
		clearCalc();
	}
	else if (firstNum && secondNum && fxn =="/") {
		display.textContent = num1/num2;
		clearCalc();
	}
}

function operator(){
	//will only do something if there is a first number
  if(firstNum && display.textContent){
		secondNum = parseInt(display.textContent);
		callFunction(fxn);
	}
}

function setDisplay(displayVal){
	if(display.textContent =="no"){
		clearDisplay();
	}
  display.textContent += displayVal;
}

function callFunction(fxn){
	if(fxn == "clear"){
		clearCalc();
		clearDisplay();
	}else if(fxn == "x"){
		multiply(firstNum,secondNum);
	}else if(fxn == "+"){
		add(firstNum,secondNum);
	}else if(fxn == "-"){
		subtract(firstNum,secondNum);
	}else if(fxn =="/"){
		divide(firstNum,secondNum);
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
