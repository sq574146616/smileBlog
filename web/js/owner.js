//获取当前时间
window.onload=function showtime(){
	var myDate=new Date();
	var mytime=myDate.toLocaleDateString(); 
	document.getElementById("write").innerHTML=mytime;
}


