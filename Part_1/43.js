/* CALLBACK FUNCTION */



function function2(name)
{
    console.log("Function 2");
    console.log(`YOUR NAME IS ${name}`);
}
function function1(callback)
{
    console.log("Function 1");
    callback("PRITESH");   

}

function1(function2);    //pass the function as a argument called callback function




function state(sname)
{
    console.log("State is Saurstra");
    console.log(`second state is ${sname}`);
}
function city(callback,cname)
{
    console.log("City is Bhavnagar");
    console.log(`second city is ${cname}`);
    callback("Gujrat")
}

city(state,"Ahemedabad")   //Callback function working flow 



/* Callback and Function Return function is khown as a High order function */