console.log("Hello Pritesh");

//console.log(a);
let a=10;
let b=20;

fun();  //hositing    
//fun2();
function fun()
{
    console.log("Inside A");
    fun2();
    function fun2()
    {
        console.log("Inside B");
    }
}




lg="gls u";
console.log(lg); 


/* loops concept */


let person={
    name:["Peitesh","Bhatiya","Harsehbhai"],
    clg:["GLS","Nirma","DDU"]
}


for (let data in person)
{
    console.log(person[data]);
}
