
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

var outofframediv = document.getElementById('outofframecard')
var farleftdiv = document.getElementById('farleftcard')
var leftdiv = document.getElementById('leftcard')
var centerdiv = document.getElementById('centercard')
var rightdiv = document.getElementById('rightcard')
var farrightdiv = document.getElementById('farrightcard')



console.log("hi")

farleftdiv.style.left = "-206%"
leftdiv.style.left = "-103%"
centerdiv.style.left = "0%"
rightdiv.style.left = "103%"
farrightdiv.style.left = "206%"

// outofframediv.style.backgroundColor = "#FF0000"
// farleftdiv.style.backgroundColor = "#FF5600"
// leftdiv.style.backgroundColor = "#FFFA00"
// centerdiv.style.backgroundColor = "#00FA00"
// rightdiv.style.backgroundColor = "#0000FF"
// farrightdiv.style.backgroundColor = "#C000FF"


let deb = false

buttonright.onclick = function () {
    if (deb == true) {
        return
    }
    deb = true

    outofframediv = document.getElementById('outofframecard')
    farleftdiv = document.getElementById('farleftcard')
    leftdiv = document.getElementById('leftcard')
    centerdiv = document.getElementById('centercard')
    rightdiv = document.getElementById('rightcard')
    farrightdiv = document.getElementById('farrightcard')

    outofframediv.style.left = "-309%"


    outofframediv.getElementsByTagName('img')[0].src = farrightdiv.getElementsByTagName('img')[0].src

    // setTimeout(() => {
        outofframediv.style.left = "-206%"
        farleftdiv.style.left = "-103%"
        leftdiv.style.left = "0%"
        centerdiv.style.left = "103%"
        rightdiv.style.left = "206%"
        farrightdiv.classList.remove("duration-500")
        farrightdiv.style.left = "-309%"
        setTimeout(() => {
            farrightdiv.classList.add("duration-500")
            deb = false
        }, 500);

        outofframediv.id = "farleftcard"
        farleftdiv.id = "leftcard"
        leftdiv.id = "centercard"
        centerdiv.id = "rightcard"
        rightdiv.id = "farrightcard"
        farrightdiv.id = "outofframecard"

    // }, 1000);

    // outofframediv.getElementsByTagName('img')[0].src = farrightdiv.getElementsByTagName('img')[0].src

    // outofframediv.style.left = "-206%"
    // farleftdiv.style.left = "-103%"
    // leftdiv.style.left = "0%"
    // centerdiv.style.left = "103%"
    // rightdiv.style.left = "206%"
    // farrightdiv.style.left = "309%"

    // setTimeout(() => {
    //     outofframediv.id = "farleftcard"
    //     farleftdiv.id = "leftcard"
    //     leftdiv.id = "centercard"
    //     centerdiv.id = "rightcard"
    //     rightdiv.id = "farrightcard"
    //     farrightdiv.classList.add("hidden")
    //     farrightdiv.left = "-309%"
    //     farrightdiv.classList.remove("hidden")
    //     farrightdiv.id = "outofframecard"
    //     deb = false
    // }, 500);

}

buttonleft.onclick = function () {
    if (deb == true) {
        return
    }
    deb = true

    outofframediv = document.getElementById('outofframecard')
    farleftdiv = document.getElementById('farleftcard')
    leftdiv = document.getElementById('leftcard')
    centerdiv = document.getElementById('centercard')
    rightdiv = document.getElementById('rightcard')
    farrightdiv = document.getElementById('farrightcard')

    outofframediv.style.left = "309%"


    outofframediv.getElementsByTagName('img')[0].src = farleftdiv.getElementsByTagName('img')[0].src

    // setTimeout(() => {
        outofframediv.style.left = "206%"
        farleftdiv.classList.remove("duration-500")
        farleftdiv.style.left = "-309%"
        setTimeout(() => {
            farleftdiv.classList.add("duration-500")
            deb = false
        }, 500);
        leftdiv.style.left = "-206%"
        centerdiv.style.left = "-103%"
        rightdiv.style.left = "0%"
        farrightdiv.style.left = "103%"

        outofframediv.id = "farrightcard"
        farleftdiv.id = "outofframecard"
        leftdiv.id = "farleftcard"
        centerdiv.id = "leftcard"
        rightdiv.id = "centercard"
        farrightdiv.id = "rightcard"

    // }, 1000);

    // outofframediv.getElementsByTagName('img')[0].src = farrightdiv.getElementsByTagName('img')[0].src

    // outofframediv.style.left = "-206%"
    // farleftdiv.style.left = "-103%"
    // leftdiv.style.left = "0%"
    // centerdiv.style.left = "103%"
    // rightdiv.style.left = "206%"
    // farrightdiv.style.left = "309%"

    // setTimeout(() => {
    //     outofframediv.id = "farleftcard"
    //     farleftdiv.id = "leftcard"
    //     leftdiv.id = "centercard"
    //     centerdiv.id = "rightcard"
    //     rightdiv.id = "farrightcard"
    //     farrightdiv.classList.add("hidden")
    //     farrightdiv.left = "-309%"
    //     farrightdiv.classList.remove("hidden")
    //     farrightdiv.id = "outofframecard"
    //     deb = false
    // }, 500);

}

