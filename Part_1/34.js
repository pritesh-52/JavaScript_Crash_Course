/* how to iterate object */


const perosn={
    name:"Pritesh",
    city:"Bhavnagar",
    state:"Gujrat",
    age:"22"
}


/* for in loop */
for (let key in perosn)
{  
    //console.log(perosn[key]);
    console.log(`${key}: ${perosn[key]}`);  //dynamaic data using  $ this we can pass to the 
}


/* for of loop */
for (let key of Object.keys(perosn))
{
    console.log(perosn[key]);
}


let array=[10,20,30,40,50,60,];
let array2=[70,80,90,100,110,120];

console.log(...array,...array2,130,140);

const s1={
    n1:"hello",
    n3:"HI"
}
const s2={
    n2:"world",
    n4:"HELLO"
}

const newobj={...s1,...s2};
console.log(newobj);