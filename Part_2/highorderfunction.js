

function Abc(name)
{
    console.log("ABC FUNCTION CALL");
    console.log(`Hello ${name}`);
}

function xyz(callback)   /* Callback Value */
{
    console.log("XYZ Function Call");
    callback("Pritesh Bhatiya");
}


xyz(Abc);


/* settime out function  */
setTimeout(function()
{
    console.log("Pritesh");
},15000)


function great(name,callback)
{
    console.log(`Hello ${name}`);
    setTimeout(() => {
            console.log(`Hello inside settimeout ${name}`);
            callback();
    }, 2000);
}

function goodby()
{
    console.log("GOOD BY");
}

great("Pritesh",goodby)



/* Fetch Data After Some Time */

function Getdata()
{
    let name=["Pritesh","Jatin","Jimit","Harsh"];
    for(let i=0;i<name.length;i++)
    {
        console.log(name[i]);
    }
}

setTimeout(() => {
    Getdata();
    
}, 7500);

