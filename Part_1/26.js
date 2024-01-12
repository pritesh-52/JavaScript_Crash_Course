/* for of loop */
let cl=["GLS","NIRMA","DDU"];

for(let cl1 of cl)
{
    console.log(cl1);   //prit the actual value 
}

/* for in loop */  /*  used to itetarciting give then index number */

let gt=["ONE","TWO","THREE"]
for (let cl5 in gt)
{
    console.log(cl5);
}

const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);