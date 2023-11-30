// const showFaqBtn = document.querySelector(".show-faqs");
const contactForm = document.querySelector(".contact-form");

// showFaqBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   contactForm.style.transform = "translateX(-100%)";
// });

// CONTACT FORM
const nameInput = document.getElementById("contact-name");
const emailInput = document.getElementById("contact-email");
const subjectInput = document.getElementById("contact-subject");
const messageInput = document.getElementById("contact-message");
const SendBtn = document.getElementById("send-btn");

let nameValid = false;
let emailValid = false;
let subjectValid = false;
let messageValid = false;
let numberClicks = 0;

// NAME
nameInput.addEventListener("blur", (e) => {
  if (e.target.value.length === 0) return;
  const errorMessage = e.target.parentElement.querySelector(".error-message");
  let displayValue = e.target.value.length >= 5 ? "none" : "flex";
  nameValid = e.target.value.length >= 5 ? true : false;
  errorMessage.style.display = displayValue;
});

nameInput.addEventListener("input", (e) => {
  if (e.target.value.length <= 0) {
    e.target.parentElement.querySelector(".error-message").style.display =
      "flex";
    setTimeout(() => {
      e.target.parentElement.querySelector(".error-message").style.display =
        "none";
    }, 2000);
  }
});

//EMAIL
emailInput.addEventListener("blur", (e) => {
  if (e.target.value.length === 0) return;
  const errorMessage = e.target.parentElement.querySelector(".error-message");
  let displayValue =
    e.target.value.includes(".") &&
    e.target.value.includes("@") &&
    e.target.value.length > 6
      ? "none"
      : "flex";
  emailValid = displayValue === "flex" ? false : true;
  console.log(emailValid);
  errorMessage.style.display = displayValue;
});

emailInput.addEventListener("input", (e) => {
  if (e.target.value.length <= 0) {
    e.target.parentElement.querySelector(".error-message").style.display =
      "flex";
    setTimeout(() => {
      e.target.parentElement.querySelector(".error-message").style.display =
        "none";
    }, 2000);
  }
});

// SUBJECT
subjectInput.addEventListener("blur", (e) => {
  if (e.target.value.length === 0) return;
  const errorMessage = e.target.parentElement.querySelector(".error-message");
  let displayValue = e.target.value.length >= 15 ? "none" : "flex";
  errorMessage.style.display = displayValue;
  subjectValid = e.target.value.length >= 15 ? true : false;
});

subjectInput.addEventListener("input", (e) => {
  if (e.target.value.length <= 0) {
    e.target.parentElement.querySelector(".error-message").style.display =
      "flex";
    setTimeout(() => {
      e.target.parentElement.querySelector(".error-message").style.display =
        "none";
    }, 2000);
  }
});

// MESSAGE
messageInput.addEventListener("blur", (e) => {
  if (e.target.value.length === 0) return;
  const errorMessage = e.target.parentElement.querySelector(".error-message");
  let displayValue = e.target.value.length >= 15 ? "none" : "flex";
  errorMessage.style.display = displayValue;
  messageValid = e.target.value.length >= 15 ? true : false;
});

messageInput.addEventListener("input", (e) => {
  if (e.target.value.length <= 0) {
    e.target.parentElement.querySelector(".error-message").style.display =
      "flex";
    setTimeout(() => {
      e.target.parentElement.querySelector(".error-message").style.display =
        "none";
    }, 2000);
  }
});

// send button
SendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (nameValid && emailValid && subjectValid && messageValid) {
    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";
    contactForm.classList.add("message-sent");
    setTimeout(() => {
      contactForm.classList.remove("message-sent");
    }, 3000);
  } else {
    if (!nameValid) {
      nameInput.parentElement.querySelector(".error-message").style.display =
        "flex";
    }
    if (!emailValid) {
      emailInput.parentElement.querySelector(".error-message").style.display =
        "flex";
    }
    if (!subjectValid) {
      subjectInput.parentElement.querySelector(".error-message").style.display =
        "flex";
    }
    if (!messageValid) {
      messageInput.parentElement.querySelector(".error-message").style.display =
        "flex";
    }
  }
});

// UNIVERSE CLUB

const clubEmail = document.querySelector(".universe-club-input");
const clubBtn = document.querySelector(".universe-club-btn");
const clubError = document.querySelector(".club-error");

clubBtn.addEventListener("click", (e) => {
  if (clubEmail.value.includes("@") && clubEmail.value.includes(".")) {
  }
});
