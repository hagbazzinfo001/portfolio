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
   // Select the button
  const button = document.getElementById('contact-btn');

  // Add a click event listener
  button.addEventListener('click', () => {
    // Navigate to another page
    window.location.href = '/src/asset/pages/contact.html';
  });
  const about = document.getElementById('about-btn');

  // Add a click event listener
  about.addEventListener('click', () => {
    // Navigate to another page
    window.location.href = '/src/asset/pages/about.html';
  });
  const explore2 = document.getElementById('explore2-btn');

  // Add a click event listener
  explore2.addEventListener('click', () => {
    // Navigate to another page
    window.location.href = '/src/asset/pages/poert.html';
  });
  const blog = document.getElementById('blog-btn');

  // Add a click event listener
  blog.addEventListener('click', () => {
    // Navigate to another page
    window.location.href = '/src/asset/pages/blog.html';
  });
 
  const button1 = document.getElementById('contact-btn1');

  // Add a click event listener
  button1.addEventListener('click', () => {
    // Navigate to another page
    window.location.href = '../pages/contact.html';
  });
  
// let slideIndex = 1;
// showSlides(slideIndex);

//  function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

//  function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
// // let startX; 

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
//  
  



// const sectionsContainer = document.getElementById('sections');
// const sections = document.querySelectorAll('.section');
// const circles = document.querySelectorAll('#circles svg');

// circles.forEach((circle, index) => {
//   circle.addEventListener('click', () => {
//     // Reset all sections and circles
//     sections.forEach((section) => section.classList.remove('active'));
//     circles.forEach((circle) => circle.classList.remove('active'));

//     // Activate the clicked circle and corresponding section
//     circle.classList.add('active');
//     sections[index].classList.add('active');

//     // Move the active section to the center
//     const offset = index * -30; // Each section takes 100% width
//     // sectionsContainer.style.transform = `translateX(${offset}%)`;
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     circles[0].classList.add('active');
//     sections[0].classList.add('active');
//     sectionsContainer.style.transform = 'translateY(0%)';
//   });
  