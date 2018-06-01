$(function(){
	$(".login a").click(function(){
		$(".login-mask").show();
	})
	$(".close-btn").click(function(){
       $(".login-mask").hide();
	})
    $(".submit-w-bt").click(function(){
	    var com = $(".text").val();
    	if(com == ""){
    		$(".error-tip").show();
    		$(".text").focus();
    	}else{  

	    		$(".error-tip").hide();
	    		var name=$(".username").text();
				var id = localStorage.getItem("user_id");
				var getname = localStorage.getItem("name");
				var blog_id = window.location.search.split("=")[1];
				$.ajax({
		           url: "http://192.168.199.249:8080/index.php?c=api&a=doComment",
		           type:"post",
		           dataType:"json",
		           data:{
		           	    content:com,
						user_id:id,
						blog_id:blog_id,
		           },
		           success:function(res){
	                    var commit = '<div class="cmt-list-item clearfix"><div class="hot-item-img clearfix"><a href="#" title="挽留所有不能的"><img src="./image/fac494264beff70ed91fedf32783552b_default_1449555786891_jpg.jpg" alt=""></a></div><div class="hot-com-info"><div class="hot-com-author clearfix"><span class="user-name"><a href="#">'+name+'</a></span><span class="user-address">[<i class="city">山西省太原市</i>网友]</span><span class="make-top"></span><span class="user-com-time"></span></div><div class="hot-com-text"><p>'+com+'</p></div><div class="hot-com-function"><span class="report"><a href="#"><i class="icon-flag"></i><em>举报</em></a></span><span class="reply"><a href="#">回复</a></span><span class="support"><a href="#"><i></i><em class="ding-num">2</em></a></span><span class="cai"><i class="cai-img"></i></span><span class="prop"><i class="prop-img"></i></span></div></div></div>';
		                $(".cmt-list-box").append(commit);
		           },
		           error:function(res){
	                    
		           }
				})
    		
    		// $(".submit-w-bt").css({"background":"url(../image/loading.gif) no-repeat"});
    	}  
    })
    $(".login-bt").click(function(){
    	var email = $(".phone-num input").val();
        var password = $(".phone-password").val();
	    $.ajax({
			url:"http://192.168.199.249:8080/index.php?c=api&a=doLogin",
		    type:"post",
		    dataType:"json",
		    data:{
	            email:email,
	            password:password,
		    },
		    success:function(res){
		    	if(res.status){
		    		$(".login-mask").hide();
		    		localStorage.setItem("user_id",res.data.id);
		    		localStorage.setItem("name",res.data.name);
                    $(".login").html('<a class="logina" href="#"><img class="author-img" src="./image/fac494264beff70ed91fedf32783552b_default_1449555786891_jpg.jpg"></a><span class="username">'+res.data.name+'</span>')
		    	}
	           
		    },
		    error:function(res){
		    	alert("用户名或密码错误！");
		    }
        })
    })
})