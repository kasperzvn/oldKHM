
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

const buttonleft = document.getElementById('carousel_left')
const buttonright = document.getElementById('carousel_right')

var outofframediv = document.getElementsByClassName('outofframecard')[0]
var farleftdiv = document.getElementsByClassName('farleftcard')[0]
var leftdiv = document.getElementsByClassName('leftcard')[0]
var centerdiv = document.getElementsByClassName('centercard')[0]
var rightdiv = document.getElementsByClassName('rightcard')[0]
var farrightdiv = document.getElementsByClassName('farrightcard')[0]

const frames = {outofframediv, farleftdiv, leftdiv, centerdiv, rightdiv, farrightdiv}
const framesArray = Object.values(frames);


// for (let i = 0; i < 6; i++) {
//     const IndexFrame = framesArray[i]
//     document.addEventListener("DOMContentLoaded", () => {

//         const observer = new MutationObserver((mutationsList) => {
//             for (let mutation of mutationsList) {
//                 if (mutation.type === 'attributes' && mutation.attributeName === 'id') {
//                     if (mutation.target.id == "centercard") {
//                         mutation.target.classList.add("scale-[1.03]")
//                     } else {
//                         // mutation.target.classList.remove("transform-[105]")
//                     }
//                 }
//             }
//         });

//         const config = { attributes: true, attributeFilter: ['id'] };
//         observer.observe(IndexFrame, config);
//     })

// }

outofframediv.style.left = "309%"
farleftdiv.style.left = "-206%"
leftdiv.style.left = "-103%"
centerdiv.style.left = "0%"
rightdiv.style.left = "103%"
farrightdiv.style.left = "206%"

let deb = false

buttonleft.onclick = function () {
    if (deb == true) {
        return
    }
    deb = true

    outofframediv = document.getElementsByClassName('outofframecard')[0]

    outofframediv.classList.remove("duration-[200ms]")
    outofframediv.classList.remove("ease-out")
    outofframediv.style.left = "-309%"


    farleftdiv = document.getElementsByClassName('farleftcard')[0]
    leftdiv = document.getElementsByClassName('leftcard')[0]
    centerdiv = document.getElementsByClassName('centercard')[0]
    rightdiv = document.getElementsByClassName('rightcard')[0]
    farrightdiv = document.getElementsByClassName('farrightcard')[0]

    // centerdiv.classList.remove("scale-[1.03]")

    outofframediv.getElementsByTagName('img')[0].src = farrightdiv.getElementsByTagName('img')[0].src
    // outofframediv.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerText = ("Service " + farrightdiv.getElementsByTagName('img')[0].src.substring(15,16))
    outofframediv.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerText = farrightdiv.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerText

    outofframediv.style.left = "-206%"
    farleftdiv.style.left = "-103%"
    leftdiv.style.left = "0%"
    centerdiv.style.left = "103%"
    rightdiv.style.left = "206%"

    centerdiv.getElementsByTagName('div')[0].classList.remove("opacity-100")
    centerdiv.getElementsByTagName('div')[0].classList.add("opacity-0")

    leftdiv.getElementsByTagName('div')[0].classList.remove("opacity-0")
    leftdiv.getElementsByTagName('div')[0].classList.add("opacity-100")

    farrightdiv.classList.remove("duration-[200ms]")
    farrightdiv.classList.remove("ease-out")
    farrightdiv.style.left = "309%"
    setTimeout(() => {
        farrightdiv.classList.add("duration-[200ms]")
        farrightdiv.classList.add("ease-out")

        outofframediv.classList.add("duration-[200ms]")
        outofframediv.classList.add("ease-out")

        outofframediv.classList.remove("outofframecard")
        farleftdiv.classList.remove("farleftcard")
        leftdiv.classList.remove("leftcard")
        centerdiv.classList.remove("centercard")
        rightdiv.classList.remove("rightcard")
        farrightdiv.classList.remove("farrightcard")

        outofframediv.classList.add("farleftcard")
        farleftdiv.classList.add("leftcard")
        leftdiv.classList.add("centercard")
        centerdiv.classList.add("rightcard")
        rightdiv.classList.add("farrightcard")
        farrightdiv.classList.add("outofframecard")

        // outofframediv.id = "farleftcard"
        // farleftdiv.id = "leftcard"
        // leftdiv.id = "centercard"
        // centerdiv.id = "rightcard"
        // rightdiv.id = "farrightcard"
        // farrightdiv.id = "outofframecard"

        deb = false
    }, 200);


}

buttonright.onclick = function () {
    if (deb == true) {
        return
    }
    deb = true

    outofframediv = document.getElementsByClassName('outofframecard')[0]

    outofframediv.classList.remove("duration-[200ms]")
    outofframediv.classList.remove("ease-out")
    outofframediv.style.left = "309%"

    farleftdiv = document.getElementsByClassName('farleftcard')[0]
    leftdiv = document.getElementsByClassName('leftcard')[0]
    centerdiv = document.getElementsByClassName('centercard')[0]
    rightdiv = document.getElementsByClassName('rightcard')[0]
    farrightdiv = document.getElementsByClassName('farrightcard')[0]

    // centerdiv.classList.remove("scale-[1.03]")

    outofframediv.getElementsByTagName('img')[0].src = farleftdiv.getElementsByTagName('img')[0].src
    // outofframediv.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerText = ("Service " + farleftdiv.getElementsByTagName('img')[0].src.substring(15,16))
    outofframediv.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerText = farleftdiv.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerText

    outofframediv.style.left = "206%"
    farrightdiv.style.left = "103%"
    rightdiv.style.left = "0%"
    centerdiv.style.left = "-103%"
    leftdiv.style.left = "-206%"

    centerdiv.getElementsByTagName('div')[0].classList.remove("opacity-100")
    centerdiv.getElementsByTagName('div')[0].classList.add("opacity-0")

    rightdiv.getElementsByTagName('div')[0].classList.remove("opacity-0")
    rightdiv.getElementsByTagName('div')[0].classList.add("opacity-100")

    farleftdiv.classList.remove("duration-[200ms]")
    farleftdiv.classList.remove("ease-out")
    farleftdiv.style.left = "-309%"
    setTimeout(() => {
        farleftdiv.classList.add("duration-[200ms]")
        farleftdiv.classList.add("ease-out")

        outofframediv.classList.add("duration-[200ms]")
        outofframediv.classList.add("ease-out")

        outofframediv.classList.remove("outofframecard")
        farleftdiv.classList.remove("farleftcard")
        leftdiv.classList.remove("leftcard")
        centerdiv.classList.remove("centercard")
        rightdiv.classList.remove("rightcard")
        farrightdiv.classList.remove("farrightcard")

        outofframediv.classList.add("farrightcard")
        farrightdiv.classList.add("rightcard")
        rightdiv.classList.add("centercard")
        centerdiv.classList.add("leftcard")
        leftdiv.classList.add("farleftcard")
        farleftdiv.classList.add("outofframecard")

        // outofframediv.id = "farrightcard"
        // farrightdiv.id = "rightcard"
        // rightdiv.id = "centercard"
        // centerdiv.id = "leftcard"
        // leftdiv.id = "farleftcard"
        // farleftdiv.id = "outofframecard"

        deb = false
    }, 200);


}
