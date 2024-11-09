function showSidebar(){
    const sideBar=document.querySelector("#sideBar")
    sideBar.style.display="flex"
}

function hideSidebar(){
    const sideBar=document.querySelector("#sideBar")
    sideBar.style.display="none"
}
function cartIcon(){

    const searchBar=document.querySelector("#showAll-ul")
    searchBar.classList.toggle('show');
}


let slideIndex = 1;
showSlides(slideIndex);

 function plusSlides(n) {
  showSlides(slideIndex += n);
}

 function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// let startX; 

// const teamSection = document.querySelector('.team');

//  teamSection.addEventListener('touchstart', (e) => {
//     startX = e.touches[0].clientX;
// });

//  teamSection.addEventListener('touchend', (e) => {
//     const endX = e.changedTouches[0].clientX;
//     handleSwipe(startX, endX);
// });

//  function handleSwipe(start, end) {
//     const threshold = 50; 
//     if (start - end > threshold) {
//          plusSlides(1);
//     } else if (end - start > threshold) {
//          plusSlides(-1);
//     }
// }
addEventListener(document, "touchstart", function(e) {
    console.log(e.defaultPrevented);  // will be false
    e.preventDefault();   // does nothing since the listener is passive
    console.log(e.defaultPrevented);  // still false
  }, Modernizr.passiveeventlisteners ? {passive: true} : false);