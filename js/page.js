$(function(){
	$(".content .btn").click(function(){
		$(this).addClass("click");
		setTimeout(function(){
			$(".content .btn").removeClass("click");
		},100)
		
	})
	$(".open_hdgz").click(function(){
		$(".marsk").height(parseInt($(".hdgz_box").outerHeight())+"px");
		$(".hdgz_box").show();
		$(".marsk").show();
	})
	$(".close").click(function(){
		$(".hdgz_box").hide();
		$(".marsk").hide();
		$(".login").hide();
	})
	
	$(".change a").click(function(){
		$(".change a").removeClass("anew");
		$(this).addClass("anew");
	})
	$(window).resize(function(){
		$(".marsk").outHeight(parseInt($(".hdgz_box").outerHeight())+"px");
	})
//	$(".marsk").height(parseInt($(".hdgz_box").outerHeight())+"px");
	if (!$(".login").is(":hidden")) {
		$(".marsk").show();
	}else{
		$(".marsk").hide();
	}
})