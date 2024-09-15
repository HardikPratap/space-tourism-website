"use strict";

// DOM
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__link");
const navToggle = document.querySelector(".mobile-nav-toggle");
const sections = document.querySelectorAll("section");
const destinationNav = document.querySelectorAll(".destination__nav");
const destinationNavLinks = document.querySelectorAll(".nav .nav__link");
const explore = document.querySelector(".explore");
const columnImg = document.querySelector(".column img");
const sliderImg = document.querySelector(".slider--img img");
const slides = document.querySelectorAll(".slide");
const dotContainer = document.querySelector(".dots");
const buttons = document.querySelector(".buttons");
const btns = document.querySelectorAll(".btn");
const techSlider = document.querySelector(".slider");
const allTechSlide = document.querySelectorAll(".tech");
const techImg = document.querySelector(".tech-img img");
// DOM

// Images
const images = {
    bgImagesDesktop: [
      "starter-code/assets/home/background-home-desktop.jpg",
      "starter-code/assets/destination/background-destination-desktop.jpg",
      "starter-code/assets/crew/background-crew-desktop.jpg",
      "starter-code/assets/technology/background-technology-desktop.jpg",
    ],
  
    bgImagesTablet: [
      "starter-code/assets/home/background-home-tablet.jpg",
      "starter-code/assets/destination/background-destination-tablet.jpg",
      "starter-code/assets/crew/background-crew-tablet.jpg",
      "starter-code/assets/technology/background-technology-tablet.jpg",
    ],
  
    bgImagesMobile: [
      "starter-code/assets/home/background-home-mobile.jpg",
      "starter-code/assets/destination/background-destination-mobile.jpg",
      "starter-code/assets/crew/background-crew-mobile.jpg",
      "starter-code/assets/technology/background-technology-mobile.jpg",
    ],
  
    destinationImages: [
      "starter-code/assets/destination/image-moon.png",
      "starter-code/assets/destination/image-mars.png",
      "starter-code/assets/destination/image-europa.png",
      "starter-code/assets/destination/image-titan.png",
    ],
  
    crewImages: [
      "starter-code/assets/crew/image-douglas-hurley.png",
      "starter-code/assets/crew/image-mark-shuttleworth.png",
      "starter-code/assets/crew/image-victor-glover.png",
      "starter-code/assets/crew/image-anousheh-ansari.png",
    ],
  
    technologyPortraitImages: [
      "starter-code/assets/technology/image-launch-vehicle-portrait.jpg",
      "starter-code/assets/technology/image-spaceport-portrait.jpg",
      "starter-code/assets/technology/image-space-capsule-portrait.jpg",
    ],
  
    technologyLandscapeImages: [
      "starter-code/assets/technology/image-launch-vehicle-landscape.jpg",
      "starter-code/assets/technology/image-spaceport-landscape.jpg",
      "starter-code/assets/technology/image-space-capsule-landscape.jpg",
    ],
  };
  // Images

//   Background Images 

const getBackgroundImages = () => {
    if (window.matchMedia("(max-width: 781px)").matches) {
      return images.bgImagesMobile;
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
      return images.bgImagesTablet;
    } else {
      return images.bgImagesDesktop;
    }
  };
// Background Images  

// Mobile Nav Toggle 

navToggle.addEventListener("click", () => {
    const visibility = navLinks.getAttribute("data-visible");
  
    if (visibility === "false") {
      navToggle.setAttribute("aria-expanded", true);
      navLinks.setAttribute("data-visible", true);
    } else {
      navLinks.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  });

  // Mobile Nav Toggle 
  
