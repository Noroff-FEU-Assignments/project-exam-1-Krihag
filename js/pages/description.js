import revealEle from "../effects/revealEle.js";
import fetchData from "../fetchData.js";
import errorHandling from "../errorhandling.js";

const hidePlanets = document.querySelector(".hide-planets");
const showPlanets = document.querySelector(".show-planets");
const hiddenElements = document.querySelectorAll(".hide-element");
const planetsContainer = document.querySelector(".planets-list");
const contentAndImage = document.querySelector(".content-and-image");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const [planetData, error] = await fetchData("planets", `${id}?populate=*`);

document.querySelector(".loader-container").remove();
if (error) {
  contentAndImage.appendChild(errorHandling(error));
} else {
  const curPlanet = planetData.data.attributes;
  document.querySelector("title").textContent =
    "Universe Blog - " + curPlanet.name;
  document.querySelectorAll(".planets-link p").forEach((icon) => {
    if (icon.textContent.includes(curPlanet.name)) {
      icon.classList.add("planet-active");
    }
  });

  const planetImg = document.querySelector(".planet-img");
  planetImg.src = curPlanet.images.data[1].attributes.url;
  planetImg.alt = curPlanet.images.data[1].attributes.alternativeText;

  document.querySelector("h1").textContent = curPlanet.name;
  document.querySelector(".planet-number").textContent = "0" + curPlanet.number;

  document.querySelector(".planet-header-name p").textContent =
    curPlanet.nickname;
  document.querySelector(".planet-subheader").textContent =
    curPlanet.nameDescription;
  document.querySelector(".description-1").textContent =
    curPlanet.description[0].one;

  (".planet-header-name p");
  document.querySelector(".description-2").textContent =
    curPlanet.description[0].two;
  (".planet-header-name p");
  const [fact1, fact2, fact3, fact4, fact5] =
    document.querySelectorAll(".quick-facts");

  fact1.textContent = curPlanet.facts[0].one;
  fact2.textContent = curPlanet.facts[0].two;
  fact3.textContent = curPlanet.facts[0].three;
  fact4.textContent = curPlanet.facts[0].four;
  fact5.textContent = curPlanet.facts[0].five;

  /* SOLAR SYSTEM */
  const solarSystemImg = document.querySelector(".solar-system-img");
  solarSystemImg.src = curPlanet.images.data[0].attributes.url;
  solarSystemImg.classList.add("modal-img");
  solarSystemImg.alt = curPlanet.images.data[0].attributes.alternativeText;
  document.querySelector(".solar-system-text").textContent =
    curPlanet.solarSystemText;

  // FUN FACTS

  document.querySelector(
    ".fun-fact-1 p"
  ).textContent += ` ${curPlanet.funfacts[0].one}`;
  document.querySelector(
    ".fun-fact-2 p"
  ).textContent += ` ${curPlanet.funfacts[0].two}`;
  document.querySelector(
    ".fun-fact-3 p"
  ).textContent += ` ${curPlanet.funfacts[0].three}`;

  hidePlanets.addEventListener("click", function (e) {
    e.preventDefault();
    hidePlanets.style.display = "none";

    const moveLength = window.innerWidth >= 1000 ? 23 : 13;
    planetsContainer.style.transform = `translateX(${moveLength}rem)`;

    setTimeout(() => {
      showPlanets.style.display = "inline-block";
    }, 1300);
  });
  showPlanets.addEventListener("click", function (e) {
    e.preventDefault();
    showPlanets.style.display = "none";
    planetsContainer.style.transform = `translateX(0)`;

    setTimeout(() => {
      hidePlanets.style.display = "inline-block";
    }, 1300);
  });

  revealEle(hiddenElements);

  /* FUN FACTS */

  let currentIndex = 0;

  const funButtonLeft = document.querySelector(".fun-facts-btn-left");
  const funButtonRight = document.querySelector(".fun-facts-btn-right");
  const funFacts = document.querySelectorAll(".fun-fact");

  funFacts.forEach((fact) => (fact.style.transitionDelay = 0));

  funButtonLeft.addEventListener("click", () => {
    funFacts[currentIndex].style.opacity = 0;
    if (currentIndex <= 0) {
      currentIndex = 2;
    } else {
      currentIndex--;
    }
    funFacts[currentIndex].style.opacity = 1;
  });

  funButtonRight.addEventListener("click", () => {
    funFacts[currentIndex].style.opacity = 0;
    if (currentIndex >= 2) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    funFacts[currentIndex].style.opacity = 1;
  });

  // MODAL

  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");

  function openModal(imageSrc) {
    modalImage.src = imageSrc;
    modal.showModal();
  }

  document.querySelectorAll(".modal-img").forEach(function (element) {
    element.addEventListener("click", function () {
      modal.style.display = "flex";
      openModal(this.src);
    });
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.close();
      modal.style.display = "none";
    }
  });
}
