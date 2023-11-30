const cors = "https://noroffcors.onrender.com/";
const url = "https://api-universe-blog-aae1552e76b3.herokuapp.com/api/";

export default async function fetchData(type, pop = "") {
  try {
    const response = await fetch(`${cors + url + type}/${pop}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return [data, null];
  } catch (error) {
    console.error("An error occurred during fetch:", error);
    return [null, error];
  }
}
