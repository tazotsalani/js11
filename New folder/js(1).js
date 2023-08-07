let number1 = prompt ('Enter first number');
let number2 = prompt ('enter second number');

if (isNaN (number1) || isNaN(number2)) {
    alert('enter only numbers')
} else {
    let sum = Number(number1) + Number(number2);
let product = number1 * number2;

alert(
    `the sum of ${number1} and $(number2) is: $(sum); the product is $(product)`
);

}
