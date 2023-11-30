export default function FeaturedPost(data, indexPage = false) {
  let title = data.attributes.title;
  let description = data.attributes.description;

  if (data.attributes.type === "planets") {
    title = data.attributes.name;
    description = data.attributes.descriptOne;
  }

  const featuredPostDiv = document.createElement("div");
  featuredPostDiv.classList.add("featured-post");

  const img = document.createElement("img");
  img.src = data.attributes.postImg.data.attributes.url;
  img.alt = data.attributes.postImg.data.attributes.alternativeText;
  featuredPostDiv.appendChild(img);

  const contentMainContainer = document.createElement("div");
  contentMainContainer.classList.add("featured-content-container");
  const featuredPostContentDiv = document.createElement("div");
  featuredPostContentDiv.classList.add("featured-post-content");

  const divFeatured = document.createElement("div");
  divFeatured.textContent = "Featured";
  featuredPostContentDiv.appendChild(divFeatured);

  const pMonkey = document.createElement("p");
  pMonkey.classList.add("featured-post-text-monkey");
  pMonkey.textContent = title;
  featuredPostContentDiv.appendChild(pMonkey);

  const pGeneral = document.createElement("p");
  pGeneral.classList.add("featured-post-text");

  pGeneral.textContent = description.slice(0, 200) + " ...";

  featuredPostContentDiv.appendChild(pGeneral);

  const btnContainer = document.createElement("a");

  const page = indexPage ? "/html/" : "";
  btnContainer.href = `${page + data.attributes.type}.html?id=${data.id}`;
  const readMoreBtn = document.createElement("button");
  readMoreBtn.classList.add("read-more-btn");
  readMoreBtn.textContent = "Read more";

  btnContainer.appendChild(readMoreBtn);
  contentMainContainer.appendChild(featuredPostContentDiv);
  contentMainContainer.appendChild(btnContainer);
  featuredPostDiv.appendChild(contentMainContainer);

  return featuredPostDiv;
}
