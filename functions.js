//divisible by 11
var a= (x)=>
{
    const a=5;
    var c;
    if(a%11===0){
        c=true;
    }
    else{
        c=false;
    }
    document.getElementById('root').innerHTML=c;
}
a(10);

//sum of digits
class demo{
    methodone()
{
    var num=1234, rem, sum=0;
    while(num)
    {
      rem = num%10;
      sum = sum+rem;
      num = Math.floor(num/10);
    }
    document.getElementById('root').innerHTML=sum;
}
}
var mydemo=new demo();
mydemo.methodone();