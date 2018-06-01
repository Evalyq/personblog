$(function(){
	$(".logo img").css({"opacity":"1","transform":"translatex(0)","transition":"transform 1s ease-in-out 0s, opacity 1s ease-in-out 0s"});
	$(window).scroll(function(){
       var bodyHeight=$("body").height();
       var windowHeight=$(window).height();
       var scrollHeight=$(window).scrollTop();
       var headerHeight=$(".header").height();
       if(scrollHeight>=headerHeight){
       	  $(".logo img").css({"opacity":"0","transform":"translatex(24px)","transition":"transform 1s ease-in-out 0s, opacity 1s ease-in-out 0s"});
       }
       else{
          $(".logo img").css({"opacity":"1","transform":"translatex(0)","transition":"transform 1s ease-in-out 0s, opacity 1s ease-in-out 0s"});
       }
   	})
})
