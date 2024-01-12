print()     /*  This is hoisting n js */
console.log(abc());  
console.log("Pritesh")
let a=10;
let b=20;
function print()
{
    console.log("Hello Pritesh");
}

function abc()
{
    return "Hello Abc";
}
/*for(let i=1;i<=5;i++)
{
    print();
}


function abc()
{
    
}*/


const first=async()=>{
    try
    {
        if(a>0)
        {
            console.log(a);
        }
        else
        {
            console.log("Not");
        }
    }
    catch(e)
    {
        console.log(e);
    }
}

//first();


const person={
    name:["Pritesh","Bhatiya","Hareshbhai"],
    age:[20,15,50]
}



for(let j=0;j<person.name.length;j++)
{
    console.log(person.name[j]);
}
