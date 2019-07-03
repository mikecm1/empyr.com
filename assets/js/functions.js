$( document ).ready(function() {

        $('[data-id=headers-4-sidebar-toggle]').click(function (e) {
            e.preventDefault();
            $('#headers-4-sidebar').toggleClass('show');
        });
        $('[data-id=headers-4-sidebar-close]').click(function (e) {
            e.preventDefault();
            $('#headers-4-sidebar').removeClass('show');
        });


    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
        effect: 'crossfade',
        spaceBetween: 0,
        slidesOffsetAfter: 100,
        centeredSlides: true,
        slideToClickedSlide: true,
        loopedSlides: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 0,
        // Responsive breakpoints
        breakpoints: {
          // when window width is <= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 2,
          },
        }
    });

});
