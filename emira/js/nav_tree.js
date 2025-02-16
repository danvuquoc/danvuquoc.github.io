jQuery(document).ready(function($){

	//open (or close) submenu items in the  menu. Close all the other open submenu items.
	$('.item-has-submenu').children('h3').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-submenu').siblings('.item-has-submenu').children('h3').removeClass('submenu-open').next('.sub-menu').slideUp(200);
	});
	
	//open (or close) submenu items in the  menu. Close all the other open submenu items.
	$('.item-has-submenu').children('h4').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-submenu').siblings('.item-has-submenu').children('h4').removeClass('submenu-open').next('.sub-menu').slideUp(200);
	});
});