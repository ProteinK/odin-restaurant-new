import "./styles.css";
import buildHome from "./home.js";
import buildMenu from "./menu.js";
import buildAbout from "./about.js";

const buildPage = (pageType) => {
  const contentDiv = document.querySelector('#content');

  // reset page
  contentDiv.innerHTML = "";

  let page;

  switch (pageType) {
    case "home":
      page = buildHome();
      break;
    case "menu":
      page = buildMenu();
      break;
    case "about":
      page = buildAbout();
      break;
    default:
      throw new Error(`unrecognized page ${pageType}`);
  }

  contentDiv.appendChild(page);
};

(() => {
  const buttons = document.querySelectorAll("nav>button");

  const handleButtons = (e) => {
    buttons.forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    buildPage(e.target.id);
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", handleButtons);
  });
})();

buildPage("home");
