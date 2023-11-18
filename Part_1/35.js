/* object destructuring */

const car={
    make:"Toyota",
    model:"Corolla",
    year:2020
}

let {make,...resetdata}=car;    /* object destructuring */
console.log(make);
console.log(resetdata);



/* In object we use {} instead of [] */ 
/* In Aerray we use [] */