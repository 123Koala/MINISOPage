/*
* @Author: hp
* @Date:   2019-08-30 10:34:30
* @Last Modified by:   wqh
* @Last Modified time: 2019-09-19 22:54:04
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
		$('.header_right_bottom').children('ul').children('li').eq(1).removeClass('hover_dec_li');
		$('.header_right_bottom').children('ul').children('li').eq(1).children('a').removeClass('hover_dec');
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
	})
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

	
	// 头部导航第二个
	$('.header_right_bottom').mouseleave(function(){
		$('.header_right_bottom').children('ul').children('li').eq(1).addClass('hover_dec_li');
		$('.header_right_bottom').children('ul').children('li').eq(1).children('a').addClass('hover_dec');
	});

	// 品牌介绍
	$('.learn_btn').hover(function() {
		$(this).children('img').attr('src', '../images/whitearrow.png');
	}, function() {
		$(this).children('img').attr('src', '../images/graylink.png');
	});

	// 创始人链接
	$('.founder_intro').children('a').hover(function() {
		$(this).children('img').attr('src', '../images/graylink.png');
	}, function() {
		$(this).children('img').attr('src', '../images/whitearrow.png');
	});

	// 发展历程
	$('.learnmore').hover(function() {
		$(this).children('img').attr('src', '../images/whitearrow.png');
	}, function() {
		$(this).children('img').attr('src', '../images/graylink.png');
	});

	$('.y_19').mouseenter(function(){
		$(this).addClass('aa').parent('li').siblings('li').children('a').removeClass('aa');
		var txt = $(this).text();
		$('.year').text(txt);
		$('.y2019').css('display','block').siblings('div').css('display','none');
	})
	$('.y_18').mouseenter(function(){
		$(this).addClass('aa').parent('li').siblings('li').children('a').removeClass('aa');
		var txt = $(this).text();
		$('.year').text(txt);
		$('.y2018').css('display','block').siblings('div').css('display','none');
	})
	$('.y_17').mouseenter(function(){
		$(this).addClass('aa').parent('li').siblings('li').children('a').removeClass('aa');
		var txt = $(this).text();
		$('.year').text(txt);
		$('.y2017').css('display','block').siblings('div').css('display','none');
	})
	$('.y_16').mouseenter(function(){
		$(this).addClass('aa').parent('li').siblings('li').children('a').removeClass('aa');
		var txt = $(this).text();
		$('.year').text(txt);
		$('.y2016').css('display','block').siblings('div').css('display','none');
	})
	$('.y_15').mouseenter(function(){
		$(this).addClass('aa').parent('li').siblings('li').children('a').removeClass('aa');
		var txt = $(this).text();
		$('.year').text(txt);
		$('.y2015').css('display','block').siblings('div').css('display','none');
	})
	$('.y_14').mouseenter(function(){
		$(this).addClass('aa').parent('li').siblings('li').children('a').removeClass('aa');
		var txt = $(this).text();
		$('.year').text(txt);
		$('.y2014').css('display','block').siblings('div').css('display','none');
	})
	$('.y_13').mouseenter(function(){
		$(this).addClass('aa').parent('li').siblings('li').children('a').removeClass('aa');
		var txt = $(this).text();
		$('.year').text(txt);
		$('.y2013').css('display','block').siblings('div').css('display','none');
	})

	// 设计师团队
	$('.pre_btn').hover(function() {
		$(this).css('background-image','url("../images/prev_h.png")');
	}, function() {
		$(this).css('background-image','url("../images/prev.png")');
	});
	$('.nex_btn').hover(function() {
		$(this).css('background-image','url("../images/next_h.png")');
	}, function() {
		$(this).css('background-image','url("../images/next.png")');
	});

	$('.pre_btn').click(function(){
		clearInterval(timer);
		n++;
		if(n>2){
			n = 0;
			$('.teambox').css('margin-left',-100*n+'%');
			n = 1;
		}
		$('.teambox').animate({'margin-left':-100*n+'%'}, 500);
	})
	$('.nex_btn').click(function(){
		clearInterval(timer);
		n--;
		if(n<0){
			n = 2;
			$('.teambox').css('margin-left',-100*n+'%');
			n = 1;
		}
		$('.teambox').animate({'margin-left':-100*n+'%'}, 500);
	})
	$('.pre_btn').mouseleave(function(){
		a();
	})
	$('.nex_btn').mouseleave(function(){
		a();
	})

	var timer;
	var n = 0;
	function a(){
		clearInterval(timer);
		timer=setInterval(function(){
		n++;
		if(n>2){
			n = 0;
			$('.teambox').css('margin-left',-100*n+'%');
			n = 1;
		}
		$('.teambox').animate({'margin-left':-100*n+'%'}, 500);
		},5000)
	}
	a();

	$('.team1').children('div').hover(function() {
		$(this).children('.txt_back').css('background-color', '#d9232e');
		$(this).children('.txt_back').children('div').css('color', '#ffffff');
	}, function() {
		$(this).children('.txt_back').css('background-color', '');
		$(this).children('.txt_back').children('div').css('color', '');
	});

	$('.team2').children('div').hover(function() {
		$(this).children('.txt_back').css('background-color', '#d9232e');
		$(this).children('.txt_back').children('div').css('color', '#ffffff');
	}, function() {
		$(this).children('.txt_back').css('background-color', '');
		$(this).children('.txt_back').children('div').css('color', '');
	});

})