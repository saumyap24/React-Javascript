// Spread operator targets all the values in the variable
// used ton expand,copy,concat
//syntax: var variable1 = [...value]

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
concat_arr = arr1.concat(arr2);
console.log(concat_arr);

//spread operator
spread_arr = [...arr1,...arr2];
console.log(spread_arr);
