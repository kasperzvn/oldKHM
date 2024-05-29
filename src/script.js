
// const Button = document.getElementById('scrolltoformbutton');
// const sendButton = document.getElementById('sendbutton');
// const Contactform = document.getElementById('scrollcontactform');

// Button.onclick = function() {
//     Contactform.scrollIntoView({behavior:"smooth",block:"center"})
// };

// sendButton.onclick = function () {

// };

// const carousel = document.getElementById('carousel');

// let isDragStart = false, prevpageX, prevScrollLeft;
// var velX = 0

// var momentumID;

// function beginMomentumTracking(){
//   cancelMomentumTracking();
//   momentumID = requestAnimationFrame(momentumLoop); 
// }

// function cancelMomentumTracking(){
//   cancelAnimationFrame(momentumID);
// }

// function momentumLoop(){
//   carousel.scrollLeft += velX; // Apply the velocity to the scroll position
//   velX = velX * 0.95; // Slow the velocity slightly
//   if (Math.abs(velX) > 0){ // Still moving?
//     momentumID = requestAnimationFrame(momentumLoop); // Keep looping 
//   }
// }

// const dragStart = (e) => {
//     isDragStart = true;
//     prevpageX = e.pageX || e.touches[0].pageX;
//     prevScrollLeft = carousel.scrollLeft;
//     cancelMomentumTracking(); // Stop the drag momentum loop
// };

// const dragStop = () => {
//     isDragStart = false;
//     carousel.classList.remove("dragging");
//     beginMomentumTracking();
// };

// const dragging = (e) => {
//     if (!isDragStart) return;
//     e.preventDefault();
//     carousel.classList.add("dragging");
//     let posDiff = (e.pageX || e.touches[0].pageX) - prevpageX;
//     carousel.scrollLeft = prevScrollLeft - posDiff;
//     velX = carousel.scrollLeft - prevScrollLeft; 
// };


// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchstart", dragStart);

// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);

// carousel.addEventListener("mouseup", dragStop);
// carousel.addEventListener("mouseleave", dragStop);
// carousel.addEventListener("touchend", dragStop);

const carousel = document.getElementById('carousel')
const buttonleft = document.getElementById('carousel_left')
const buttonright = document.getElementById('carousel_right')

buttonright.onclick = function () {
    let centerdiv = document.getElementById('centercard')
    let rightdiv = document.getElementById('rightcard')
    let leftdiv = document.getElementById('leftcard')
    let farrightdiv = document.getElementById('farrightcard')
    let farleftdiv = document.getElementById('farleftcard')
    let outofframediv = document.getElementById('outofframecard')


    // resetting
    centerdiv.style.left = "0%"
    rightdiv.style.left = "103%"
    leftdiv.style.left = "-103%"
    farrightdiv.style.left = "206%"
    farleftdiv.style.left = "-206%"
    outofframediv.style.left = "-309%"


    centerdiv.style.left = "103%"
    centerdiv.id = "rightcard"

    leftdiv.style.left = "0%"
    leftdiv.id = "centercard"

    farleftdiv.style.left = "-103%"
    farleftdiv.id = "leftcard"

    outofframediv.style.left = "-206%"
    outofframediv.id = "outofframecard"

    rightdiv.style.left = "206%"
    rightdiv.id = "farrightcard"

    farrightdiv.style.left = "309%"
    farrightdiv.id = "moving"

    // clonediv.style.left = "-206%"
    // clonediv.style.left.
}