$(document).ready(function(){

$(function(){

    $(document).on( 'scroll', function(){

    	if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});

	$('.scroll-top-wrapper').on('click', scrollToTop);
});

function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

});



function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    // document.getElementById("flipkart-navbar").style.width = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
}

var hero = $('.header');
var logo = $('.logo');
var herobox = $('.hero-text-box');
var social = $('.social-list');
TweenMax.to(hero, 2, {opacity:1,ease:Power2.easeInOut});
TweenMax.fromTo(logo, .8, {opacity:0,x:200,ease:Back.easeOut},{opacity:1,x:0,ease:Back.easeOut,delay:2.5});
TweenMax.fromTo(herobox, 1, {opacity:0,x:-50,ease:Back.easeOut},{opacity:1,x:0,ease:Back.easeOut,delay:1.8});





    $('#hide-toggle').click(function(){
      if($(this).html() == 'Hide')
      {$(this).html('Show');}
      else{$(this).html('Hide');}
      $('.social').toggleClass('hide');
    })
