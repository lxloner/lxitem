$('.ddd').click(function(){
		var su = ''
		if($('.hq').text()){
			$('.hq').text('') ;
		}	
		for(var i = 0 ;i<4; i++){
		var suji = parseInt(Math.random()*10);
          su += suji;
		}
		$('.hq').text(su) ;
	});