/* lexical scope */

const name="Pritesh";
function App()
{
    const fun1=()=>
    {
        //var name="Bhatiya";
        console.log(name);
    }
    fun1();
    console.log(name);
}

App();