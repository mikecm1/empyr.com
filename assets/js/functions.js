$( document ).ready(function() {
    //     var Scrollbar = window.Scrollbar;
    // $('body').addClass('smooth');
    //     const options = {
    //         damping: 0.1,
    //         thumbMinSize: 20,
    //         renderByPixels: true,
    //         alwaysShowTracks: false,
    //         continuousScrolling: true,
    //         wheelEventTarget: null
    //     };
    //     Scrollbar.init(document.querySelector("html:not(.no-js) body.smooth #main-scrollbar"), options);

        $('[data-id=headers-4-sidebar-toggle]').click(function (e) {
            e.preventDefault();
            $('#headers-4-sidebar').toggleClass('show');
        });
        $('[data-id=headers-4-sidebar-close]').click(function (e) {
            e.preventDefault();
            $('#headers-4-sidebar').removeClass('show');
        });

        var transEffect = Barba.BaseTransition.extend({
            start: function(){
              this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
            },
            fadeInNewcontent: function(nc) {
              nc.hide();
              var _this = this;
              $(this.oldContainer).fadeOut(300).promise().done(() => {
                nc.css('visibility','visible');
                nc.fadeIn(300, function(){
                  _this.done();
                })
              });
            }
        });
        Barba.Pjax.getTransition = function() {
          return transEffect;
        }
        Barba.Pjax.start();
        // Barba.Pjax.getTransition = function () {
        //     return transEffect;
        //     AOS.refresh();
        // }
        // Barba.Pjax.start();
        // Barba.Prefetch.init();
        // Barba.Dispatcher.on('transitionCompleted', function (currentStatus, prevStatus) {
        //     if (prevStatus) {
        //         setTimeout(function () {
        //             $('html').find('script').each(function (i, script) {
        //                 var $script = $(script);
        //                 $.ajax({
        //                     url: $script.attr('src'),
        //                     cache: true,
        //                     dataType: 'script',
        //                     success: function () {
        //                         $script.trigger('load');
        //                     }
        //                 });
        //             });
        //         }, 1);
        //     }
        // });
        // Barba.Dispatcher.on('newPageReady', function (current, prev, container) {
        //     history.scrollRestoration = 'manual';
        // });
        // Barba.Dispatcher.on('newPageReady', function (currentStatus) {
        //     const link = currentStatus.url.split(window.location.origin)[1].substring(1);
        //     const navigation = document.querySelector('.navbar-nav');
        //     const navigationLinks = navigation.querySelectorAll('.nav-link');
        //     const navigationLinkIsActive = navigation.querySelector(`[href="${link}"]`);
        //     Array.prototype.forEach.call(navigationLinks, (navigationLink) => navigationLink.classList.remove('active'));
        //     navigationLinkIsActive.classList.add('active');
        // });

        document.documentElement.className = 'js';
        AOS.init({
            once: !0,
            duration: 400,
            disable: 'mobile',
            anchorPlacement: 'top'
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
