const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const buildMenu = () => {
  const result = document.createElement("div");
  result.classList.add("menu");

  const h1 = document.createElement('h1');
  h1.textContent = "Menu";
  h1.classList.add("menu");
  result.appendChild(h1);

  const menu = document.createElement('div');
  menu.classList.add("menuItems");

  for (let i = 0; i < 5; i++) {
    const item = document.createElement("p");
    item.textContent = `Randomly Generated Pizza ${i + 1}`;
    const itemPrice = document.createElement("p");
    const randomPrice = getRandomInt(15, 31);
    itemPrice.textContent = `$${randomPrice}`;

    menu.appendChild(item);
    menu.appendChild(itemPrice);
  }

  result.appendChild(menu);

  return result;
};

export default buildMenu;