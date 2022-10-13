const popup = document.querySelector(".login-form");
const openlogin = document.querySelector(".login");
const sendform = popup.querySelector(".form-login")
const login = popup.querySelector("[name=login-email]");
const pass = popup.querySelector("[name=login-pass]");
const storagelogin = localStorage.setItem("login", login.value);
const mainPage = document.querySelector(".main-page");
const btnCatalog = document.querySelector(".catalog");
const navCatalog = document.querySelector(".catalog-option");
const linkCatalog = document.querySelector(".nav-button");
const btnSearch = document.querySelector(".search-li");
const iconSearch = document.querySelector(".search");
const formSearch = document.querySelector(".form-search");
const modalFeedback = document.querySelector(".feedback");
const btnFeedback = document.querySelector(".btn-feedback");
const pathSearch = document.querySelector(".path-search");
let isStorageSupport = true;

//Проверка доступен ли local storage
//Checking if local storage is available
try{
  storagelogin = localStorage.getItem("login");
}
catch(err){
  isStorageSupport = false;
}

openlogin.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("visually-hidden");
  login.focus();
  if (storagelogin){
    login.value = storagelogin;
    pass.focus();
  }
  else{
    login.focus();
  }
});

//Проверка на заполнение всех полей в форме логина
//Check if all fields in the login form are filled
sendform.addEventListener("submit", function(evt){
  evt.preventDefault();
  if (!login.value || !pass.value){
    alert("Заполните все поля");
  }
  else{
    if (isStorageSupport){
      localStorage.setItem("login", login.value);
    }
  }
  alert("Вход выполнен")
});

//Закрытие форм при нажатии ESC
//Close forms when pressing ESC
  window.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27)
      {
        evt.preventDefault();
        popup.classList.add("visually-hidden");
        modalFeedback.classList.add("visually-hidden");
      }
  })

//Появлние формы каталога в хедере
//Appearance of the catalog form in header
btnCatalog.addEventListener("mouseenter", function(){
  navCatalog.classList.remove("visually-hidden");
  linkCatalog.classList.add("nav-button-hover");
})

btnCatalog.addEventListener("mouseleave", function(){
  navCatalog.classList.add("visually-hidden");
  linkCatalog.classList.remove("nav-button-hover");
})

navCatalog.addEventListener("mouseenter", function(){
  navCatalog.classList.remove("visually-hidden");
  linkCatalog.classList.add("nav-button-hover");
})

navCatalog.addEventListener("mouseleave", function(){
  navCatalog.classList.add("visually-hidden");
  linkCatalog.classList.remove("nav-button-hover");
})


//Появление формы поиска, при наведении на иконку поиска в хедере
// Appearance of the search form, when hovering over the search icon in the header
btnSearch.addEventListener("mouseenter", function(){
  formSearch.classList.remove("visually-hidden");
  pathSearch.classList.add("fill-black");
})

formSearch.addEventListener("mouseenter", function(){
  formSearch.classList.remove("visually-hidden");
  iconSearch.classList.add("search-hover");
  pathSearch.classList.add("fill-black");
})

btnSearch.addEventListener("mouseleave", function(){
  formSearch.classList.add("visually-hidden");
  pathSearch.classList.remove("fill-black");
  iconSearch.classList.remove("search-hover");
})

formSearch.addEventListener("mouseleave", function(){
  formSearch.classList.add("visually-hidden");
  pathSearch.classList.remove("fill-black");
  iconSearch.classList.remove("search-hover");
})

//Появление формы обратной связи на главной
// Appearance of the feedback form on the main page
btnFeedback.addEventListener("click", function(){
   modalFeedback.classList.remove("visually-hidden")                          
                             })
