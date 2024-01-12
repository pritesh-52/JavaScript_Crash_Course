$(document).ready(function(){
    $("button").click(function(){
        $("h2").hide("slow",function(){
            console.log("Click The Button and h2 tag");
        })
    })
})


function first(callback)
{
    setTimeout(function(){
        var data={message:"Hello Pritesh"};
        callback(data);
    },2000);
    
}
function second(mesaage)
{
    console.log(mesaage.data);
}

second();