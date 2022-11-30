let num = 7;
let count = 0;
for(let a = 1; a <= num; a++)
{
    if(num % 2 == 0)
    {
        count++;
    }
}
if(count == 2)
{
    console.log("Prime")
}
else
{
    console.log("Not Prime");
}