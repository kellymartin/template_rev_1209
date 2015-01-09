// JavaScript Document

var fixed_menu = true;


// Doc Load Functions
$(document).load(function() {
	
	// you could also declare a loader here that fades out when all other assets are ready.
	
		var wintop = $(window).scrollTop();
		var docheight = $(document).height();
		var docbottom = docheight - 50;
		var sectionTop = wintop + 30;
		
		
		// ensure placemarker always on correct chapter on page refresh
		var divFirst = $('#section-1').position().top;
		var divSecond = $('#section-2').position().top;
		var divThird = $('#section-3').position().top;
		var divFourth = $('#section-4').position().top;
		var divFifth = $('#section-5').position().top;
		var divSixth = $('#section-6').position().top;
		var divSeventh = $('#section-7').position().top;
		var divEight = $('#section-8').position().top;
		var divNinth = $('#section-9').position().top;
		var divTenth = $('#section-10').position().top;
		var divEleventh = $('#section-11').position().top;
		var divTwelve = $('#section-12').position().top;
		var divThirteen = $('#section-13').position().top;
		var divFourteen = $('#section-14').position().top;
		var divFifteen = $('#section-15').position().top;
		var divSixteen = $('#section-16').position().top;
		var divSeventeen = $('#section-17').position().top;
		
		
		if(divFirst < sectionTop && divThird > sectionTop) {
			$('header ul li').removeClass('currentCh');
			$('header ul li.one').addClass('currentCh');
		}
		else if(divSecond < sectionTop && divThird > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.two').addClass('currentCh');
		}
		// try $(this).find().next(section) to create shorter function
		else if(divThird < sectionTop && divFourth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.three').addClass('currentCh');
		}
		else if(divFourth < sectionTop && divFifth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.four').addClass('currentCh');
		}
		else if(divFifth < sectionTop && divSixth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.five').addClass('currentCh');
		}
		else if(divSixth < sectionTop && divSeventh > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.six').addClass('currentCh');
		}
		else if(divSeventh < sectionTop && divEight > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.seven').addClass('currentCh');
		}
		else if(divEight < sectionTop && divNinth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.eight').addClass('currentCh');
		}
		else if(divNinth < sectionTop && divTenth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.nine').addClass('currentCh');
		}
		else if(divTenth < sectionTop && divEleventh > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.ten').addClass('currentCh');
		}
		else if(divEleventh < sectionTop && divTwelve > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.eleven').addClass('currentCh');
		}
		else if(divTwelve < sectionTop && divThirteen > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.twelve').addClass('currentCh');
		}
		else if(divThirteen < sectionTop && divFourteen > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.thirteen').addClass('currentCh');
		}
		else if(divFourteen < sectionTop && divFifteen > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.fourteen').addClass('currentCh');
		}
		else if(divFifteen < sectionTop && divSixteen > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.fifteen').addClass('currentCh');
		}
		else if(divSixteen < sectionTop && divSeventeen > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.sixteen').addClass('currentCh');
		}
		else if(divSeventeen < sectionTop && docBottom > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.seventeen').addClass('currentCh');
		}
		

}); // END DOC LOAD FUNCTIONS


