const main = document.querySelector(".main-page");
const btn1 = document.querySelector(".btn-sl-first");
const btn2 = document.querySelector(".btn-sl-second");
const btn3 = document.querySelector(".btn-sl-third");
const slide1 = document.querySelector(".main-slider-first");
const slide2 = document.querySelector(".main-slider-second");
const slide3 = document.querySelector(".main-slider-third");

 //Слайдер главной страницы
 // Home page slider
btn1.addEventListener("click", function(){
  slide2.classList.add("visually-hidden");
  slide3.classList.add("visually-hidden");
  slide1.classList.remove("visually-hidden");
  main.classList.add("slider1");
  main.classList.remove("slider2");
  main.classList.remove("slider3");
})

btn2.addEventListener("click", function(){
  slide1.classList.add("visually-hidden");
  slide3.classList.add("visually-hidden");
  slide2.classList.remove("visually-hidden");
  main.classList.add("slider2");
  main.classList.remove("slider1");
  main.classList.remove("slider3");
  btn1.classList.remove("btn-slider-focus");


})

btn3.addEventListener("click", function(){
  slide1.classList.add("visually-hidden");
  slide2.classList.add("visually-hidden");
  slide3.classList.remove("visually-hidden");
  main.classList.add("slider3");
  main.classList.remove("slider1");
  main.classList.remove("slider2");
  btn1.classList.remove("btn-slider-focus");


})

  
