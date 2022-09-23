document.addEventListener("DOMContentLoaded", onLoad, false);

function onLoad(event) {
  const hash = event.target.location.hash || "#home";
  console.log("Initializing the app at:", hash);

  const anchors = document.getElementById("main-menu").children;
  for (let idx = 0; idx < anchors.length; idx++) {
    anchors[idx].addEventListener("click", onNavClick);

    if (anchors[idx].hash === hash) {
      anchors[idx].click();
    }
  }
}

function onNavClick(event) {
  const anchor = event.target;
  console.log("Navigating to:", anchor.hash);

  const pages = document.getElementsByClassName("page-contents");
  for (let idx = 0; idx < pages.length; idx++) {
    pages[idx].classList.add("hidden");
  }

  document.getElementById(anchor.hash).classList.remove("hidden");
}
