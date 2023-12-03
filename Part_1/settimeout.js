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

function a()
{
    for(var j=11;j<=15;j++)
    {
        function close(j)
        {
            setTimeout(function(){
                console.log(j);
            },j*1000);
        }
        close(j)
    }
}
a();

function hello()
{
    console.log("Pritesh Bhatiya MERN Stack Dev");
}


setTimeout(hello,10000);