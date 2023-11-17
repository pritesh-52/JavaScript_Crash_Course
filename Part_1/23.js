/* clone array */
/* spread operator */

let a1=[10,20,30];
let a2=[50,60,70];

let a3=[...a1,...a2];   //spread operator 
console.log(...a3);

console.log(a1===a2);   //false




/*


The spread operator (...) is a syntax in JavaScript that allows you to 
expand elements of an iterable (e.g., an array, string, or object) into places
 where multiple elements or arguments are expected. It provides a concise way to 
 copy arrays, 
concatenate arrays, and create shallow copies of objects.


*/