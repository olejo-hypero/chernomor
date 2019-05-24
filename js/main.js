$(document).ready(function(){
    $('.slider-wrap').slick({
          autoplay: false,
          autoplaySpeed: 2000,
          arrows: true,
          slidesToShow: 1,
    });
    $('.products-slider').slick({
          autoplay: false,
          autoplaySpeed: 2000,
          arrows: true,
          slidesToShow: 4,
    });
    $('.reviews-slider').slick({
          autoplay: false,
          autoplaySpeed: 2000,
          arrows: true,
          slidesToShow: 4,
    });
    $(window).scroll(function(){
    	if ($(this).scrollTop() > 700) {
			$('.go').fadeIn();
	    } else {
    		$('.go').fadeOut();
    	}
    });

    $('.go').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 1800);
      return false;
      });

    $('.account-link').click(function(){
      $('.account-toggle').slideToggle();
      $(this).toggleClass('account-active')
    });

    $(document).on('click', function(e) {
      if (!$(e.target).closest(".top-header-wrap").length) {
        $('.account-toggle').hide();
        $('.account-link').removeClass('account-active')
      }
      if (!$(e.target).closest(".phones").length) {
        $('.number-toggle').hide();
      }
      e.stopPropagation();
    });

    $('.number').click(function(){
      $('.number-toggle').slideToggle();
    });

});