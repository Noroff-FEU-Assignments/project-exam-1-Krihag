import fetchData from "../fetchData.js";
import errorHandling from "../errorhandling.js";
import smallPost from "../blogpost/smallPost.js";
import FeaturedPost from "../blogpost/featuredPost.js";

const latestPosts = document.querySelector(".all-latest-posts");
const btnRight = document.querySelector(".latest-button-right");
const btnLeft = document.querySelector(".latest-button-left");
const planetsContainer = document.querySelector(".explore-planets");
const allDots = document.querySelectorAll(".featured-dots span");
const loaders = document.querySelectorAll(".loader-container");

const [news, error1] = await fetchData("posts", `?populate=postImg`);
const [planets, error2] = await fetchData("planets", `?populate=postImg`);

loaders.forEach((loader) => loader.remove());

if (error1 || error2) {
  const curError = error1 ? errorHandling(error1) : errorHandling(error2);
  latestPosts.appendChild(curError);
  planetsContainer.appendChild(curError.cloneNode(true));
} else {
  let allPosts = [];
  news.data.forEach((post) => allPosts.push(post));
  planets.data.forEach((post) => allPosts.push(post));

  allPosts.sort((a, b) => {
    return new Date(b.attributes.published) - new Date(a.attributes.published);
  });

  allPosts.forEach((post) => latestPosts.append(smallPost(post, true)));

  let curPost = 0;

  btnRight.addEventListener("click", () => {
    if (curPost >= allPosts.length - 3) return;
    curPost++;
    const pixels = window.innerWidth > 500 ? 392 : 328.8;
    latestPosts.style.transform = `translateX(-${curPost * pixels}px)`;
  });
  btnLeft.addEventListener("click", () => {
    if (curPost < 0) return;
    curPost--;
    const pixels = window.innerWidth > 500 ? 392 : 328.8;
    latestPosts.style.transform = `translateX(-${curPost * pixels}px)`;
  });

  for (let i = 0; i < 3; i++) {
    planetsContainer.append(smallPost(planets.data[i], true));
  }

  const featuredContainer = document.querySelector(".all-featured-posts");

  const featuredOne = allPosts.find(
    (post) => post.attributes.title == "First monkey on the moon"
  );

  const featuredTwo = allPosts.find(
    (post) => post.attributes.title == "Our star: The Sun"
  );

  const featuredThree = allPosts.find(
    (post) => post.attributes.title == "Aurora Borealis unveiled"
  );

  const allFeatured = [featuredOne, featuredTwo, featuredThree];

  allFeatured.forEach((post) =>
    featuredContainer.append(FeaturedPost(post, true))
  );

  const allFeaturedPosts = document.querySelectorAll(".featured-post");
  allFeaturedPosts[1].style.display = "none";
  allFeaturedPosts[2].style.display = "none";

  allDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      allDots.forEach((curDot) => curDot.classList.remove("dot-active"));
      dot.classList.add("dot-active");
      allFeaturedPosts.forEach((post, i) => {
        if (index === i) post.style.display = "flex";
        else {
          post.style.display = "none";
        }
      });
    });
  });
}
