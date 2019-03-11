//
//		var oBox = $("#slideshow").children("p");
//		console.log(oBox);//获取ul中的li
//		var oImgWidth = $(oBox.eq(0)).outerWidth();
//		console.log(oImgWidth);//获取每个li的宽度
//		$("#slideshow").append('<p><img src="img/4644f0ab215f.jpg"/></p>');	
//		console.log($('#slideshow'));
//		var timer=null;
//		var key = 0; //控制播放的数量
//		var circle = 0;
//		var olLis = $('#slideshow1');
//		timer = setInterval(autoPlay,1000);
//		function autoPlay(){
//			key ++;
//			if(key > oBox.length){
//				$("#slideshow").css({"left" : 0})
//				key = 1;
//			}		
//			$("#slideshow").animate({"left":-key * oImgWidth});			
// 			circle ++;
// 			if(circle > olLis.length - 1){
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
//				timer= setInterval(autoPlay,3000);;
//			})
//		}	 
////// (function(){
//// 	
//// })();
