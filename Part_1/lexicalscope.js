function a()
{
    var b=10;
    c();
    function c()
    {
        console.log(b);  //print the value of b
    }
}

a(); //global exectuion

