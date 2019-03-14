//		var oBox = $(".image1").children();
//	 console.log(oBox);//获取ul中的li
//		var oImgWidth = oBox.eq(0).outerWidth();
//		console.log(oImgWidth);//获取每个li的宽度
//		
//		
//		var timer=null;
//		var key = 0; //控制播放的数量
//		var circle = 0;
//		var olLis = $('.box li');
//		timer = setInterval(autoPlay,1000);
//		function autoPlay(){
//			key ++;
//			if(key > oBox.length){
//				$(".image1").css({"left" : 0})
//				key = 1;
//			}		
//			$(".image1").animate({"left":-key * oImgWidth});			
// 			circle ++;
// 			if(circle > olLis.length){
// 				circle = 0;
// 			}
// 			for(var i = 0,len = olLis.length;i < len;i ++){
// 				olLis.eq(i).attr({'class' : ''});
// 			}
// 			olLis.eq(circle).attr({'class' : 'current'});
//		}
//		for(var i = 0; i< oBox.length;i++){
//			$(oBox[i]).mousemove(function(){
//				clearInterval(timer);
//			})
//			$(oBox[i]).mouseleave(function(){
//				timer= setInterval(autoPlay,1000);;
//			})
//			
//		}	 
////// (function(){
//// 	
//// })();
	

	$('.aaa li').each(function(){
		$(this).mouseenter(function(){
		$('.aaa li').css({'border-bottom':'none','color':'#000'});
		$(this).css({'border-bottom':'3px solid #fc6628','color':'#fc6628'});
	})
	})
//(function(){
//	var $s1 = $('.s1');
//	console.log($s1);
//	$s1.mouseenter(function(){
//		$s1.animate({top : 200});
//		$s1.addClass("shadow");
//	});
//	$s1.mouseleave(function(){
//		$s1.animate({top : 0});
//		$s1.removeClass('shadow');
//	})
//})();
