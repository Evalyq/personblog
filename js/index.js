$(function(){
   //  var res = {
			// "status" : true,
			// "data"   : {
			// 	"lists" : [
			// 		{
			// 			id: "1",
			// 			title: "html5个人博客模板主题《心蓝时间轴》",
			// 			image: "./image/f5ac5ea0a98db2907bc80205a5ad132f.jpg",
			// 			classify_id: "5",
			// 			status: "1",
			// 			createtime: "2017-10-21 10:38:57",
			// 			updatetime: "2017-10-22 09:40:46",
			// 			createdate: "2017/10/21",
			// 			createmonth: "09-08",
			// 			createyear: "2017",
			// 			shortintroduce: "Html5+css3个人博客模板，主题《心蓝时间轴》，使用css3技术实现网站动画效果，主要模块是时间轴部分.主题颜色为蓝色.目前版本还在测试当中,喜欢的可以先下载",
			// 			classname:"原创个人博客模板",
			// 		},
			// 		{
			// 			id: "1",
			// 			title: "html5个人博客模板主题《心蓝时间轴》",
			// 			image: "./image/f5ac5ea0a98db2907bc80205a5ad132f.jpg",
			// 			classify_id: "5",
			// 			status: "1",
			// 			createtime: "2017-10-21 10:38:57",
			// 			updatetime: "2017-10-22 09:40:46",
			// 			createdate: "2017/10/21",
			// 			createmonth: "09-08",
			// 			createyear: "2017",
			// 			shortintroduce: "Html5+css3个人博客模板，主题《心蓝时间轴》，使用css3技术实现网站动画效果，主要模块是时间轴部分.主题颜色为蓝色.目前版本还在测试当中,喜欢的可以先下载",
			// 			classname:"原创个人博客模板",
			// 		},
					
			// 	],
			// }
	  //   };
	$.ajax({
		url:"http://192.168.199.249:8080/index.php?c=api&a=bloglist",
		type:"get",
		dataType:"json",
		success:function(res){
			console.log(res);
            var str="";
			for(var i = 0;i<res.data.lists.length;i++){
				var a=res.data.lists[i];
				str+='<li><time class="time"><span>'+a.month+'</span><span>'+a.year+'</span></time><div class="timeicon"></div><div class="tmlable"><h2><a href="#">'+a.title+'</a></h2><p><span class="blogpic"><a href="#"><img src="'+a.image+'" alt=""></a></span>'+a.content+'</p><p><a href="#" class="classname">'+a.classify_name+'</a><a href="more.html?id='+a.id+'" class="readmore">阅读全文>></a></p><div class="tri"></div></div></li>'
			}
			$(".timeline").html(str); 
		},
		error:function(res){
           alert("111");
		}
	});
    // console.log(res.data.lists.length);
})