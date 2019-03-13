//		var oBox = $(".image1").children();
//		console.log(oBox);//获取ul中的li
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
(function(){
            var $box = $(".slideshow"),
                $picLi = $(".slideshow .image1 img"),
                $tabLi = $(".slideshow .box li"),
                len = $tabLi.length,
                timer;
                first = 0;
            //初始化设置
            $picLi.hide().eq(0).show();//隐藏$picLi 然后显示第一个
            $tabLi.eq(0).addClass("on");//为第一张图片添加属性
            $tabLi.eq(0).css("background","#fff");
            //tab区域
            $tabLi.click(function () {
                var x = $(this).index();//tabLi[i].index = i;
                if(x != first){
                     change(x);//改变X的值
                }
            });
            //自动轮播
            auto();
            $box.hover(function () {
                clearInterval(timer);
            },auto); 
            function auto() {
               timer = setInterval(function () {
                    var x = first;
                    x++;
                    x %= len;
                    change(x);
                },4000)
            }
            //变化函数
            function change(i) {
                $picLi.eq(first).fadeOut(300);
                $tabLi.eq(first).css("background","transparent");
                $tabLi.eq(first).removeClass("on");
                first = i;
                $picLi.eq(first).fadeIn(300);
                $tabLi.eq(first).css("background","#fff");
                $tabLi.eq(first).addClass("on");
            }
        })();

(function(){
	var $box = $('.parts1'),
		$bex = $('.parts1 .parts1-1 ul'),
		$bsx = $('.parts1 ol li'),
		first = 0;
//	$bsx.hide().eq(0).show();
	$bsx.eq(0).addClass("on");
	$bsx.mousemove(function(){
		var x = $(this).index();
		if(x != first){
			change(x);
		}
	});
	function change(i){
		$bex.eq(first).fadeOut(100);
		$bsx.eq(first).removeClass("on");
		first = i;
		$bex.eq(first).fadeIn(100);
		$bsx.eq(first).addClass("on");
	}
})();
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
