// Photo by <a href="https://unsplash.com/@alanaktion?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alan Hardman</a> on <a href="https://unsplash.com/photos/pepperoni-pizza-SU1LFoeEUkk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

const buildAbout = () => {
  const result = document.createElement("div");
  result.classList.add("about");

  const h1 = document.createElement('h1');
  h1.textContent = "About";
  h1.classList.add("about");
  result.appendChild(h1);

  const authorP = document.createElement("p");
  authorP.innerHTML = 'Created by <a href="https://github.com/ProteinK">ProteinK</a>';
  result.appendChild(authorP);

  const creditsP = document.createElement("p");
  creditsP.innerHTML = 'Photo by <a href="https://unsplash.com/@alanaktion?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alan Hardman</a> on <a href="https://unsplash.com/photos/pepperoni-pizza-SU1LFoeEUkk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
  result.appendChild(creditsP);

  return result;
};

export default buildAbout;