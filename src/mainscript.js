let scrolltoform = document.getElementById("scrolltoformbutton")
// let iconsholder = document.getElementById("scroll_iconsholder")
let msgicon = document.getElementById("scroll_msgicon")
let arrowicon = document.getElementById("scroll_arrowicon")

scrolltoform.addEventListener("mouseover", function() {

    if (msgicon.style.transitionDuration == "200ms") {
        msgicon.style.transitionDuration == "0ms"

        msgicon.classList.remove("h-[100%]")
        msgicon.classList.add("h-[0%]")
    }

    if (!(arrowicon.style.transitionDuration == "200ms")) {
        arrowicon.classList.add("duration-[200ms]")
        arrowicon.classList.remove("h-[0%]")
        arrowicon.classList.add("h-[100%]")
    }

 
});

scrolltoform.addEventListener("mouseout", function() {
    arrowicon.classList.remove("duration-[200ms]")
    arrowicon.classList.remove("h-[100%]")
    arrowicon.classList.add("h-[0%]")

    if (!(msgicon.style.animationDuration == "200ms")) {
        msgicon.classList.add("duration-[200ms]")
        msgicon.classList.remove("h-[0%]")
        msgicon.classList.add("h-[100%]")
    }


    
});

// CURSOR
let cursor = document.getElementById("circle_cursor")
let cursoractivedivs = document.querySelectorAll(".cursorbubble")
let cursoractive = false
let isCursorInside = false;

document.addEventListener("mousemove", function(e){
    let x = e.clientX + window.scrollX
    let y = e.clientY + window.scrollY
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
})

//automatic resize 
function autoResizeTextarea(event) {
    const textarea = event.target;
    // Reset the height to its default value
    textarea.style.height = 'auto';
    // Set the height to match the scroll height
    textarea.style.height = (textarea.scrollHeight + 10) + 'px';
}

// Add event listener to the textarea
document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('form_message');
    textarea.addEventListener('input', autoResizeTextarea);
});

//scroll into view
document.addEventListener('DOMContentLoaded', function() {
    let scrollbutton = document.getElementById("scrolltoformbutton")
    let contactform = document.getElementById("contactform")

    scrollbutton.addEventListener('click', function() {
        contactform.scrollIntoView({ behavior: 'smooth' });
    })
})


// cursoractivedivs.forEach(element => {
//     element.addEventListener("mouseenter", function() {
//         if (!cursoractive) {
//             cursoractive = true;
//             cursor.style.height = "60px";
//             document.body.style.cursor = "none";
//         }
//     });

//     element.addEventListener("mouseleave", function() {
//         if (cursoractive) {
//             cursoractive = false;
//             cursor.style.height = "0px";
//             document.body.style.cursor = "auto";
//         }
//     });
// });

// cursoractivedivs.forEach(element => {
//     element.addEventListener("mouseenter", function() {
//         if (!isCursorInside) {
//             isCursorInside = true;
//             cursoractive = true;
//             cursor.style.height = "60px";
//             document.body.style.cursor = "none";
//         }
//     });

//     element.addEventListener("mouseleave", function() {
//         if (isCursorInside) {
//             isCursorInside = false;
//             cursoractive = false;
//             cursor.style.height = "0px";
//             document.body.style.cursor = "auto";
//         }
//     });
// });

// document.addEventListener("mousemove", function(e) {
//     let target = e.target;
//     let inside = false;
    
//     cursoractivedivs.forEach(element => {
//         if (element.contains(target)) {
//             inside = true;
//         }
//     });

//     if (inside && !isCursorInside) {
//         isCursorInside = true;
//         cursoractive = true;
//         cursor.style.height = "60px";
//         document.body.style.cursor = "none";
//     } else if (!inside && isCursorInside) {
//         isCursorInside = false;
//         cursoractive = false;
//         cursor.style.height = "0px";
//         document.body.style.cursor = "auto";
//     }
// });