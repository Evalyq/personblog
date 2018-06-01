$(function(){
	var a=window.location.search.split("=");
	var id=a[1];
    $.ajax({
    	url:"http://192.168.199.249:8080/index.php?c=api&a=info",
    	type:"get",
    	dataType:"json",
    	data: {
    		id:id,
    	},
    	success:function(res){
    	    var articleInfo="";
		    var article=res.data.info;
		    articleInfo='<h4 class="title">'+article.title+'<span>'+article.createdate+'</span></h4><p class="newsnav">您现在的位置是:<a href="#">首页</a>&nbsp;&nbsp;><a href="#">学无止境</a>&nbsp;&nbsp;><a href="#">心得笔记</a></p><p>'+article.content+'博客从最初的域名购买，到上线已经有四年的时间了，这四年的时间，有笑过，有怨过，有悔过，有执着过，也有放弃过…但最后还是坚持了下来，时间如此匆匆，等再回过头已来不及去弥补…</p><p>其实蛮遗憾的，话说这四年，并不是很专注于它，起初的建立是因为“面子”，一个网页设计师怎能没有一个属于自己的博客网站，域名几番斟酌选了yangqq(唯一用心的选了域名)，选好后，草草的用了两天时间，设计了一个简单的博客模板，接下来用了漏洞百出的asp程序(自己瞎改)，从网上copy了很多文章，放到网站上，就这样，我满心欢喜…博客从此也就搁置了。就像玩拼图，趁着三分热度和新奇，一鼓作气完成了，就随意的丢在犄角旮旯了，再也没有兴趣…</p><p><img src="./image/bb9e1b25215426d6c375e453c756f136.jpg" alt=""></p><p>直到我要利用它，博客搭建半年的时间，更新一两次，但是文章都乱七八糟，不是原创，偶尔会写写心情。从内容上来说，还是可以了。就这样，我骄傲的自以为是，拿着这样一个博客网站还有曾经做过的企业政府网站案例去朋友推荐的大公司应聘，最后我被无情的拒绝了，好在他们的技术人员也认真看了我的博客，告知我应该多注重div，css…其实我也有点儿不服气，甚至有点儿恼羞成怒，对他们说，“我诚心加入，既然你们不需要，那这就是你们的损失！”</p><p>直到我要利用它，博客搭建半年的时间，更新一两次，但是文章都乱七八糟，不是原创，偶尔会写写心情。从内容上来说，还是可以了。就这样，我骄傲的自以为是，拿着这样一个博客网站还有曾经做过的企业政府网站案例去朋友推荐的大公司应聘，最后我被无情的拒绝了，好在他们的技术人员也认真看了我的博客，告知我应该多注重div，css…其实我也有点儿不服气，甚至有点儿恼羞成怒，对他们说，“我诚心加入，既然你们不需要，那这就是你们的损失！”</p><p>那一次应聘，给了我狠狠的一击，也就这样，我删掉了曾经被我copy过来的文章，重新开始…不再那么自以为是，认认真真的研究，做好每一次的案例。两年的时间，博客也有些起色和人气…</p><p><img src="./image/33ef77652d7472aa0ce7b506b07ab350.png" alt=""></p>';
		    $(".con").html(articleInfo);
		    var  newcom="";
		    for(var i=0;i<res.data.commentList.length;i++){
		    	var author=res.data.commentList[i];
		    	newcom+='<div class="cmt-list-item clearfix"><div class="hot-item-img clearfix"><a href="#" title="挽留所有不能的"><img src="./image/fac494264beff70ed91fedf32783552b_default_1449555786891_jpg.jpg" alt=""></a></div><div class="hot-com-info"><div class="hot-com-author clearfix"><span class="user-name"><a href="#">'+author.author.name+'</a></span><span class="user-address">[<i class="city">山西省太原市</i>网友]</span><span class="make-top"></span><span class="user-com-time">'+author.author.createtime+'</span></div><div class="hot-com-text"><p>'+author.content+'</p></div><div class="hot-com-function"><span class="report"><a href="#"><i class="icon-flag"></i><em>举报</em></a></span><span class="reply"><a href="#">回复</a></span><span class="support"><a href="#"><i></i><em class="ding-num">2</em></a></span><span class="cai"><i class="cai-img"></i></span><span class="prop"><i class="prop-img"></i></span></div></div></div>';
		    }
		    $(".cmt-list-box").html(newcom);
    	},
    	error:function(res){
            alert("111");
    	}
    })
    // var res={
				// 	"status" : true,
				// 	"data"   : {
				// 		"info" :{
				// 				id: "1",
				// 				title: "【匆匆那些年】总结个人博客经历的这四年…",
				// 				content: "qqqqqqqqqq",
				// 				image: "./public/upload/img_1508636446641043.png",
				// 				classify_id: "5",
				// 				status: "1",
				// 				createtime: "2017-10-21 10:38:57",
				// 				updatetime: "2017-10-22 09:40:46",
				// 				createdate: "2017/10/21"
				// 			},
				// 		"commentList" : [
				// 			{
				// 				id: "10",
				// 				user_id: "1",
				// 				blog_id: "1",
				// 				parent_id: "0",
				// 				content: "hao",
				// 				status: "0",
				// 				createtime: "2017-10-22 16:33:38",
				// 				updatetime: null,
				// 				author: {
				// 					id: "1",
				// 					name: "马莹",
				// 					email: "1977905246@qq.com",
				// 					password: "123qwe",
				// 					image: "./public/upload/img_1508660053229888.png",
				// 					status: "0",
				// 					createtime: "2017-10-22 16:14:13",
				// 					updatetime: null
				// 				},
				// 				like_count: "0",
				// 				is_like: 0
				// 			},
				// 		],
				// 		"relationBlog" : [
				// 			{
				// 				id: "1",
				// 				title: "131313",
				// 				content: "qqqqqqqqqq",
				// 				image: "./public/upload/img_1508636446641043.png",
				// 				classify_id: "5",
				// 				status: "1",
				// 				createtime: "2017-10-21 10:38:57",
				// 				updatetime: "2017-10-22 09:40:46",
				// 				createdate: "2017/10/21"
				// 			},
				// 		]
				// 	}
				// }

})