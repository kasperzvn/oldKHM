const carouseldiv = document.getElementById('carousel')
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

let timestamp = performance.now()


outofframediv.style.left = "309%"
farleftdiv.style.left = "-206%"
leftdiv.style.left = "-103%"
centerdiv.style.left = "0%"
rightdiv.style.left = "103%"
farrightdiv.style.left = "206%"

let deb = false

const leftbuttonfunction = function() {
    if (deb == true) {
        return
    }
    deb = true
    timestamp = performance.now()

    outofframediv = document.getElementsByClassName('outofframecard')[0]

    outofframediv.classList.remove("duration-[200ms]")
    outofframediv.classList.remove("ease-out")
    outofframediv.style.left = "-309%"


    farleftdiv = document.getElementsByClassName('farleftcard')[0]
    leftdiv = document.getElementsByClassName('leftcard')[0]
    centerdiv = document.getElementsByClassName('centercard')[0]
    rightdiv = document.getElementsByClassName('rightcard')[0]
    farrightdiv = document.getElementsByClassName('farrightcard')[0]

    outofframediv.getElementsByTagName('img')[0].src = farrightdiv.getElementsByTagName('img')[0].src
    outofframediv.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerHTML = farrightdiv.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerHTML

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


        deb = false
    }, 200);

}

const rightbuttonfunction = function() {
    if (deb == true) {
        return
    }
    deb = true
    timestamp = performance.now()

    outofframediv = document.getElementsByClassName('outofframecard')[0]

    outofframediv.classList.remove("duration-[200ms]")
    outofframediv.classList.remove("ease-out")
    outofframediv.style.left = "309%"

    farleftdiv = document.getElementsByClassName('farleftcard')[0]
    leftdiv = document.getElementsByClassName('leftcard')[0]
    centerdiv = document.getElementsByClassName('centercard')[0]
    rightdiv = document.getElementsByClassName('rightcard')[0]
    farrightdiv = document.getElementsByClassName('farrightcard')[0]

    outofframediv.getElementsByTagName('img')[0].src = farleftdiv.getElementsByTagName('img')[0].src
    outofframediv.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerHTML = farleftdiv.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerHTML

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

        deb = false
    }, 200);

}

const slidermenu = document.getElementById("slidermenu")
const blackoverlay = document.getElementById("blackoverlay")
const sliderparent = document.getElementById("sliderparent")
const menubutton = document.getElementById("menubutton")

const hamburger1 = document.getElementById("hamburger1")
const hamburger2 = document.getElementById("hamburger2")
const hamburger3 = document.getElementById("hamburger3")

var menudeb = false
var menuopen = false

sliderparent.style.display = "none"
blackoverlay.style.opacity = "0"
slidermenu.style.right = "-100%"

menubutton.onclick = function() {
    if (menudeb == true) {
        return
    }
    menudeb = true
    if (menuopen == false) {
        sliderparent.style.display = "inline"
        hamburger1.style.transform = "rotateZ(39.75deg)"
        hamburger3.style.transform = "rotateZ(-39.75deg)"
        hamburger2.style.opacity = "0"

        setTimeout(() => {
            blackoverlay.style.opacity = "0.55"
            slidermenu.style.right = "0%"
        }, 10);
        setTimeout(() => {
            menuopen = true
            menudeb = false
        }, 250);
    } else if (menuopen == true) {
        console.log("closing")
        hamburger1.style.transform = "rotateZ(0deg)"
        hamburger3.style.transform = "rotateZ(0deg)"
        hamburger2.style.opacity = "1"

        setTimeout(() => {
            blackoverlay.style.opacity = "0"
            slidermenu.style.right = "-100%"
        }, 10);
        setTimeout(() => {
            sliderparent.style.display = "none"
            menuopen = false
            menudeb = false
        }, 250);
    }
}

const interval1 = setInterval(() => {
    // if (!(window.matchMedia("(min-width: 768px)").matches)) {
        if (performance.now() - timestamp >= 5000) {
            rightbuttonfunction();
            timestamp = performance.now();
        }
    // }
}, 100);

const specialpaddingdiv = document.getElementsByClassName("specialpadding")
// let percentage = 0.1
// let SidePadding = (screenWidth * percentage)/2+ 'px'

const interval2 = setInterval(() => {
    var SidePadding
    // if (window.screen.width < 950) {
    //     SidePadding = (window.screen.width * 0.2)/2 + 'px'
    // } else {
    //     SidePadding = (window.screen.width * 0.4)/2 + 'px'
    // }

    SidePadding = ((window.screen.width * 0.4)/2 - 30) + 'px'

    for (let i = 0; i < specialpaddingdiv.length; i++) {
        specialpaddingdiv[i].style.paddingLeft = SidePadding
        specialpaddingdiv[i].style.paddingRight = SidePadding
    }
}, 100);