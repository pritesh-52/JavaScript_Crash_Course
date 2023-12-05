function abc()
{
    console.log("Pritesh Bhatiya");

}

function xyz(callback)  /* callback function */
{

    console.log("XYZ Function");
    abc()
}

xyz(abc);


function fun()
{
    function fun1()
    {
        return "FUN1";
    }
    function fun2()
    {
       return "FUN2";
    }
    function fun3()
    {
        return "FUN3";
    }
    return {fun1,fun2,fun3};
}

const x=fun();
console.log(x.fun1());
console.log(x.fun2());
console.log(x.fun3());
