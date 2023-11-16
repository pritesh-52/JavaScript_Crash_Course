/* And Or Operator */


let a=10;
let b =5;
let c=90;

if (a>b)
{
    if(a>c)
    {
        console.log("A is max");
    }
    else
    {
        console.log("C IS MAX");
    }
}
else if(b>c)
{
    console.log("B IS MAX");
}
else{
    console.log("C IS MAX");
}

if(a>b && a>c)   //and
{
    console.log("A IS MAX");
}
else if(b>c)
{
    console.log("B IS MAX");
}
else{
    console.log("c max");
}

let sname="Bhatiya";
let year=22;

if(sname[0]=="H" || year==22)   // Or
{
    console.log("True");
}
else{
    console.log("False");
}