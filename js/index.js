/*
* @Author: hp
* @Date:   2019-08-26 14:57:17
* @Last Modified by:   hp
* @Last Modified time: 2019-09-02 17:12:56
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
		$('.header_right_bottom').children('ul').children('li').eq(0).removeClass('hover_dec_li');
		$('.header_right_bottom').children('ul').children('li').eq(0).children('a').removeClass('hover_dec');
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
	$('.close_btn').click(function(){
		$('.search_btn_wrap').css('display','none');
	})
	$('.header_right .search').children('input').click(function(event) {
		/* Act on the event */
		$('.search_btn_wrap').css('display','block');
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

	
	// 头部导航第一个
	$('.header_right_bottom').mouseleave(function(){
		$('.header_right_bottom').children('ul').children('li').eq(0).addClass('hover_dec_li');
		$('.header_right_bottom').children('ul').children('li').eq(0).children('a').addClass('hover_dec');
	});


	// learnmore链接
	$('.learnmore1').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).attr('src','images/whitearrow.png')
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).attr('src','images/graylink.png')
	});


	// 优选好品分类
	$('.fur_wrap').hover(function() {
		$(this).addClass('red').siblings('a').removeClass('red');
		$(this).children('img').attr('src', 'images/superior1_h.png');
		$(this).addClass('show').siblings('a').removeClass('show');
		$('.daily_wrap').children('img').attr('src', 'images/superior2.png');
		$('.healthy_wrap').children('img').attr('src', 'images/superior3.png');
		$('.fashion_wrap').children('img').attr('src', 'images/superior4.png');
		$('.digital_wrap').children('img').attr('src', 'images/superior7.png');
		$('.food_wrap').children('img').attr('src', 'images/superior9.png');
		$('.IP_wrap').children('img').attr('src', 'images/superior0.png');
		$('.creative_furniture').fadeIn(1000);
		$('.creative_furniture').addClass('go').siblings('div').removeClass('go');
		$('.creative_furniture').siblings('div').css('display', 'none');
	}, function() {
		
	});

	$('.daily_wrap').hover(function() {
		$(this).addClass('red').siblings('a').removeClass('red');
		$(this).children('img').attr('src', 'images/superior2_h.png');
		$(this).addClass('show').siblings('a').removeClass('show');
		$('.fur_wrap').addClass('hid');
		$('.fur_wrap').removeClass('red');
		$('.fur_wrap').children('img').attr('src', 'images/superior1.png');
		$('.healthy_wrap').children('img').attr('src', 'images/superior3.png');
		$('.fashion_wrap').children('img').attr('src', 'images/superior4.png');
		$('.digital_wrap').children('img').attr('src', 'images/superior7.png');
		$('.food_wrap').children('img').attr('src', 'images/superior9.png');
		$('.IP_wrap').children('img').attr('src', 'images/superior0.png');
		$('.daily_use').fadeIn(1000);
		$('.daily_use').addClass('go').siblings('div').removeClass('go');
		$('.daily_use').siblings('div').css('display', 'none');
	}, function() {
		
	});

	$('.healthy_wrap').hover(function() {
		$(this).addClass('red').siblings('a').removeClass('red');
		$(this).children('img').attr('src', 'images/superior3_h.png');
		$(this).addClass('show').siblings('a').removeClass('show');
		$('.fur_wrap').addClass('hid');
		$('.fur_wrap').removeClass('red');
		$('.fur_wrap').children('img').attr('src', 'images/superior1.png');
		$('.daily_wrap').children('img').attr('src', 'images/superior2.png');
		$('.fashion_wrap').children('img').attr('src', 'images/superior4.png');
		$('.digital_wrap').children('img').attr('src', 'images/superior7.png');
		$('.food_wrap').children('img').attr('src', 'images/superior9.png');
		$('.IP_wrap').children('img').attr('src', 'images/superior0.png');
		$('.healthy_beauty').fadeIn(1000);
		$('.healthy_beauty').addClass('go').siblings('div').removeClass('go');
		$('.healthy_beauty').siblings('div').css('display', 'none');
	}, function() {
		
	});

	$('.fashion_wrap').hover(function() {
		$(this).addClass('red').siblings('a').removeClass('red');
		$(this).children('img').attr('src', 'images/superior4_h.png');
		$(this).addClass('show').siblings('a').removeClass('show');
		$('.fur_wrap').addClass('hid');
		$('.fur_wrap').removeClass('red');
		$('.fur_wrap').children('img').attr('src', 'images/superior1.png');
		$('.daily_wrap').children('img').attr('src', 'images/superior2.png');
		$('.healthy_wrap').children('img').attr('src', 'images/superior3.png');
		$('.digital_wrap').children('img').attr('src', 'images/superior7.png');
		$('.food_wrap').children('img').attr('src', 'images/superior9.png');
		$('.IP_wrap').children('img').attr('src', 'images/superior0.png');
		$('.fashion_design').fadeIn(1000);
		$('.fashion_design').addClass('go').siblings('div').removeClass('go');
		$('.fashion_design').siblings('div').css('display', 'none');
	}, function() {
		
	});

	$('.digital_wrap').hover(function() {
		$(this).addClass('red').siblings('a').removeClass('red');
		$(this).children('img').attr('src', 'images/superior7_h.png');
		$(this).addClass('show').siblings('a').removeClass('show');
		$('.fur_wrap').addClass('hid');
		$('.fur_wrap').removeClass('red');
		$('.fur_wrap').children('img').attr('src', 'images/superior1.png');
		$('.daily_wrap').children('img').attr('src', 'images/superior2.png');
		$('.healthy_wrap').children('img').attr('src', 'images/superior3.png');
		$('.fashion_wrap').children('img').attr('src', 'images/superior4.png');
		$('.food_wrap').children('img').attr('src', 'images/superior9.png');
		$('.IP_wrap').children('img').attr('src', 'images/superior0.png');
		$('.digital_parts').fadeIn(1000);
		$('.digital_parts').addClass('go').siblings('div').removeClass('go');
		$('.digital_parts').siblings('div').css('display', 'none');
	}, function() {
		
	});

	$('.food_wrap').hover(function() {
		$(this).addClass('red').siblings('a').removeClass('red');
		$(this).children('img').attr('src', 'images/superior9_h.png');
		$(this).addClass('show').siblings('a').removeClass('show');
		$('.fur_wrap').addClass('hid');
		$('.fur_wrap').removeClass('red');
		$('.fur_wrap').children('img').attr('src', 'images/superior1.png');
		$('.daily_wrap').children('img').attr('src', 'images/superior2.png');
		$('.healthy_wrap').children('img').attr('src', 'images/superior3.png');
		$('.fashion_wrap').children('img').attr('src', 'images/superior4.png');
		$('.digital_wrap').children('img').attr('src', 'images/superior7.png');
		$('.IP_wrap').children('img').attr('src', 'images/superior0.png');
		$('.food').fadeIn(1000);
		$('.food').addClass('go').siblings('div').removeClass('go');
		$('.food').siblings('div').css('display', 'none');
	}, function() {

	});

	$('.IP_wrap').hover(function() {
		$(this).addClass('red').siblings('a').removeClass('red');
		$(this).children('img').attr('src', 'images/superior0_h.png');
		$(this).addClass('show').siblings('a').removeClass('show');
		$('.fur_wrap').addClass('hid');
		$('.fur_wrap').removeClass('red');
		$('.fur_wrap').children('img').attr('src', 'images/superior1.png');
		$('.daily_wrap').children('img').attr('src', 'images/superior2.png');
		$('.healthy_wrap').children('img').attr('src', 'images/superior3.png');
		$('.fashion_wrap').children('img').attr('src', 'images/superior4.png');
		$('.digital_wrap').children('img').attr('src', 'images/superior7.png');
		$('.food_wrap').children('img').attr('src', 'images/superior9.png');
		$('.IP').fadeIn(1000);
		$('.IP').addClass('go').siblings('div').removeClass('go');
		$('.IP').siblings('div').css('display', 'none');
	}, function() {

	});



	// 产品列表标题
	$('.creative_furniture').children('div').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).children('dl').children('a').children('dt').css('color','#d9232e');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).children('dl').children('a').children('dt').css('color','');
	});

	// 新闻中心
	$('.content').children('div').children('div').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).children('div').children('.caption').children('h3').css('color', '#d9232e');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).children('div').children('.caption').children('h3').css('color', '');
	});

	$('.link').children('a').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).children('img').attr('src','images/whitearrow.png')
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).children('img').attr('src','images/graylink.png')
	});

	
})
