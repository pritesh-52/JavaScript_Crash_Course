/* FUNCTIONS IN JAVASCRIPT */

function display()  /* No return value */
{
    console.log("Hello World");
}


display();
function add(a1,a2)    // pass the arguments
{
    return a1+a2;   //return statement
}


console.log(add(10,20));


/* find numbet is even or odd using the function */

function evenodd(number)
{
    return number%2==0;
}

console.log(evenodd(4));

/*if(evenodd)
{
    console.log("True");
}
else{
    console.log("False");
}*/


function arrayvalue(myarra,element)
{
    for(let i=0;i<myarra.length;i++)
    {
        if(myarra[i]==element)
        {
            return i
        }
    }
    return -1

}

let arr=[1,2,3,4];
console.log(arrayvalue(arr,2));