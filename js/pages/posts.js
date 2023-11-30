import fetchData from "../fetchData.js";
import smallPost from "../blogpost/smallPost.js";
import featuredPost from "../blogpost/featuredPost.js";
import errorHandling from "../errorhandling.js";

const allPostsContainer = document.querySelector(".all-posts");
const viewMoreBtn = document.querySelector(".view-more-btn");
const featuredPosts = document.querySelector(".all-featured-posts");
const loaders = document.querySelectorAll(".loader-container");
const filterPosts = document.getElementById("post-categories");

const [news, error1] = await fetchData("posts", `?populate=postImg`);
const [planets, error2] = await fetchData("planets", `?populate=postImg`);
let allPosts = [];

loaders.forEach((loader) => loader.remove());

if (error1 || error2) {
  const curError = error1 ? errorHandling(error1) : errorHandling(error2);
  featuredPosts.appendChild(curError);
  allPostsContainer.appendChild(curError.cloneNode(true));
}
news.data.forEach((post) => allPosts.push(post));
planets.data.forEach((post) => allPosts.push(post));

allPosts.sort((a, b) => {
  return new Date(b.attributes.published) - new Date(a.attributes.published);
});

allPosts.forEach((post, i) => {
  const newPost = smallPost(post);
  if (i <= 8) allPostsContainer.append(newPost);
});

viewMoreBtn.addEventListener("click", () => {
  for (let i = 9; i < allPosts.length; i++) {
    allPostsContainer.append(smallPost(allPosts[i]));
  }

  viewMoreBtn.style.display = "none";
});

// FEATURED POSTS
for (let i = 0; i < 3; i++) {
  console.log("test");
  featuredPosts.append(featuredPost(allPosts[i]));
}

const allDots = document.querySelectorAll(".featured-dots span");
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

/* FILTER POSTS */

filterPosts.addEventListener("change", (e) => {
  allPostsContainer.innerHTML = "";
  const category = e.target.value;
  if (category == "all posts") {
    viewMoreBtn.style.display = "flex";
    for (let i = 0; i < 9; i++) {
      allPostsContainer.append(smallPost(allPosts[i]));
    }
  } else {
    viewMoreBtn.style.display = "none";
    if (category == "planets") {
      planets.data.forEach((planet) =>
        allPostsContainer.append(smallPost(planet))
      );
    } else if (category == "news")
      news.data.forEach((newsPost) =>
        allPostsContainer.append(smallPost(newsPost))
      );
  }
});
