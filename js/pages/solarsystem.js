/* CANVAS */

const canvas = document.getElementById("paper");
const pen = canvas.getContext("2d");

function createAnimatedDot(
  radius,
  dotSpeed,
  imageSrc,
  reverseDirection = false,
  dotSize = 10
) {
  const image = new Image();
  image.src = imageSrc;

  return {
    radius,
    dotSpeed: reverseDirection ? -dotSpeed : dotSpeed,
    image,
    angle: Math.random() * Math.PI * 2,
    dotSize,
  };
}

function drawCircle(x, y, radius, color) {
  pen.beginPath();
  pen.arc(x, y, radius, 0, Math.PI * 2);
  pen.strokeStyle = color;
  pen.lineWidth = 2;
  pen.stroke();
  pen.closePath();
}

function drawImage(x, y, image, size) {
  pen.drawImage(image, x - size / 2, y - size / 2, size, size);
}

function clearCanvas() {
  pen.clearRect(0, 0, canvas.width, canvas.height);
}

function animateDot(dot, centerX, centerY) {
  const x = centerX + dot.radius * Math.cos(dot.angle);
  const y = centerY + dot.radius * Math.sin(dot.angle);

  drawCircle(centerX, centerY, dot.radius, "#222");
  drawImage(x, y, dot.image, dot.dotSize);

  dot.angle += 2 * Math.PI * dot.dotSpeed;
}

function animate(circles) {
  clearCanvas();

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  const sizeSun = window.innerWidth >= 1000 ? 140 : 60;

  const image = new Image();

  image.src = "../images/sun.png";

  pen.drawImage(
    image,
    centerX - sizeSun / 2,
    centerY - sizeSun / 2,
    sizeSun,
    sizeSun
  );

  circles.forEach((dot) => {
    animateDot(dot, centerX, centerY);
  });

  requestAnimationFrame(() => animate(circles));
}

const circles = [];

// Create each dot with desired parameters including dot size and image source
if (window.innerWidth >= 1000) {
  circles.push(
    createAnimatedDot(
      120,
      1 / 2500,
      "../images/solar-system/solar_mercury.png",
      true,
      75
    )
  );
  circles.push(
    createAnimatedDot(
      180,
      1 / 4000,
      "../images/solar-system/solar_venus.png",
      false,
      100
    )
  );

  circles.push(
    createAnimatedDot(
      240,
      1 / 4500,
      "../images/solar-system/solar_earth.png",
      true,
      100
    )
  );

  circles.push(
    createAnimatedDot(
      300,
      1 / 6500,
      "../images/solar-system/solar_mars.png",
      true,
      90
    )
  );

  circles.push(
    createAnimatedDot(
      360,
      1 / 10000,
      "../images/solar-system/solar_jupiter.png",
      true,
      120
    )
  );

  circles.push(
    createAnimatedDot(
      420,
      1 / 13000,
      "../images/solar-system/solar_saturn.png",
      true,
      140
    )
  );

  circles.push(
    createAnimatedDot(
      480,
      1 / 20000,
      "../images/solar-system/solar_uranus.png",
      false,
      125
    )
  );

  circles.push(
    createAnimatedDot(
      540,
      1 / 25000,
      "../images/solar-system/solar_neptune.png",
      true,
      115
    )
  );

  // Call the animate function with the array of circles

  //
} else if (window.innerWidth >= 700) {
  canvas.width = 800;
  canvas.height = 800;

  circles.push(
    createAnimatedDot(
      60,
      1 / 2500,
      "../images/solar-system/solar_mercury.png",
      true,
      40
    )
  );
  circles.push(
    createAnimatedDot(
      100,
      1 / 4000,
      "../images/solar-system/solar_venus.png",
      false,
      60
    )
  );

  circles.push(
    createAnimatedDot(
      140,
      1 / 4500,
      "../images/solar-system/solar_earth.png",
      true,
      60
    )
  );

  circles.push(
    createAnimatedDot(
      180,
      1 / 6500,
      "../images/solar-system/solar_mars.png",
      true,
      55
    )
  );

  circles.push(
    createAnimatedDot(
      220,
      1 / 10000,
      "../images/solar-system/solar_jupiter.png",
      true,
      75
    )
  );

  circles.push(
    createAnimatedDot(
      260,
      1 / 13000,
      "../images/solar-system/solar_saturn.png",
      true,
      80
    )
  );

  circles.push(
    createAnimatedDot(
      300,
      1 / 20000,
      "../images/solar-system/solar_uranus.png",
      false,
      65
    )
  );

  circles.push(
    createAnimatedDot(
      340,
      1 / 25000,
      "../images/solar-system/solar_neptune.png",
      true,
      60
    )
  );
} else {
  canvas.width = 400;
  canvas.height = 400;
  circles.push(
    createAnimatedDot(
      40,
      1 / 2500,
      "../images/solar-system/solar_mercury.png",
      true,
      30
    )
  );
  circles.push(
    createAnimatedDot(
      60,
      1 / 4000,
      "../images/solar-system/solar_venus.png",
      false,
      45
    )
  );

  circles.push(
    createAnimatedDot(
      80,
      1 / 4500,
      "../images/solar-system/solar_earth.png",
      true,
      45
    )
  );

  circles.push(
    createAnimatedDot(
      100,
      1 / 6500,
      "../images/solar-system/solar_mars.png",
      true,
      40
    )
  );

  circles.push(
    createAnimatedDot(
      120,
      1 / 10000,
      "../images/solar-system/solar_jupiter.png",
      true,
      50
    )
  );

  circles.push(
    createAnimatedDot(
      140,
      1 / 13000,
      "../images/solar-system/solar_saturn.png",
      true,
      60
    )
  );

  circles.push(
    createAnimatedDot(
      160,
      1 / 20000,
      "../images/solar-system/solar_uranus.png",
      false,
      50
    )
  );

  circles.push(
    createAnimatedDot(
      180,
      1 / 25000,
      "../images/solar-system/solar_neptune.png",
      true,
      45
    )
  );
}
animate(circles);

/* PLANETS */
import smallPost from "../blogpost/smallPost.js";
import fetchData from "../fetchData.js";
import errorHandling from "../errorhandling.js";

const planetsContainer = document.querySelector(".all-planets-posts");

const [planetData, error] = await fetchData("planets", `?populate=postImg`);
document.querySelector(".loader-container").remove();
if (error) {
  planetsContainer.append(errorHandling(error));
}
planetData.data.forEach((planet) => {
  planetsContainer.append(smallPost(planet));
});
