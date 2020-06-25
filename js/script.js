/* FeedbackPopup */

var feedbackLink = document.querySelector(".button-write");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".feedback-close");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var feedbackName = feedbackPopup.querySelector(".feedback-form-name");
var feedbackMail = feedbackPopup.querySelector(".feedback-form-email");
var feedbackText = feedbackPopup.querySelector(".feedback-form-area");

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  feedbackName.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value) {
    evt.preventDefault();
    feedbackName.classList.add("feedback-form-error");
  } else {
    feedbackName.classList.remove("feedback-form-error");
  }
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackMail.value) {
    evt.preventDefault();
    feedbackMail.classList.add("feedback-form-error");
  } else {
    feedbackMail.classList.remove("feedback-form-error");
  }
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackText.value) {
    evt.preventDefault();
    feedbackText.classList.add("feedback-form-error");
  } else {
    feedbackText.classList.remove("feedback-form-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
    }
  }
});

/* Slider */

var control1 = document.querySelector(".slider-control-1");
var control2 = document.querySelector(".slider-control-2");
var control3 = document.querySelector(".slider-control-3");
var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");
var slide3 = document.querySelector(".slide-3");


control1.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide1.classList.remove("visually-hidden");
  slide2.classList.add("visually-hidden");
  slide3.classList.add("visually-hidden");

  control1.classList.add("slider-control-active");
  control2.classList.remove("slider-control-active");
  control3.classList.remove("slider-control-active");
});

control2.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide2.classList.remove("visually-hidden");
  slide1.classList.add("visually-hidden");
  slide3.classList.add("visually-hidden");

  control2.classList.add("slider-control-active");
  control1.classList.remove("slider-control-active");
  control3.classList.remove("slider-control-active");
});

control3.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide3.classList.remove("visually-hidden");
  slide1.classList.add("visually-hidden");
  slide2.classList.add("visually-hidden");

  control3.classList.add("slider-control-active");
  control1.classList.remove("slider-control-active");
  control2.classList.remove("slider-control-active");
});
