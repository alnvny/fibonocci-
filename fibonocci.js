var allan=function(){
var a=1;
var num=10;
var c=0;
for(var i=1;i<=num;i++)
{
var temp=c;
c=c+a;
console.log(c);
a=temp;
}
}