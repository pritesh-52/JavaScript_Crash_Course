/*function x()
{
    var a=7;
    function y()
    {
        console.log(a);
    }
    a=100;
    return y;
}
var z=x();  //closers  
console.log(z);

z();*/ /* Global Memory */



/* second */

function z()
{
    var b=90;
    function x()
    {
        var a=7;
        function y()
        {
            console.log(a,b);
        }
        y();
    }
    x();
}

z();


function Abc()
{
    function xyz()
    {
        function printdata()
        {
            var js="JAVASCRIPT";
            console.log(js);
        }
        printdata();
       
    }
    xyz();   
}
Abc();

/* clouser it means function return with lexical scope */