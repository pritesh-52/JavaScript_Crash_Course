/* Revision Pratice */

function App()
{
    const country=()=>{
        console.log("India");
    }
    const State=()=>{
        console.log("Gujrat");
    }
    const City=()=>{
        console.log("India");
    }
    country();
    State();
    City();
}
App();


/* Callback function */

const mcadepartment=()=>{
    console.log("MCA Department");
}


const gls=(Callback)=>{
    console.log("GLS college")
    Callback();
};


gls(mcadepartment);

