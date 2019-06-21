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
        fadeEffect: {
            crossFade: true
          },
        loop: true,
        effect: 'crossfade',
        slidesPerView: 3,
        spaceBetween: 0,
        slidesOffsetAfter: 100,
        centeredSlides: true,
        slideToClickedSlide: true,
        loopedSlides: 0,
        crossFade: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // on: {
        //     init: function () {
        //         $('.swiper-slide-active').prev('.swiper-slide').addClass('sw-before');
        //     },
        //   }
    });


        // $('.swiper-slide-prev').prev('.swiper-slide').addClass('sw-before');


      // select the target node
var target = document.querySelector('.cc-form-content-container');

// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log('mutation: '+mutation.type);
  });
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);



});
