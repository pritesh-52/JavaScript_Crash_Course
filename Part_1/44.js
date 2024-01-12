/* Function Returning function */




function fun1()
{
    function fun2()
    {
       return "Inside function 2";
    }

    function fun3()
    {
        return "Inside function 3";
    }

    function fun4()
    {
        return "Inside function 4";
    }
    return {fun2,fun3,fun4};
}


const getdata=fun1();
console.log(getdata.fun2());
console.log(getdata.fun3());
console.log(getdata.fun4());
