import { showLoader, hideLoader } from "./loader.js";

// Inject loader HTML immediately
(async function () {
  const res = await fetch("./loader.html");
  const html = await res.text();

  document.getElementById("loader-container").innerHTML = html;

  // SHOW loader instantly
  showLoader();
})();

// Hide loader when page is fully loaded
window.addEventListener("load", () => {
  hideLoader();
});
