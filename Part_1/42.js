/* Parameters in function */

console.log("SUM IS",Sum(10,20));
function Sum(a,b)
{
    return a+b;
}


const Sub=function(c,d)
{
    return c-d;
}

const a1=Sub(100,90);
console.log(a1);




const getdata=()=>{
    console.log("GETING DATA");
}


getdata();

/* Using Spread Operator data pass in function*/

function firstnum(...num)
{
    let total=0; 
    for (n2 of num)
    {
        total=total+n2;
    }
    return total;
    
}


const n3=firstnum(1,2,3,4,5);
console.log(n3);    /* Value passed in array*/ 

