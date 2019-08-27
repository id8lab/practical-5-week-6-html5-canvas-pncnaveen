

	var crc=document.getElementById("mycvs");
var c=crc.getContext("2d");

function drawOnLoad()
{
c.fillStyle="#4390e8";
c.fillRect(20,20,100,50);
c.fillStyle = 'rgba(255, 0, 0, 1)';
c.beginPath();
c.arc(120,50,10,0,2*Math.PI);
c.stroke();
c.clearRect(60,30,20, 10);


}
var x=0;
var xspd=10;
var flag=0;
var m;
function drawReact()
{
c.clearRect(0,0,mycvs.width,mycvs.height);
	c.fillStyle="#3ecf65";
	
c.fillRect(x,100,30,20);



}
function updt()
{
	if(x!=290 && flag==0)
	{x+=xspd;
	if(x==290)
		flag=1;}
	else if(x!=0 && flag==1)
	{x-=xspd;
if(x==0)
		flag=0;}
	drawReact();
	
	
}
