export default function revealElements(elements) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-element");
        }
      });
    }
    // { rootMargin: "-100px" }
  );

  elements.forEach((ele) => observer.observe(ele));
}