$(document).ready(function() {
	
// universal variables
var winHeight = $(window).height();
var winWidth = $(window).width();
//$('.intro').height(winHeight);

/*if ($(window).width() > 1030) {
	$('#section-image-1').height(winHeight * 2);
}
else {
	$('#section-image-1').height(winHeight * 1.25);
}*/



$('#about-page').css({'height':'auto'});

	if($(window).width() < 800){
		$('.intro').height(winHeight * 1.25);
	}
	else if(winHeight < 800 && winHeight > 650) { //adjusted from > 679
		$('.intro').height(winHeight * 1.25);
	}
	else {
		//$('.intro').css({'height':'auto'});
		$('.intro').height(winHeight);
	}
	
	if($(window).width() < 1031) {
		$('.car-elevator').css({'height':'auto'});
	}
	else {
		$('.car-elevator').height(winHeight * 3);
	}
	
	
	if($(window).width() < 550){
		$('li#mag-menu > a').html('<i class="fa fa-bars"></i>');
	}
	
	$(window).resize(function() {
		if($(window).width() < 800){
			$('.intro').height(winHeight * 1.55);
		}
		else if($(window).width() > 800){
			$('.intro').height(winHeight * 1.55);
		}
		
	if($(window).width() < 550){
		$('li#mag-menu > a').html('<i class="fa fa-bars"></i>');
	}
	else if($(window).width() > 550){
		$('li#mag-menu > a').html('');
	}
	
});


$('a.media').media({width:'100%', height:455});

$('a#view-list').click(function() {
		
		$('#section-image-1').goTo();
	});
	
		// in-story image slider ADDED KM 01-05-14
	$(".jCarouselLite").jCarouselLite({
    	btnNext: ".next",
    	btnPrev: ".prev"
	});
	var slideWidth = $('.story-slider li').width();
	$('.story-slider li').height(slideWidth * 0.6);
	
// Chapter Markers Move On Scroll
	$(window).scroll(function() {
		var wintop = $(window).scrollTop();
		var docheight = $(document).height();
		var docbottom = docheight - 50;
		var sectionTop = wintop + 30;
		var divFirst = $('#section-1').position().top;
		var divSecond = $('#section-2').position().top;
		var divThird = $('#section-3').position().top;
		var divFourth = $('#section-4').position().top;
		var divFifth = $('#section-5').position().top;
		var divSixth = $('#section-6').position().top;
		var divSeventh = $('#section-7').position().top;
		var divEight = $('#section-8').position().top;
		var divNinth = $('#section-9').position().top;
		var divTenth = $('#section-10').position().top;
		var divEleventh = $('#section-11').position().top;
		var divTwelve = $('#section-12').position().top;
		var divThirteen = $('#section-13').position().top;
		var divFourteen = $('#section-14').position().top;
		var divFifteen = $('#section-15').position().top;
		var divSixteen = $('#section-16').position().top;
		var divSeventeen = $('#section-17').position().top;
		

		if(divFirst < sectionTop && divThird > sectionTop) {
			$('header ul li').removeClass('currentCh');
			$('header ul li.one').addClass('currentCh');
		}
		else if(divSecond < sectionTop && divThird > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.two').addClass('currentCh');
		}
		else if(divThird < sectionTop && divFourth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.three').addClass('currentCh');
		}
		else if(divFourth < sectionTop && divFifth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.four').addClass('currentCh');
		}
		else if(divFifth < sectionTop && divSixth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.five').addClass('currentCh');
		}
		else if(divSixth < sectionTop && divSeventh > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.six').addClass('currentCh');
		}
		else if(divSeventh < sectionTop && divEight > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.seven').addClass('currentCh');
		}
		else if(divEight < sectionTop && divNinth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.eight').addClass('currentCh');
		}
		else if(divNinth < sectionTop && divTenth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.nine').addClass('currentCh');
		}
		else if(divTenth < sectionTop && divEleventh > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.ten').addClass('currentCh');
		}
		else if(divEleventh < sectionTop && divTwelve > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.eleven').addClass('currentCh');
		}
		else if(divTwelve < sectionTop && divThirteen > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.twelve').addClass('currentCh');
		}
		else if(divThirteen < sectionTop && divFourteen > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.thirteen').addClass('currentCh');
		}
		else if(divFourteen < sectionTop && divFifteen > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.fourteen').addClass('currentCh');
		}
		else if(divFifteen < sectionTop && divSixteen > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.fifteen').addClass('currentCh');
		}
		else if(divSixteen < sectionTop && divSeventeen > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.sixteen').addClass('currentCh');
		}
		else if(divSeventeen < sectionTop && docBottom > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.seventeen').addClass('currentCh');
		}
		
	});
	
	//Fixed Menu
	if ($('.fixed-menu').size() && fixed_menu == true) {
		
		$('.fixed-menu').append('<div class="fixed-menu-wrapper container">'+jQuery('div#courtesy-inner').html()+'</div>');
		$('.fixed-menu').prepend('<a href="http://www.investigativereportingworkshop.org"><img src="../images/IRWlogo_FPO_abbr.png" /></a>');
		$('.fixed-menu').find('ul').children('li').each(function(){
			$(this).children('a').append('<div class="menu_fadder"/>');
		});
		var fixd_menu = setInterval(scrolled_menu, 100);
		
		// changing chapters on click
		$('.sub_menu li').click(function() {
		//alert('i work');
			$('.sub_menu li').removeClass('currentCh');
			$(this).addClass('currentCh');	
				var thisTop = $('#section-'+ $(this).data('target'));
				var thisScrollTop = thisTop.position().top;
			$(thisTop).goTo(); 
		});
	} // end if fixed-menu
	
	// Popup Image Function
	$('img.popper').click(function() {
		var imgSrc = $(this).attr('src');
	
		if($(window).width() > 1031) {
			var popHeight = winHeight * 0.75;
			$('#popper').height(popHeight);
		}
		else {
			var popWidth = winWidth * 0.64;
			$('#popper').width(popWidth);
		}
		$('#popper').css({'display':'inline-block'});
		$('#popper-2').css({'display':'none'});
		$('#popper').html('<img src=' + imgSrc + ' />');
		$('#popper-bg').fadeIn(300);
	});
	
	$('#popper-bg').click(function(e) {
		if(e.target == this){ 
			$(this).fadeOut(400);
			$(this).children('li').removeClass('current');
		}
	});
	
	$('img.popper-2').click(function() {
		var imgSrc = $(this).attr('src');
		var imgCapt = $(this).attr('alt');
		$(this).parent('li').addClass('current');
		
		if($(window).width() > 1031) {
			var popHeight = winHeight * 0.75;
			$('#popper-2').height(popHeight);
		}
		else {
			var popWidth = winWidth * 0.64;
			$('#popper-2').width(popWidth);
		}
		
		$('#popper-inner').height(popHeight);
		$('#popper-2').css({'display':'inline-block'});
		$('#popper').css({'display':'none'});
												
		$('#popper-inner').html('<img src=' + imgSrc + ' />');
		$('#popper-caption').html('<p>' + imgCapt + '</p>');
		
		$('#popper-bg').fadeIn(300);
		
		var captionWidth = $('#popper-inner').width();
		$('#popper-caption').width(captionWidth);
	});
	
	// PREV IMG
	$('.prev-img').click(function() {
		$('#popper-inner img').fadeOut(200, function() {
			if ($('li.current').hasClass('first')) {
				var previous = $('li.current').parent('ul').children('li.last');
			}
			else {
				var previous = $("li.current").prev();
			}
			var newImg = previous.children('img');
			var newSrc = newImg.attr('src');
			var newCapt = newImg.attr('alt');
				
			$('#popper-inner').html('<img src=' + newSrc + ' />');
			$('#popper-caption').html('<p>' + newCapt + '</p>');
			$('li.current').removeClass('current');
			previous.addClass('current');
			
			var captionWidth = $('#popper-inner img').width();
			$('#popper-caption').width(captionWidth);
			
			$('#popper-inner img').fadeIn(200);
		});
		
		return false;
	}); 
	
	$('.next-img').click(function() {
		$('#popper-inner img').fadeOut(200, function() {
			if ($('li.current').hasClass('last')) {
				var next = $('li.current').parent('ul').children('li.first');
			}
			else {
				var next = $("li.current").next();
			}
			var newImg = next.children('img');
			var newSrc = newImg.attr('src');
			var newCapt = newImg.attr('alt');
		
			$('#popper-inner').html('<img src=' + newSrc + ' />');
			$('#popper-caption').html('<p>' + newCapt + '</p>');
			$('li.current').removeClass('current');
			next.addClass('current');
			
			var captionWidth = $('#popper-inner img').width();
			$('#popper-caption').width(captionWidth);
			
			$('#popper-inner img').fadeIn(200);
		});
		
		return false;
	});
	
	<!--adjust mail to: tool here-->
	$('#mail-tool').click(function() {
		window.location.href = "mailto:%20?subject=New%20Story%20from%20Investigative%20Reporting%20Workshop&body=http://www.investigativereportingworkshop.org";
		
		return false;
	});
	
}); // end doc ready functions

function scrolled_menu() {
	if ($(window).scrollTop() > jQuery('#section-1').position().top) {
		$('.fixed-menu').addClass('fixed_show');
	} else {
		$('.fixed-menu').removeClass('fixed_show');
	}
};

$.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this; // for chaining...
    }
