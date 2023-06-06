//with rest parameter  a function can be called with any number of arguments, no matter how it was defined
// Syntax: function rest_param(...parameters){ statement;}

function rest_param(...input){
    let sum = 0;
    for (let i of input){
        sum += i;
    }
    return sum;
}

console.log(rest_param(1,2));
console.log(rest_param(1,2,3,4,5,6,7,8,9,10,11,12));
