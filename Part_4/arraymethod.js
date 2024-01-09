const array = [15, 20, 25, 35];
console.log(array);

/*for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}*/


/*array.forEach((value)=>{    
    console.log(value);
})*/

const newarray=array.map((num)=>{
    return num+10;
})
newarray.forEach((nm)=>{
    console.log(nm);
})




const upfiftenvalue=array.filter((filtrnum)=>{
    return filtrnum>15;
})

console.log(upfiftenvalue);



const c1=100;
function main()
{
    const c2=200;
    function parent()
    {
        const c3=300;
        console.log(c3);
    }
    parent();
    console.log(c2);
}
console.log(c1);
main();