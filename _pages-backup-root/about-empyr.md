---
layout: standard-page
title: About Empyr
heading: We help companies generate revenue and delight their users with card linked offers
description: Empyr's technology makes earning rewards on in-store purchases so easy,
  sometimes it happens without you even thinking about it, kinda like breathing.  We
  used this mission to build out the Empyr API, which powers online-to-offline (O2O)
  card linked marketing programs for some of the world’s largest websites and apps.
  Direct integration with the three leading credit card associations make it possible
  for online consumers to automatically earn rewards at offline merchants by simply
  paying with linked debit or credit cards, while simultaneously generating revenue
  for online publishers and providing online to offline attribution to advertisers.
  Empyr’s growing network of publisher partners includes Yelp, Microsoft, LivingSocial,
  Coupons.com, Swagbucks and over 1,500 other websites and apps.
keywords: ''
sub_heading: Empyr's platform makes earning rewards on in-store purchases so easy, it happens without extra work, kinda like breathing. We used this mission to build out the Empyr API, which powers online-to-offline (O2O) card linked marketing programs for leading websites and apps. Direct integration with the three leading credit card associations allow consumers to automatically earn rewards at offline merchants by simply paying with linked debit or credit cards, while generating revenue and unlocking offline attribution for advertisers and digital publishers.
show_staff: true
show_news: false
mainfeatures: []
show_mainfeatures: false
hero_button:
  text: ''
  href: ''
custom_text: |-
  <script data-inject>
  function defer(method) {
  if (window.Swiper) {
  method();
  } else {
  setTimeout(function() { defer(method) }, 50);
  }
  }
  defer(function () {
  var mySwiper14 = new Swiper('#slider-gallery-14', {
            autoplay: {
            delay: 5000,
        },
        loop: true,
        effect: 'crossfade',
        spaceBetween: 0,
        centeredSlides: true,
        slideToClickedSlide: true,
        loopedSlides: 0,
        disableOnInteraction: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 0,
        slidesPerView: 3
  });
  });
  </script>
custom_css: |-
  <style>
  .sub.header-bg::before {
  opacity: 0.065;
  opacity: 0;
  display: none;
  }
  </style>
page_name: "* About Empyr"
menu:
  navigation:
    title: Company
    identifier: company
    weight: 3
slides:
- "/img/company-6.jpg"
- "/img/company-2.jpg"
- "/img/company-1.jpg"
body_headline: Meet the Empyr team
---

<div class="swiper pt-4 pb-5 mb-5 offset-lg vw-100">
  <div class="position-relative mb-3">
    <div class="swiper-container row standard" id="slider-gallery-14">
      <div class="swiper-wrapper">
      {% for item in page.slides %}
        <div class="swiper-slide col-11 col-md-6 p-">
          <div class="rounded-lg" style="background-image: url({{ item | absolute_url }});height: 400px;"></div>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
