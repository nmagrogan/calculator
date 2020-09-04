function add (num1, num2) {
	return num1+num2;
}

function subtract (num1,num2) {
	return num1-num2;
}

function sum (nums) {
	let sum = 0;
	for(i=0;i < nums.length; i++){
		sum += nums[i];
	}
	return sum;
}

function multiply (nums) {
	let multiple = 1;
	for(i=0; i<nums.length;i++){
		multiple *= nums[i];
	}
	return multiple
}

function power(num1, num2) {
	return num1**num2;
}

function factorial(num) {
	fact = 1;
	for(i = num; i >0; i--){
		fact *= i;
	}
	return fact
}
