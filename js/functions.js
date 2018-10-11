jQuery(function($) {

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});
	
	
	//Initiat WOW JS
	new WOW().init();
	
	// Toggle scrollup button
	$(window).scroll(function(){
		$(this).scrollTop() > 100 ? $('.scrollup').fadeIn() : $('.scrollup').fadeOut();
	});
	
	// Animate scroll up
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});
	
	// Toggle display and hiding services
	$('.expand').click(function() {
			$(this).next('.toggle-view').slideToggle("slow");
	});
	
	// portfolio filter
	$(window).load(function(){'use strict';
		const $portfolio_selectors = $('.portfolio-filter >li>a');
		const $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			const selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});


	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
});
