$(document).ready(function () {
    $('[data-id=nav-sidebar-toggle]').click(function (e) {
        e.preventDefault();
        $('#nav-sidebar').toggleClass('show');
    });
    $('[data-id=nav-sidebar-close]').click(function (e) {
        e.preventDefault();
        $('#nav-sidebar').removeClass('show');
    });
    $('.navbar-side a.nested').click(function (e) {
        e.preventDefault();
    });
    var transEffect = Barba.BaseTransition.extend({
        start: function () {
            this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
        },
        fadeInNewcontent: function (nc) {
            nc.hide();
            var _this = this;
            $(this.oldContainer).fadeOut(300).promise().done(() => {
                nc.css('visibility', 'visible');
                document.body.scrollTop = 0;
                nc.fadeIn(300, function () {
                    _this.done();
                })
            });
        }
    });
    Barba.Pjax.getTransition = function () {
        return transEffect;
    }
    Barba.Pjax.start();
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!is_safari) Barba.Prefetch.init();

    Barba.Dispatcher.on('transitionCompleted', function (currentStatus, oldStatus, container) {
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
            slidesPerView: 2,
            spaceBetween: 0,
        });
        AOS.refresh();
    });
    Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container, newPageRawHTML) {
        var $newPageHead = $('<head />').html(
            $.parseHTML(
                newPageRawHTML.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0], document, true
            )
        );
        var headTags = [
            "meta[name='keywords']", "meta[name='description']", "meta[property^='og']", "meta[name^='twitter']", "meta[itemprop]", "link[itemprop]", "link[rel='prev']", "link[rel='next']", "link[rel='canonical']"
        ].join(',');
        $('head').find(headTags).remove();
        $newPageHead.find(headTags).appendTo('head');
    });
    Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
        var js = container.querySelector("[data-inject]");
        if (js != null) {
            eval(js.innerHTML);
        }
    });
    Barba.Dispatcher.on('newPageReady', function (currentStatus) {
        const link = currentStatus.url.split(window.location.origin)[1].substring(1);
        const navigation = document.querySelector('.navbar-nav');
        const navigationLinks = navigation.querySelectorAll('.nav-link');
        const navigationLinkIsActive = navigation.querySelector(("a[href='" + link + "']"));
        Array.prototype.forEach.call(navigationLinks, (navigationLink) => navigationLink.classList.remove('active'));
        // navigationLinkIsActive.classList.add('active');

    });
    Barba.Dispatcher.on('initStateChange', function () {
        if (Barba.HistoryManager.history.length <= 1) {
            return;
        }
        if (typeof gtag === 'function') {
            gtag('config', 'UA-77237997-1', {
                'page_path': location.pathname,
                'use_amp_client_id': true
            });
        } else {
            if (typeof ga === 'function') {
                var trackers = ga.getAll();
                trackers.forEach(function (tracker) {
                    ga(tracker.get('name') + '.send', 'pageview', location.pathname, {
                        'useAmpClientId': true
                    });
                });
            }
        }
    });
    Barba.Pjax.originalPreventCheck = Barba.Pjax.preventCheck;
    Barba.Pjax.preventCheck = function (evt, element) {
        if (!Barba.Pjax.originalPreventCheck(evt, element)) {
            return false;
        }
        if (/.pdf/.test(element.href.toLowerCase())) {
            return false;
        }
        var ignoreClasses = [
            '.pdf', '.jpg', '.jpeg', '.png', '.gif', '.mp4', '.avi',
            '.mp3', '.csv', '.txt', '.flv', '.wmv', '.tar', '.zip', '.gzip', '.3gp'
        ];
        for (var i = 0; i < ignoreClasses.length; i++) {
            if (element.classList.contains(ignoreClasses[i])) {
                return false;
            }
        }
        return true;
    };
    // document.documentElement.className = 'js';
    AOS.init({
        once: !0,
        duration: 400,
        disable: 'mobile',
        anchorPlacement: 'top'
    });
    if (Modernizr.touch) {} else {
        var rellax = new Rellax('.rellax', {
            wrapper: null,
        });
    }

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
        disableOnInteraction: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 2,
        spaceBetween: 0,
    });
    $(".navbar a").on('click', function () {
        history.pushState({
            scrollTop: document.body.scrollTop
        }, document.title, document.location.pathname);
    });
});
