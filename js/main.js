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
	var work = $('.main-partner');
	work.owlCarousel({
			loop: true,
			nav: true,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			items: 7,
			autoplay: true,
			smartSpeed: 200,
			responsiveClass:true,
				responsive:{
						0:{
								items:1
						},
						768:{
								items:2
						},
						1200:{
								items:7
						}
				}
	});
	var col3 = $('.main-banner-col3');
	col3.owlCarousel({
			items: 3,
			loop: true,
			autoWidth:true,
			responsiveClass:true,
				responsive:{
						0:{
								items:1
						},
						768:{
								items:2
						},
						1200:{
								items:3
						}
				}
	});
	var col2 = $('.main-banner-col2');
	col2.owlCarousel({
			items: 2,
			loop: true,
			autoWidth:true,
			responsiveClass:true,
				responsive:{
						0:{
								items:1
						},
						768:{
								items:2
						},
						1200:{
								items:2
						}
				}
	});
	var navs = $('.main-navs');
	navs.owlCarousel({
			items: 4,
			loop: true,
			autoWidth:true,
			responsiveClass:true,
				responsive:{
						0:{
								items:1
						},
						768:{
								items:2
						},
						1200:{
								items:4
						}
				}
	});
	var products = $('.main-products');
	products.owlCarousel({
			loop: true,
			nav: true,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			items: 4,
			autoplay: true,
			smartSpeed: 200,
			responsiveClass:true,
				responsive:{
						0:{
								items:2
						},
						768:{
								items:2
						},
						1200:{
								items:4
						}
				}
	});
	var news = $('.main-news');
	news.owlCarousel({
			loop: true,
			nav: true,
			navText: ['<i class="fas fa-caret-left" aria-hidden="true"></i>', '<i class="fas fa-caret-right" aria-hidden="true"></i>'],
			items: 2,
			autoplay: true,
			smartSpeed: 200,
			responsiveClass:true,
				responsive:{
						0:{
								items:1
						},
						768:{
								items:2
						},
						1200:{
								items:2
						}
				}
	});
	var news = $('.main-news2');
	news.owlCarousel({
			loop: true,
			nav: true,
			navText: ['<i class="fas fa-caret-left" aria-hidden="true"></i>', '<i class="fas fa-caret-right" aria-hidden="true"></i>'],
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
	var spa1 = $('.main-spa-1');
	spa1.owlCarousel({
			loop: true,
			nav: true,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			items: 3,
			autoplay: true,
			smartSpeed: 200,
			responsiveClass:true,
				responsive:{
						0:{
								items:1
						},
						768:{
								items:2
						},
						1200:{
								items:3
						}
				}
	});
	var spa2 = $('.main-spa-2');
	spa2.owlCarousel({
			loop: true,
			nav: true,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			items: 3,
			autoplay: true,
			smartSpeed: 200,
			responsiveClass:true,
				responsive:{
						0:{
								items:1
						},
						768:{
								items:2
						},
						1200:{
								items:3
						}
				}
	});
	var customer = $('.main-customer');
	customer.owlCarousel({
			loop: true,
			nav: true,
			navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
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
	var _video = $('.main_videos');
	_video.owlCarousel({
			loop: true,
			nav: true,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
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
	var _category_video = $('.category_video');
	_category_video.owlCarousel({
			loop: true,
			nav: true,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			items: 1,
			autoplay: true,
			smartSpeed: 200,
			responsiveClass:true,
				responsive:{
						0:{
								items:1
						},
						768:{
								items:2
						},
						1200:{
								items:4
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
		$('#loaddata').append(html);
	}
	$("a[href='#top']").click(function() {
			$("html, body").animate({
					scrollTop: 0
			}, "slow");
			return false;
	});
	 $('.lazy').lazy();
	$("a.top").click(function(e){
		$('.menu-mobile').toggleClass('active');
	});
	var brands = $('.main-brands');
	brands.owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			items: 1,
			autoplay: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeInLeft',
			smartSpeed: 200
	});
	$('.filters-left ul li > a').click(function(e){
		var _find = $(this).parent();
		_find.find('.open').toggleClass('active');
	});
	$('.open span.close').click(function(e){
		var _find = $(this).parent();
		_find.toggleClass('active');
	});
	$("#form-contact").validate({
			rules: {
					name:{
						required: true
					},
					email: {
							required: true,
							email: true
					},
					subject: {
						required: true
					},
					message:{
						required: true
					}
				}  
			});
	$(".news-style-1 .ctent").slice(0, 1).css("display","flex");
	$(".news-style-3 .ctent").slice(0, 1).css("display","flex");
	$('.news-page .loadMore').click(function(e){
		var _this = $(this).parent().parent().parent();
		_this.find(".ctent:hidden").slice(0, 1).css("display","flex");
		 $('html,body').animate({
            scrollTop: $(this).offset().top-(315)
        }, 1500);
	});
	$(".info_detailp .ctent").slice(0, 2).css("display","flex");
	$('.read-more a').click(function(e){
		var _this = $(this).parent().parent().parent().parent();
		_this.find(".ctent:hidden").slice(0, 1).css("display","flex");
		 $('html,body').animate({
            scrollTop: $(this).offset().top-(315)
        }, 1500);
	});
	gallery_slider();
	$('.brands .ct .detail_th h3:nth-child(1)').show();
	$('.brands .loadMore').click(function(e){
		$('.brands .ct .detail_th h3').show();
		 $('html,body').animate({
            scrollTop: $(this).offset().top-(315)
        }, 1500);
	});
	$('.choose_ite a').click(function(e){
		var _this = $(this).parent();
		_this.find('.choose_ite_box').toggleClass('active');
	});
});
function gallery_slider()
{
		var bigimage = $("#big");
	  var thumbs = $("#thumbs");
	  //var totalslides = 10;
	  var syncedSecondary = true;

	  bigimage
	    .owlCarousel({
	    items: 1,
	    slideSpeed: 2000,
	    nav: false,
	    autoplay: true,
	    dots: false,
	    loop: true,
	    responsiveRefreshRate: 200
	  })
	    .on("changed.owl.carousel", syncPosition);

	  thumbs
	    .on("initialized.owl.carousel", function() {
	    thumbs
	      .find(".owl-item")
	      .eq(0)
	      .addClass("current");
	  })
	    .owlCarousel({
	    items: 3,
	    dots: true,
	    nav: true,
	    navText: [
	      '<i class="fas fa-chevron-left" aria-hidden="true"></i>',
	      '<i class="fas fa-chevron-right" aria-hidden="true"></i>'
	    ],
	    smartSpeed: 200,
	    slideSpeed: 500,
	    slideBy: 3,
	    responsiveRefreshRate: 100
	  })
	    .on("changed.owl.carousel", syncPosition2);

	  function syncPosition(el) {
	    //if loop is set to false, then you have to uncomment the next line
	    //var current = el.item.index;

	    //to disable loop, comment this block
	    var count = el.item.count - 1;
	    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

	    if (current < 0) {
	      current = count;
	    }
	    if (current > count) {
	      current = 0;
	    }
	    //to this
	    thumbs
	      .find(".owl-item")
	      .removeClass("current")
	      .eq(current)
	      .addClass("current");
	    var onscreen = thumbs.find(".owl-item.active").length - 1;
	    var start = thumbs
	    .find(".owl-item.active")
	    .first()
	    .index();
	    var end = thumbs
	    .find(".owl-item.active")
	    .last()
	    .index();

	    if (current > end) {
	      thumbs.data("owl.carousel").to(current, 100, true);
	    }
	    if (current < start) {
	      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
	    }
	  }

	  function syncPosition2(el) {
	    if (syncedSecondary) {
	      var number = el.item.index;
	      bigimage.data("owl.carousel").to(number, 100, true);
	    }
	  }

	  thumbs.on("click", ".owl-item", function(e) {
	    e.preventDefault();
	    var number = $(this).index();
	    bigimage.data("owl.carousel").to(number, 300, true);
	  });
}