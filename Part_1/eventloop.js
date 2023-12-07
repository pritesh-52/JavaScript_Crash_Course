
for(let i=1;i<=5;i++)
{
    setTimeout(function()
    {
        console.log(i);
    },5000)
}

/*function x()
{
    for(let i=0;i<=5;i++)
    {
        setTimeout(function()
        {
            console.log("Pritesh"+i);
        },5000);
    }
}*/
function x()
{
    for(let i=1;i<=5;i++)
    {
        setTimeout(function()   /* take callback function */
        {
            console.log(i)
        },i*2000);  /* after that time display number print */
    }
    console.log("Pritesh Bhatiya");
}

x();