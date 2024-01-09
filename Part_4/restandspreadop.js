const values=["Pritesh","Bhatiya","Hareshbhai"];
const newdata=[...values];
console.log(newdata);



function sum(a,b,...c)
{
    return a+b;
}

const ans=sum(10,20);
console.log(ans);