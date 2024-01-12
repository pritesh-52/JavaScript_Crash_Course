
function first()
{

    function abc(){
        return "ABC";
    }
    function xyz()
    {
        return "XYZ";
    }

    return [abc,xyz];
}

const getdata=first();
console.log(getdata.abc());
console.log(getdata.xyz());
const a2=first();
console.log(a2);