/* Map Method */

/* map method also take as a callback function */


const user=[
    {lname:"Harsh",postion:"Dev"},
    {lname:"Miral",postion:"JAVA"},
    {lname:"Bhavin",postion:"MERN"}
]


const usernane=user.map((data=>{
    return  data.lname;
}))

console.log(usernane);


/* Map method return a new array */


let num=[1,2,3,4,5]

const squnm=num.map((squre=>{
    return squre*2;
}));
console.log(squnm);    /* return a new array which perform from the existing array */
