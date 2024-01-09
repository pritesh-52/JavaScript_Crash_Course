/* using function create object */


function inform(country,state,city,addres)
{
    const obj={}   //data pass to the object
    obj.country=country,
    obj.state=state,
    obj.city=city,
    obj.addres=addres;
    return obj;
}

const ans=inform("India","gujrat","bhavnagar","gaytrinagar");
const ans2=inform("India","mh","bhavnagar","gaytrinagar")
console.log(ans);
console.log(ans2);
