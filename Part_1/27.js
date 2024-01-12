/* Array destructuring */


let newarray=[40,50,60,70,80,90];

/*let fele=newarray[0];
let sece=newarray[1];*/

let [fele,sece,...remaing]=newarray;   /* Array destructuring */
console.log(fele,sece);
console.log(remaing);