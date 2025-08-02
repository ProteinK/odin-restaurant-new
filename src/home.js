import pizzaImage from "./images/homepizza.jpg";

const buildHome = () => {
  const result = document.createElement('div');
  result.classList.add("home");

  const h1 = document.createElement('h1');
  h1.textContent = "Welcome to ProteinK's Pizzeria";
  h1.classList.add("home");
  result.appendChild(h1);

  const img = document.createElement("img");
  img.src = pizzaImage;
  img.width = "800";
  img.alt = "A picture of a pizza."
  img.classList.add("home");
  result.appendChild(img);

  const p = document.createElement("p");
  p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt accusamus, nihil, adipisci laboriosam et voluptatum atque sed enim corrupti soluta ab similique possimus natus ducimus molestiae fuga asperiores dolores labore. Quas, vitae molestiae nostrum ullam modi voluptas, perferendis, obcaecati ea consectetur aliquid necessitatibus vel earum atque corporis aut sit assumenda!";
  p.classList.add("home");
  result.appendChild(p);

  return result;
};

export default buildHome;