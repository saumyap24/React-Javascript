// To create a arrow function, use the `() => {}` syntax amd create any variable by const, let, var.Then assign the function code to the variable.

//In case of normal function creation
function createNormalFunction(num) {
    return num * num;
}
console.log(createNormalFunction(5));

//In case of arrow function
const createArrowFunction = (num) => num * num;

console.log(createArrowFunction(5));


//Limitations of arrow functions:
//1. no this keyword binding: this keyword can only be used inside the fucntion body. Since the arrow function defined in window scope so it will be referered to only window object instead of the object it is function is writtten
var obj = {
    num: 5,
    add: () => {
        console.log(this.num + num);
    }       
}

obj.add();

//2. Arrow functions can't be used as constructors 
//3. The call.apply, bind methods don't work with arrow functions
//3.1 call() method: used to call any function for any object and inside the fucntion
//3.2 apply() method: same as call() method and passes array of arguments
//3.3 bind() method: creates another copy of the function by binding the object
