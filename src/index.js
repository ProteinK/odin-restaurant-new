import "./styles.css";
import buildHome from "./home.js";

const buildPage = () => {
  const contentDiv = document.querySelector('#content');

  // reset page
  contentDiv.innerHtml = "";

  const homePage = buildHome();

  contentDiv.appendChild(homePage);
};

buildPage();
