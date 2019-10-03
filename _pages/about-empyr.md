---
layout: standard-page
permalink: "/about-empyr/"
title: About Empyr
tagline: Our Vision
heading: A world where advertisers know the impact of every dollar spent.
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
sub_heading: Empyr is revolutionizing the way the world’s advertisers make data driven decisions across all online media channels. Our card linked technology connects digital advertising to in store purchases, empowering advertisers to attribute the entire customer journey from an ad impression to a physical in store transaction.
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
    var mySwiper14 = new Swiper("#slider-gallery-14", {
      autoplay: {
        delay: 5000
      },
      loop: true,
      effect: "crossfade",
      spaceBetween: 0,
      slidesOffsetAfter: 100,
      centeredSlides: true,
      slideToClickedSlide: true,
      loopedSlides: 0,
      disableOnInteraction: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      slidesPerView: 2,
      spaceBetween: 0,
      breakpoints: {
        1920: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1028: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        }
    }
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
slides:
- "/img/company-6.jpg"
- "/img/company-2.jpg"
- "/img/company-1.jpg"
- "/img/company-3.jpg"
body_headline: Meet the Empyr team
menu:
  navigation:
    weight: 3
    title: Company
sitemap:
  priority: 0.75
  changefreq: 'daily'

---
<div class="pt-4 pb-5 mb-5 offset-lg px-4 px-xl-0">
  <div class="mb-3">
    <div class="swiper-container standard" id="slider-gallery-14">
      <div class="swiper-wrapper">
      {% for item in page.slides %}
        <div class="swiper-slide">
          <div class="rounded-lg" style="background-image: url({{ item | absolute_url }});height: 370px;background-size: cover;background-position: center;"></div>
        </div>
        {% endfor %}
      </div>
      <div class="swiper-pagination" style="bottom: -50px;"></div>
    </div>
  </div>
</div>
