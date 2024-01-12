/* For loop in array */


let state=["US","INDIA","CANDA","NS","WE"];

let newstate=[];
for(let i=0;i<state.length;i++)
{
   newstate.push(state[i].toLowerCase());
}
console.log(newstate);


/* using const we create an array */
const h1=["ONE","TWO","THREE","FOUR"];
console.log(h1);

h1.push("FIVE");
console.log(h1);