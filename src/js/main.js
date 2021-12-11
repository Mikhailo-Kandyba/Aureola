
$(".btn-menu").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".menu-navigation-wrap").toggleClass('show-menu');
    $("body").toggleClass('overflow-hidden');
});

$('.menu-navigation-wrap a').click(function(){
    $('.btn-menu').removeClass("active");
    $(".menu-navigation-wrap").removeClass('show-menu');
    $("body").removeClass('overflow-hidden');
});

$('.slider').slick({
    // autoplay: true,
    // autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
});


