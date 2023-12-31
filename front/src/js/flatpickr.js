import flatpickr from "flatpickr";

const toggles = document.querySelectorAll("[data-flatpickr]");

toggles.forEach((toggle) => {
  const options = toggle.dataset.flatpickr
    ? JSON.parse(toggle.dataset.flatpickr)
    : {};

  // enableTime 옵션 추가
  options.enableTime = true;

  flatpickr(toggle, options);
});

// Make available globally
window.flatpickr = flatpickr;
