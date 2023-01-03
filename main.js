const expandBtn = document.querySelector("#nav-expand-btn");
const featuresExpand = document.querySelector("#features");
const featuresList = document.querySelector("#features-list");
const featuresBtn = document.querySelector("#features-btn");
const exitBtn = document.querySelector("#exit-btn");
const hamburgerIcon = document.querySelector("#hamburger-icon");

expandBtn.addEventListener("click", expandArea);
featuresBtn.addEventListener("click", featuresExpandArea, false);
exitBtn.addEventListener("click", mobileNavToggle);
hamburgerIcon.addEventListener("click", mobileNavToggle);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".nav-wrapper").style.backgroundColor =
      "rgba(255, 255, 255, .8)";
  } else {
    document.querySelector(".nav-wrapper").style.backgroundColor = "#fff";
  }
}

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
