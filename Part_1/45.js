/* Array method */


/* For each loop */

mynumber=[4,3,5];

mynumber.forEach(function(number,index)
{
    console.log(`Number is ${number} and index is ${index} and multipication is ${number*index}`);
    
});

/* foreach take the function as a input callback function */


const data=[
    {name:"Pritesh",city:"Bhavnagar"},
    {name:"Bhatiya",city:"Amd"}
]


data.forEach((user=>{
    console.log(user.name);
    console.log(user.city);
}))



const person=[
    {fname:"Bhavin",company:"webcode"},
    {fname:"Pritesh",company:"Tech_Holding"}
]

person.forEach((getdata=>{
    console.log(getdata.fname);
    console.log(getdata.company);
}))


for (let gtdata of person)
{
    console.log(gtdata.fname);
}