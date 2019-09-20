/*
* @Author: hp
* @Date:   2019-08-31 09:03:47
* @Last Modified by:   wqh
* @Last Modified time: 2019-09-19 22:57:08
*/
/*
* @Author: hp
* @Date:   2019-08-30 10:34:30
* @Last Modified by:   hp
* @Last Modified time: 2019-08-30 20:17:08
*/
$(function(){


    // 顶部图标
	$(window).scroll(function(event) {
		var h = $(window).scrollTop();
		if(h>=400){
			$('.side_icon').css('display','block');
		}
		else{
			$('.side_icon').css('display','none');
		}
	});
	$('.side_icon').click(function(){
		$('html,body').animate({'scrollTop':'0px'},500);
	})


	// 头部语言切换
	$('.languge').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('.list_languge').css('display','block');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('.list_languge').css('display','none');
	});

	// 导航
	$('.header_right_bottom').children('ul').children('li').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('.header_right_bottom').children('ul').children('li').eq(2).removeClass('hover_dec_li');
		$('.header_right_bottom').children('ul').children('li').eq(2).children('a').removeClass('hover_dec');
		$(this).addClass('hover_dec_li').siblings('li').removeClass('hover_dec_li');
		$(this).children('a').addClass('hover_dec').siblings('li').children('a').removeClass('hover_dec');
		$(this).children('.dropmenu').css('display','block');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).removeClass('hover_dec_li');
		$(this).children('a').removeClass('hover_dec')
		$(this).children('.dropmenu').css('display','none');
	});


	// 头部搜索
	$('.header_right .search').children('input').click(function(event) {
		/* Act on the event */
		$('.search_btn_wrap').css('display','block');
	});
	$('.close_btn').click(function(){
		$('.search_btn_wrap').css('display','none');
	});
	$('.close_btn').hover(function() {
		$(this).children('img').addClass('closego');
		$(this).children('img').attr('src', '../images/x-red.png');
	}, function() {
		$(this).children('img').removeClass('closego');
		$(this).children('img').attr('src', '../images/x.png');
	});
	

	// 小屏搜索
	$('.sear_btn').click(function(event) {
		/* Act on the event */
		$('.search_btn_wrap').css('display','block');
	});

	// 小屏导航
	$('.cont_back').children('ul').children('li').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).children('div').css('display','block');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).children('div').css('display','none');
	});
	$('.cont_close_btn').click(function(){
		$('.cont_btn_wrap').css('display','none');
	})
	$('.cont_btn').click(function(){
		$('.cont_btn_wrap').css('display','block');
	})

	// 小屏市场
	$('.world_back').children('ul').children('li').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).children('div').css('display','block');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).children('div').css('display','none');
	});
	$('.world_close_btn').click(function(){
		$('.world_btn_wrap').css('display','none');
	})
	$('.world_btn').click(function(){
		$('.world_btn_wrap').css('display','block');
	})

	
	// 头部导航第三个
	$('.header_right_bottom').mouseleave(function(){
		$('.header_right_bottom').children('ul').children('li').eq(2).addClass('hover_dec_li');
		$('.header_right_bottom').children('ul').children('li').eq(2).children('a').addClass('hover_dec');
	});


	// nav导航区
	$('.nav1').hover(function() {
		$(this).children('img').attr('src','../images/superior1_h.png');
		$(this).addClass('show').siblings('a').removeClass('show');
		$(this).removeClass('hid');
	}, function() {
		$(this).children('img').attr('src','../images/superior1.png');
		$(this).addClass('hid');
	});

	$('.nav2').hover(function() {
		$(this).children('img').attr('src','../images/superior2_h.png');
		$(this).addClass('show').siblings('a').removeClass('show');
		$(this).removeClass('hid');
		$('.nav1').addClass('hid').removeClass('show');
		$('.nav1').children('img').attr('src', '../images/superior1.png');
	}, function() {
		$(this).children('img').attr('src','../images/superior2.png');
		$(this).addClass('hid');
	});

	$('.nav3').hover(function() {
		$(this).children('img').attr('src','../images/superior3_h.png');
		$(this).addClass('show').siblings('a').removeClass('show');
		$(this).removeClass('hid');
		$('.nav1').addClass('hid').removeClass('show');
		$('.nav1').children('img').attr('src', '../images/superior1.png');
	}, function() {
		$(this).children('img').attr('src','../images/superior3.png');
		$(this).addClass('hid');
	});

	$('.nav4').hover(function() {
		$(this).children('img').attr('src','../images/superior4_h.png');
		$(this).addClass('show').siblings('a').removeClass('show');
		$(this).removeClass('hid');
		$('.nav1').addClass('hid').removeClass('show');
		$('.nav1').children('img').attr('src', '../images/superior1.png');
	}, function() {
		$(this).children('img').attr('src','../images/superior4.png');
		$(this).addClass('hid');
	});

	$('.nav5').hover(function() {
		$(this).children('img').attr('src','../images/superior7_h.png');
		$(this).addClass('show').siblings('a').removeClass('show');
		$(this).removeClass('hid');
		$('.nav1').addClass('hid').removeClass('show');
		$('.nav1').children('img').attr('src', '../images/superior1.png');
	}, function() {
		$(this).children('img').attr('src','../images/superior7.png');
		$(this).addClass('hid');
	});

	$('.nav6').hover(function() {
		$(this).children('img').attr('src','../images/superior9_h.png');
		$(this).addClass('show').siblings('a').removeClass('show');
		$(this).removeClass('hid');
		$('.nav1').addClass('hid').removeClass('show');
		$('.nav1').children('img').attr('src', '../images/superior1.png');
	}, function() {
		$(this).children('img').attr('src','../images/superior9.png');
		$(this).addClass('hid');
	});

	$('.nav7').hover(function() {
		$(this).children('img').attr('src','../images/superior0_h.png');
		$(this).addClass('show').siblings('a').removeClass('show');
		$(this).removeClass('hid');
		$('.nav1').addClass('hid').removeClass('show');
		$('.nav1').children('img').attr('src', '../images/superior1.png');
	}, function() {
		$(this).children('img').attr('src','../images/superior0.png');
		$(this).addClass('hid');
	});

	$('.nav8').hover(function() {
		$(this).children('img').attr('src','../images/superior6_h.png');
		$(this).addClass('show').siblings('a').removeClass('show');
		$(this).removeClass('hid');
		$('.nav1').addClass('hid').removeClass('show');
		$('.nav1').children('img').attr('src', '../images/superior1.png');
	}, function() {
		$(this).children('img').attr('src','../images/superior6.png');
		$(this).addClass('hid');
	});

	$('.nav').mouseleave(function(){
		$('.nav1').addClass('show').removeClass('hid');
		$('.nav1').children('img').attr('src', '../images/superior1_h.png');
	})

	// 香薰链接
	$('.link').hover(function() {
		$(this).attr('src','../images/whitearrow.png');
	}, function() {
		$(this).attr('src', '../images/graylink.png');
	});

	// 视频链接
	$('.pro_intro').children('a').hover(function() {
		$(this).css('border','1px solid #bb3c44');
		$(this).children('img').attr('src','../images/graylink.png');
	}, function() {
		$(this).css('border','1px solid #ffffff');
		$(this).children('img').attr('src','../images/whitearrow.png');
	});

	// 播放视频
	$('.play').click(function(){
		$(this).siblings('video').css('display','block');
		$(this).siblings('img').css('display','none');
	})

})