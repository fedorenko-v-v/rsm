$(document).ready(function() {

	$('.sliderTips').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
				}
			}
			]
	});

	$('.phoneIconMobile').on('click', function(event) {
		$('.contactsHM').toggleClass('open');
	});

	$('.closeMobPhones').on('click', function(event) {
		$('.contactsHM').removeClass('open');
	});

	$('.listTabs').on('click', 'li',function(event) {
		$('.listTabs li').removeClass('active');
		$(this).addClass('active');
		var indTab = $(this).index();
		$('.contactsTabContainer .contactsTabBlock').removeClass('active');
		$('.contactsTabContainer .contactsTabBlock').eq(indTab).addClass('active');
	});

});
