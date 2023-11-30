import fetchData from "../fetchData.js";
import errorHandling from "../errorhandling.js";

const mainContainer = document.querySelector(".news-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const [postData, error] = await fetchData("posts", `${id}?populate=*`);

document.querySelector(".loader-container").remove();
if (error) {
  mainContainer.append(errorHandling(error));
} else {
  const curPost = postData.data.attributes;
  const images = curPost.img.data;

  document.querySelector("title").textContent =
    "Universe Blog - " + curPost.title;

  // header Image and main container

  const headerImg = document.createElement("img");
  headerImg.classList.add("header-img");
  headerImg.src = images[0].attributes.url;
  headerImg.alt = images[0].attributes.alternativeText;
  headerImg.classList.add("modal-img");
  const container = document.createElement("div");
  container.classList.add("news-content-container");

  /* Header and date*/
  const headerAndDate = document.createElement("div");
  headerAndDate.classList.add("header-and-date");
  const newsHeader = document.createElement("h1");
  newsHeader.textContent = curPost.title;
  const publishedDate = document.createElement("div");

  publishedDate.textContent = "PUBLISHED: ";
  const spanDate = document.createElement("span");
  spanDate.textContent = curPost.published;
  publishedDate.appendChild(spanDate);

  // SECTION ONE (PARAGRAPHS AND IMAGE)
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");
  const textContainerOne = document.createElement("div");
  textContainerOne.classList.add("text-container-one");
  const textTitleOne = document.createElement("h2");
  textTitleOne.classList.add("text-container-header");
  console.log(curPost);
  textTitleOne.textContent = curPost.sections[0].title;
  const descriptOne = document.createElement("p");
  descriptOne.textContent = curPost.description;
  const descriptTwo = document.createElement("p");
  descriptTwo.textContent = curPost.sections[0].descriptionOne;
  const containerOneImg = document.createElement("img");
  containerOneImg.classList.add("description-round-img");
  containerOneImg.src = images[1].attributes.url;
  containerOneImg.alt = images[1].attributes.alternativeText;
  containerOneImg.classList.add("modal-img");

  // SECTION TWO

  const textContainerTwo = document.createElement("div");
  textContainerTwo.classList.add("text-container-two");
  const textTitleTwo = document.createElement("h3");

  textTitleTwo.textContent = curPost.sections[1].title;
  const textTwoDescript = document.createElement("p");
  textTwoDescript.textContent = curPost.sections[1].descriptionOne;

  // IMAGE CONTAINER

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("news-image-container");
  const imageOne = document.createElement("img");
  imageOne.src = images[2].attributes.url;
  imageOne.alt = images[2].attributes.alternativeText;
  imageOne.classList.add("modal-img");
  const imageTwo = document.createElement("img");
  imageTwo.src = curPost.postImg.data.attributes.url;
  imageTwo.alt = curPost.postImg.data.attributes.alternativeText;
  imageTwo.classList.add("modal-img");
  // SECTION THREE
  const textContainerThree = document.createElement("div");
  textContainerThree.classList.add("text-container-three");
  const textTitleThree = document.createElement("h3");
  textTitleThree.textContent = curPost.sections[2].title;
  const textThreeDescript = document.createElement("p");
  textThreeDescript.textContent = curPost.sections[2].descriptionOne;

  // APPENDS
  textContainerOne.append(textTitleOne, descriptOne, descriptTwo);
  textContainerTwo.append(textTitleTwo, textTwoDescript);
  textContainerThree.append(textTitleThree, textThreeDescript);
  imageContainer.append(imageOne, imageTwo);
  contentContainer.append(textContainerOne, containerOneImg);
  headerAndDate.append(newsHeader, publishedDate);
  container.append(
    headerAndDate,
    contentContainer,
    textContainerTwo,
    imageContainer,
    textContainerThree
  );
  mainContainer.append(headerImg, container);

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
