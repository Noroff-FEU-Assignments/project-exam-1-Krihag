export default function smallPost(data, indexPage = false) {
  const container = document.createElement("a");
  container.classList.add("planet-post");

  const page = indexPage ? "/html/" : "";
  container.href = `${page + data.attributes.type}.html?id=${data.id}`;

  const img = document.createElement("img");
  img.src = data.attributes.postImg.data.attributes.url;
  img.alt = data.attributes.postImg.data.attributes.alternativeText;
  //alternativeText
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("post-content-container");

  const publishedDate = document.createElement("div");
  publishedDate.classList.add("post-published-date");
  publishedDate.textContent = "Published: ";
  const publishSpan = document.createElement("span");

  const newDateObj = new Date(data.attributes.published);

  const day = newDateObj.getDate();
  const curDay = day > 9 ? day : "0" + day;
  const month = newDateObj.getMonth();
  const curMonth = month > 9 ? month : "0" + month;
  const year = newDateObj.getFullYear();

  publishSpan.textContent = `${curDay}.${curMonth}.${year}`;
  publishedDate.appendChild(publishSpan);

  const name = document.createElement("div");
  name.classList.add("post-name");
  name.textContent = data.attributes.postTitle;

  const text = document.createElement("p");
  text.classList.add("post-text");
  text.textContent = data.attributes.postDescript;

  const button = document.createElement("button");
  button.textContent = "Read more";

  contentContainer.append(publishedDate, name, text, button);
  container.append(img, contentContainer);

  return container;
}
