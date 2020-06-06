$(document).ready(function() {
	var banner = $('.main-banner');
	banner.owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			items: 1,
			nav: true,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			autoplay: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeInLeft',
			smartSpeed: 200
	});
	var _video = $('.main_videos');
	_video.owlCarousel({
			loop: true,
			nav: true,
			navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
			items: 1,
			autoplay: true,
			smartSpeed: 200,
			responsiveClass:true,
				responsive:{
						0:{
								items:1
						},
						768:{
								items:1
						},
						1200:{
								items:1
						}
				}
	});
	$(window).scroll(function() {
		if($(window).scrollTop() == $(document).height() - $(window).height()) {
			$('.loading').hide();
			loadData();
		}
	});
	function loadData() {
		var html = '';
		for (i = 0; i < 1; i++) {
			html += "<div class='_item_'> <div class='img'><img src='img/2day/img1.jpg' alt=''></div> <div class='text'> <h4> <a href='#'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h4> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ......</p><span>Bởi <strong>Amin  </strong>-  <span class='date'>1 giờ trước</span></span> </div> </div>";
		}
		$('.loadnews').append(html);
	}
	 $('.lazy').lazy();
	 $('.main-trending').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		dots: true,
		autoplay: true,
		smartSpeed: 200,
		responsiveClass:true,
			responsive:{
					0:{
							items:1
					},
					768:{
							items:1
					},
					1200:{
							items:1
					}
			}
});
$('.main-trending .owl-dot').each(function(){
	$(this).text($(this).index()+1);
	});
	$('.main-video').owlCarousel({
		loop: true,
		nav: false,
		items: 4,
		dots: true,
		autoplay: true,
		smartSpeed: 200,
		margin: 30,
		nav: true,
		navText: ['<i class="arrow-left"><img src="img/2day/svg/left.svg" alt=""></i>', '<i class="arrow-right"><img src="img/2day/svg/right.svg" alt=""></i>'],
			
});
$('.lg-right .search').click(function(e){
	$('.form-search').show();
})
$('.search-close').click(function(e){
	$('.form-search').hide();
})
})