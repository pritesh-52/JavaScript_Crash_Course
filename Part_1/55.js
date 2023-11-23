/* class */

class personaldata{
    constructor(firstnae,lastname,email)
    {
        this.firstnae=firstnae,
        this.lastname=lastname,
        this.email=email

    }
    printdetaik()
    {
        console.log(`${this.firstnae}  ${this.lastname} ${this.email}`);
    }
}

const a1=new personaldata("Pritesh","Bhatiya","prite@gmail.com");
a1.printdetaik();


/* callback function exmaple */

function fun2()
{
    console.log("Hello function 2");
}


function fun1(callback)
{
    console.log("Hello this function 1");
    callback();
}

fun1(fun2)




function Calc()
{
    function Additiion(a,b)
    {
        return a+b;
    }

    function Subtraction(a,b)
    {
        return a-b;
    }
    function Multipication(a,b)
    {
        return a*b;
    }
    function Division(a,b)
    {
        return a/b;
    }

    return {Additiion,Subtraction,Multipication,Division};
}

const g1=Calc();
console.log(g1.Additiion(10,20));
console.log(g1.Subtraction(50,30));
console.log(g1.Multipication(10,20));
console.log(g1.Division(20,10));

