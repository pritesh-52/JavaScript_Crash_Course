/*  object inside array */

const college=[
    {name:"GLS",stream:"MCA"},
    {name:"NIRMA",stream:"BTECH"},
    {name:"DDU",stream:"BE"}
]
console.log(college);

for (let user  of college)   /* for of loop */
{
    console.log(user.name+" "+user.stream);

}