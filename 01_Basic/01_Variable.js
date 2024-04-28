const accountId=897868;
let fruitName='apple';
var vegName='Spinach';

meal = "rice";

let secondVegName='Chillie';

// accountId=789; -- cant be changed it would give error
/* we should always use let instead of var because of scope related issue*/

//we can also declare a variable without using let var and const but its not a good practice

//when we declare a variable and dont assign it value it's value is undefined at that time
let noValueVar;

console.table([accountId , fruitName, vegName ,meal,secondVegName,noValueVar])