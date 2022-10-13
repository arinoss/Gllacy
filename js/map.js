const mapImg1 = document.querySelector(".address-feedback");
const map1 = document.querySelector(".google-map");
const openMap = document.querySelector(".open-map");

//Появление интерактивной карты, при нажатии на кнопку "Открыть полную карту" на главной
//The appearance of an interactive map, when you click on the "Open full map" button on the main
openMap.addEventListener("click", function(evt){
  evt.preventDefault();
  map1.classList.remove("display-none");
  mapImg1.classList.add("display-none");
})