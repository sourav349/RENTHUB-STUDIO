const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
//  var a = document.querySelector("#elem1")
//  var image=a.getAttribute("data-image")
//  console.log(image)
function page4Animation(){
  document.addEventListener('DOMContentLoaded', function() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");
  
    elemC.addEventListener("mouseenter", function() {
      fixed.style.display = "block";
    });
  
    elemC.addEventListener("mouseleave", function() {
      fixed.style.display = "none";
    });
  
    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(e) {
      e.addEventListener("mouseenter", function() {
        var image = e.getAttribute("data-image");
        console.log("Image path:", image);  // Debugging line
        if (image) {
          fixed.style.backgroundImage = `url(${image})`;
        } else {
          fixed.style.backgroundImage = 'none'; // Clear image if none is provided
        }
      });
    });
  });
  
  
}
function swiperAnimation(){
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
}
function menuAnimation(){
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-src");
  var naving = document.querySelector("nav img");
  var flag=0;
  menu.addEventListener("click", function() {
    if(flag==0){
    full.style.top = 0;
    naving.style.opacity=0;
    flag=1;
    }else{
      full.style.top = "-100%";
    naving.style.opacity=1;
    flag=0 ; 
    };
  });
  }
  function loaderAnimation(){
    var loader = document.querySelector("#loader")
setTimeout(function(){
     loader.style.top = "-100%"
},4000) 
  }
swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()


