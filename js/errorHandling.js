export default function errorHandling(error) {
  const errorContainer = document.createElement("div");
  errorContainer.classList.add("errorhandling-container");
  const errorText = document.createElement("p");
  errorText.textContent = '"' + error + '"';
  const errorTips = document.createElement("p");
  errorTips.textContent = "Please try again later";
  errorContainer.textContent =
    "We encountered an error loading this content.. ";
  errorContainer.append(errorText, errorTips);
  return errorContainer;
}
