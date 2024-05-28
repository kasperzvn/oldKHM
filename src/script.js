
// const Button = document.getElementById('scrolltoformbutton');
// const sendButton = document.getElementById('sendbutton');
// const Contactform = document.getElementById('scrollcontactform');

// Button.onclick = function() {
//     Contactform.scrollIntoView({behavior:"smooth",block:"center"})
// };

// sendButton.onclick = function () {

// };

const carousel = document.getElementById('carousel');

let isDragStart = false, prevpageX, prevScrollLeft;
var velX = 0

var momentumID;

function beginMomentumTracking(){
  cancelMomentumTracking();
  momentumID = requestAnimationFrame(momentumLoop); 
}

function cancelMomentumTracking(){
  cancelAnimationFrame(momentumID);
}

function momentumLoop(){
  carousel.scrollLeft += velX; // Apply the velocity to the scroll position
  velX = velX * 0.95; // Slow the velocity slightly
  if (Math.abs(velX) > 0){ // Still moving?
    momentumID = requestAnimationFrame(momentumLoop); // Keep looping 
  }
}

const dragStart = (e) => {
    isDragStart = true;
    prevpageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
    cancelMomentumTracking(); // Stop the drag momentum loop
};

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    beginMomentumTracking();
};

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let posDiff = (e.pageX || e.touches[0].pageX) - prevpageX;
    carousel.scrollLeft = prevScrollLeft - posDiff;
    velX = carousel.scrollLeft - prevScrollLeft; 
};


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

