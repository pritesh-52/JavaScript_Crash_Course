/* find method in javascript */

/* find the value accroding to the condtion */


const string=["Hello","HOW","ARE","Where"]

const final_string=string.find((string=>{
    return string.length==3;
}))
console.log(final_string);    /* return only one value */



/* fill method used in javascript */

const myarr=[10,20,30,40,50];

myarr.fill(5);
console.log(myarr);   /* fille the 5  number on whole array */




/* string and array are iterators on iterator we use for of loop */
   

const fname="Pritesh";

for(let char of fname)
{
    console.log(char);
}



const newarry=[1,2,3,4,5];

for (let num of newarry)
{
    console.log(num);   
}