console.log("Pritesh");

  // undefined 
var $firstname="Bhatiya";
console.log($firstname);


console.log($firstname.length);


let lname="Bhatiya";
console.log(lname);

console.log(lname.toLowerCase());
console.log(typeof lname);


function name()
{
    console.log("Hello is it Pritesh");
}
console.log(typeof name);
const obj={
    fname:["Pritesh","Bhatiya","H"],
    company:["Techholding","TCS","Google","Microsoft"]
}

for(let j=0;j<obj.fname.length;j++)
{
    console.log(obj.fname[j]);
}



let a=10;
let b=20;
console.log(`Hello Pritesh ${a}`);    //Dyanamic Data Pass Using `${}-`




let x=50;
let y=80;
let z=70;

console.log(x>y?"X is max":"z is max" && x>z?"X is max":"z is max"&&x>z?"Y is max":"Z is max");


let a1=[50,60,70];
let a2=[80,90,100];

console.log(a1);
console.log(a2);


let a3=[...a1,...a2];
console.log(...a3);



function zero()
{
    console.log("Zero Function");
}
function first(callback)
{
    console.log("First Function");
    zero();
}

function second(callback)
{
    console.log("Second Function");
    first();
}
second(first());