const expandBtn = document.querySelector("#nav-expand-btn");
const featuresExpand = document.querySelector("#features");
const featuresList = document.querySelector("#features-list");
const featuresBtn = document.querySelector("#features-btn");
const exitBtn = document.querySelector("#exit-btn");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const normalNavigation = document.querySelector(".nav-wrapper");
const mobileNavigation = document.querySelector(".nav-sm");

expandBtn.addEventListener("click", expandArea);
featuresBtn.addEventListener("click", featuresExpandArea, false);
exitBtn.addEventListener("click", mobileNavToggle);
hamburgerIcon.addEventListener("click", mobileNavToggle);

// function slideshowBtnToggle() {
//   if (cardList.length === 5) {
//     addBtn.disabled = true;
//   } else {
//     addBtn.disabled = false;
//   }
// }

// Slideshow animation logic
const subductBtnDesktop = document.querySelector("#subduct-card-desktop");
const subductBtnMobile = document.querySelector("#subduct-card-mobile");
const addBtnDekstop = document.querySelector("#add-card-desktop");
const addBtnMobile = document.querySelector("#add-card-mobile");

const slideshowCard1 = document.querySelector("#slideshow-card-1");
const slideshowCard2 = document.querySelector("#slideshow-card-2");
const slideshowCard3 = document.querySelector("#slideshow-card-3");
const slideshowCard4 = document.querySelector("#slideshow-card-4");
const slideshowCard5 = document.querySelector("#slideshow-card-5");

const cardList = [
  slideshowCard1,
  slideshowCard2,
  slideshowCard3,
  slideshowCard4,
  slideshowCard5,
];

const discardedList = [];

subductBtnDesktop.addEventListener("click", subductCard);
addBtnDekstop.addEventListener("click", addCard);

subductBtnMobile.addEventListener("click", subductCard);
addBtnMobile.addEventListener("click", addCard);

function subductCard() {
  const test = cardList.shift();
  discardedList.unshift(test);
  console.log(discardedList);
  test.style.opacity = "0";
  // test.style.transform = "translate(-300px)";
  test.style.maxWidth = "0";
  test.style.maxHeight = "0";
  test.addEventListener(
    "transitionend",
    function (e) {
      test.classList.remove("slideshow-card");
      test.style.display = "none";
      if (cardList.length === 5) {
        addBtnDekstop.disabled = true;
        addBtnMobile.disabled = true;
      } else {
        addBtnDekstop.disabled = false;
        addBtnMobile.disabled = false;
      }
      if (cardList.length === 1) {
        subductBtnDesktop.disabled = true;
        subductBtnMobile.disabled = true;
      } else {
        subductBtnDesktop.disabled = false;
        subductBtnMobile.disabled = false;
      }
    },
    {
      capture: false,
      once: true,
      passive: false,
    }
  );
}

function addCard() {
  const test2 = discardedList.shift();
  cardList.unshift(test2);
  console.log(cardList);
  test2.style.display = "block";

  setTimeout(function () {
    test2.style.transition = "all 0.2s linear";
    test2.style.opacity = "1";
    // test2.style.transform = "translate(0px)";
    test2.style.maxWidth = "500px";
    test2.style.maxHeight = "500px";

    if (cardList.length === 5) {
      addBtnDekstop.disabled = true;
      addBtnMobile.disabled = true;
    } else {
      addBtnDekstop.disabled = false;
      addBtnMobile.disabled = false;
    }
    if (cardList.length === 1) {
      subductBtnDesktop.disabled = true;
      subductBtnMobile.disabled = true;
    } else {
      subductBtnDesktop.disabled = false;
      subductBtnMobile.disabled = false;
    }
  }, 20);
}

// Navigation change on scroll
window.onscroll = function () {
  if (window.innerWidth < 1200) {
    scrollFunction(mobileNavigation);
  } else {
    console.log(window.innerWidth);
    scrollFunction(normalNavigation);
  }
};

function scrollFunction(navSize) {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navSize.style.backgroundColor = "rgba(255, 255, 255, .9)";
  } else {
    navSize.style.backgroundColor = "#fff";
  }
}

// Within nav list, expansion of the Features subsection - Desktop version

function expandArea() {
  if (document.querySelector(".extension-area").style.display == "none") {
    document.querySelector(".extension-area").style.display = "block";
    document
      .querySelector("#svg-path")
      .setAttribute(
        "d",
        "M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
      );
  } else {
    document.querySelector(".extension-area").style.display = "none";
    document
      .querySelector("#svg-path")
      .setAttribute(
        "d",
        "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
      );
  }
}

// Within nav list, expansion of the Features subsection - Mobile version
function featuresExpandArea() {
  if (
    featuresList.classList.contains("is-off-display") &&
    featuresExpand.classList.contains("is-off-display")
  ) {
    featuresList.classList.remove("is-off-display");
    featuresExpand.classList.remove("is-off-display");
    setTimeout(function () {
      featuresList.classList.remove("is-off-height");
      featuresList.classList.add("features-list");
    }, 20);
  } else {
    featuresList.classList.add("is-off-height");
    featuresList.addEventListener(
      "transitionend",
      function (e) {
        featuresList.classList.add("is-off-display");
        featuresList.classList.remove("features-list");
        featuresExpand.classList.add("is-off-display");
      },
      {
        capture: false,
        once: true,
        passive: false,
      }
    );
  }
}

// Nav hamburger expansion movement

function mobileNavToggle() {
  const mobileNav = document.querySelector("#mobile-nav");
  const bodyElem = document.querySelector("body");
  if (mobileNav.style.left === "0px") {
    mobileNav.style.left = "100%";
    bodyElem.style.overflow = "visible";
  } else {
    mobileNav.style.left = "0";
    bodyElem.style.overflow = "hidden";
  }
  console.log("hello");
}
