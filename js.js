let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");


let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");



thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRuning = 3000;
let timeAutoNext = 7000;



nextDom.onclick = function(){
  showslider("next");
}
prevDom.onclick = function(){
  showslider("prev");
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext)
function showslider(type){
  let sliderItemsdom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(".carousel .thumbnail .item");


  if(type === "next"){
    SliderDom.appendChild(sliderItemsdom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  }else{
    SliderDom.prepend(sliderItemsdom[sliderItemsdom.length -1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length -1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRuning);


  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();

  }, timeAutoNext);
  
}


