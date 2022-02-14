var nav = document.getElementById("navigation");
var navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    var visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);

    }
});

// toggle small screen buttons
var h2Toggle = false;
document.querySelectorAll(".h2-wrap").forEach(h2 => {
    h2.addEventListener("click", () => {
        if (!h2Toggle) {
            let cardContainer = h2.nextElementSibling;
            cardContainer.style.transform = "scaleY(1)";
            cardContainer.style.margin = "3rem auto";
            let cards = cardContainer.children;
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.display = "flex";
            }
            h2Toggle = true;
        } else {
            let cardContainer = h2.nextElementSibling;
            cardContainer.style.transform = "scaleY(0)";
            cardContainer.style.margin = "0";
            let cards = cardContainer.children;
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.display = "none";
            }
            h2Toggle = false;
        }
    });
});


// overlay funcionality

function showOverlay(element) {
    let name = element.getAttribute("name");
    let overlays = document.querySelectorAll(".overlay-wrapper");
    overlays.forEach(el => {
        if (name === el.getAttribute("name")) {
            el.classList.remove("hidden");
            el.children[0].classList.remove("hidden");
            el.addEventListener("click", () => {
                el.classList.add("hidden");
                el.children[0].classList.add("hidden");
            });
        }
    });
}




// const heightOutput = document.querySelector('#height');
// const widthOutput = document.querySelector('#width');

// function reportWindowSize() {

//     heightOutput.textContent = window.innerHeight;
//     widthOutput.textContent = window.innerWidth;
// }

// window.onresize = reportWindowSize;


// function changeEventListeners() {
//     console.log(window.innerWidth);
//     if (window.innerWidth < 560) {
//         document.querySelectorAll(".h2-wrap").forEach(h2 => {
//             h2.addEventListener("click", function addListener() {
//                 if (!h2Toggle) {
//                     // console.log(h2.nextElementSibling.children);
//                     h2.nextElementSibling.style.transform = "scaleY(1)";
//                     h2.nextElementSibling.style.margin = "3rem 0";
//                     let childArr = h2.nextElementSibling.children;
//                     for (let i = 0; i < childArr.length; i++) {
//                         childArr[i].style.display = "flex";
//                     }
//                     h2Toggle = true;
//                 } else {
//                     h2.nextElementSibling.style.transform = "scaleY(0)";
//                     h2.nextElementSibling.style.margin = "0";
//                     let childArr = h2.nextElementSibling.children;
//                     for (let i = 0; i < childArr.length; i++) {
//                         childArr[i].style.display = "none";
//                     }
//                     h2Toggle = false;
//                 }
//             });
//         });
//     }
// }