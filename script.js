// take the operator from the user through prompt box. 
const operator = prompt("Enter operator to perform the calculation (either +,-,*or/):");

// accept the number from the user through prompt box
const number1 = parseFloat(prompt("Enter the first number: "));
const number2 = parseFloat(prompt("Enter the second number: "));

var result;

if(operator =='+') {
    result = number1+number2;
}
else if(operator =='-') {
    result = number1-number2;
}
else if(operator =='*') {
    result = number1*number2;
}
else {
    result = number1/number2
}

//Display the result

window.alert("Result is " + result);