"use strict";

// ===== TEXT HCI =====
const passwordInput = document.getElementById("password-input");
const passwordInstructions = document.getElementById("password-instructions");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  let instructions = "";

  if (password.length < 8)
    instructions += "Password must be at least 8 characters long.<br>";
  if (!/[A-Z]/.test(password))
    instructions += "Include at least one uppercase letter.<br>";
  if (!/[a-z]/.test(password))
    instructions += "Include at least one lowercase letter.<br>";
  if (!/[0-9]/.test(password))
    instructions += "Include at least one number.<br>";
  if (/\s/.test(password)) instructions += "Do not use spaces.<br>";
  if (!/[^A-Za-z0-9]/.test(password))
    instructions += "Include at least one special character.<br>";

  passwordInstructions.innerHTML = instructions || "Password looks good ✅";
});

// ===== COLOR HCI =====
const colorSubmitBtn = document.getElementById("color-submit-btn");
const colorFeedback = document.getElementById("color-feedback");
const colorEmailInput = document.getElementById("color-email-input");

// Form & Sound HCI elements
const userEmailText = document.getElementById("user-email-text");
const soundEmailText = document.getElementById("sound-email-text");

// Update button hover/active colors
colorSubmitBtn.addEventListener("mouseenter", () => {
  colorSubmitBtn.style.backgroundColor = "green";
  colorSubmitBtn.style.color = "white";
});
colorSubmitBtn.addEventListener("mouseleave", () => {
  colorSubmitBtn.style.backgroundColor = "";
  colorSubmitBtn.style.color = "";
});
colorSubmitBtn.addEventListener("click", () => {
  colorSubmitBtn.style.backgroundColor = "black";
  colorSubmitBtn.style.color = "white";
  colorFeedback.textContent = "You have logged in ✅";

  // Update email dynamically in Form and Sound HCI
  const emailValue = colorEmailInput.value || "user@example.com";
  userEmailText.textContent = emailValue;
  soundEmailText.textContent = emailValue;
});

// ===== FORM HCI =====
const deleteBtn = document.getElementById("delete-account-btn");
const deletePopup = document.getElementById("delete-popup");
const popupYes = document.getElementById("popup-yes-btn");
const popupNo = document.getElementById("popup-no-btn");

// Open popup
deleteBtn.addEventListener("click", () => {
  deletePopup.style.display = "flex";
});

// Confirm delete: remove email from both Form and Sound HCI
popupYes.addEventListener("click", () => {
  deletePopup.style.display = "none";
  userEmailText.textContent = "";
  soundEmailText.textContent = "";
  alert("Account deleted");
});

// Cancel delete
popupNo.addEventListener("click", () => {
  deletePopup.style.display = "none";
});

// ===== SOUND HCI =====
const soundDeleteBtn = document.getElementById("sound-delete-btn");
const soundPopup = document.getElementById("sound-popup");
const popupSound = document.getElementById("popup-sound");
const deleteSound = document.getElementById("delete-sound");
const noSound = document.getElementById("no-sound");
const yesBtnSound = document.getElementById("sound-yes-btn");
const noBtnSound = document.getElementById("sound-no-btn");

// Popup + popup sound
soundDeleteBtn.addEventListener("click", () => {
  soundPopup.style.display = "flex";
  popupSound.play();
});

// Yes button: delete sound and clear email
yesBtnSound.addEventListener("click", () => {
  deleteSound.play();
  soundPopup.style.display = "none";
  userEmailText.textContent = "";
  soundEmailText.textContent = "";
  alert("Account deleted");
});

// No button: no sound
noBtnSound.addEventListener("click", () => {
  noSound.play();
  soundPopup.style.display = "none";
});
