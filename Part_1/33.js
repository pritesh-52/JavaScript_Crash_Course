/* Object in javascript */
/* Object in javascript store in keys and store in values */


const obj={
    fname:"Priesh",
    lname:"Bhatiya",
    age:25,
    city:"Delhi",
    hobby:["Writing","Reading","Playing"],
    "gender":"male"
}

console.log(obj);
console.log(obj.fname);
console.log(obj.lname);
console.log(obj.age);
console.log(obj.city);
console.log(obj["gender"]);

for (let i=0;i<obj.hobby.length;i++)
{
    console.log(obj.hobby[i]);
}
