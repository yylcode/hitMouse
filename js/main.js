$(document).ready(function(){
	
//Math.ceil();向上取整
//Math.floor();向下取整
//Math.round();四舍五入
//	for(var i=0;i<19;i++){
//		var num=Math.floor(Math.random()*10);
//		console.log(i+"."+num);
//	}
   var b=1000;
	
	setInterval(function(){
		var x=Math.floor(Math.random()*9);
		var content=document.getElementById("content");
		var img=content.children[x];
		img.src="img/2.gif";
		
		var y=Math.floor(Math.random()*9);
		var content=document.getElementById("content");
		var img1=content.children[y];
		img1.src="img/5.jpg";
	},b);
	var a=0; 
	$("img").click(function(img){ 
		 
		var str=this.src;
		console.log(str);
		if(str.charAt((str.length - 5)) == '2'){
			a++;
			this.src="img/5.jpg"
			$("p").text("得分：" + a+ "分")
		}else{
			a--;
			if(a<0){
				alert("游戏失败！");
				location.reload();
			}
			$("p").text("得分：" +a + "分")
		}
		if(a<0){
			alert("游戏失败！");
			location.reload();
		}
	})
	$("button").click(function(button){
		 
		if(this.value="jiandan"){
			b=1500;
			setInterval(function(){
				var x=Math.floor(Math.random()*9);
				var content=document.getElementById("content");
				var img=content.children[x];
				img.src="img/2.gif";
				
				var y=Math.floor(Math.random()*9);
				var content=document.getElementById("content");
				var img1=content.children[y];
				img1.src="img/5.jpg";
			},b);
		}else if(this.value="yiban"){
			b=1000;
			setInterval(function(){
				var x=Math.floor(Math.random()*9);
				var content=document.getElementById("content");
				var img=content.children[x];
				img.src="img/2.gif";
				
				var y=Math.floor(Math.random()*9);
				var content=document.getElementById("content");
				var img1=content.children[y];
				img1.src="img/5.jpg";
			},b);
		}else if(this.value="kunnan"){
			b=100;
			setInterval(function(){
				var x=Math.floor(Math.random()*9);
				var content=document.getElementById("content");
				var img=content.children[x];
				img.src="img/2.gif";
				
				var y=Math.floor(Math.random()*9);
				var content=document.getElementById("content");
				var img1=content.children[y];
				img1.src="img/5.jpg";
			},b);
		}
		
	})
})