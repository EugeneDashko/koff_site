import './index.html';
// import './page.html';
import './index.scss';
//new modules:
import {Navigation, Thumbs}  from "swiper/modules";
import Swiper from 'swiper';
import 'swiper/css';



const swiper = new Swiper(".product__slider-thumbnails", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
   new Swiper(".product__slider-main", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".product__arrow_next",
      prevEl: ".product__arrow_prev",
    },
    modules: [Navigation, Thumbs],
    thumbs: {
      swiper: swiper,
    },
  });











