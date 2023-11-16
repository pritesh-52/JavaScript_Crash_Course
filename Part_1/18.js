/* Break And Continue Keyword */

for(let i=1;i<=10;i++)
{
    if(i==6)
    {
        break;   //display from 1 to 5
    }
    else
    {
        console.log(i);
    }
}

console.log("\n");
for(let i=1;i<=10;i++)
{
    if(i==6)
    {
        continue;   //skip 6
    }
    else
    {
        console.log(i);
    }
}