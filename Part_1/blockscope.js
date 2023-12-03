{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// console.log(b); not print becuase let and const are the block scope 



const c1=100;
{
    const c1=200;
    {
        const c1=300;
        console.log(c1);
    }
    console.log(c1);
}
console.log(c1);