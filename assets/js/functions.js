$( document ).ready(function() {

    $(function () {
        $('[data-id=headers-4-sidebar-toggle]').click(function (e) {
            e.preventDefault();
            $('#headers-4-sidebar').toggleClass('show');
        });
        $('[data-id=headers-4-sidebar-close]').click(function (e) {
            e.preventDefault();
            $('#headers-4-sidebar').removeClass('show');
        });
    });

    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 3,
        spaceBetween: 0,
        loopedSlides: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

});
