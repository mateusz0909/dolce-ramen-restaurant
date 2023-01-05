const menuItems = [];
const item = (name, description, price) => {
  return menuItems.push({ name, description, price });
};

const meetRamen = item(
  "Yakitori (paitan)  ",
  "Chicken broth, grilled chicken, grilled corn, egg, roasted leek, roasted spring onions, chives, hot oil, nori",
  "34 PLN"
);
const VegeRamen = item(
  "Tantanmen Classic (paitan) 🌶🌶",
  "Pork broth, spicy pork, spicy oil, grilled pak choy, egg, chives, nori, naruto",
  "55 PLN"
);
const sweetRamen = item(
  "Kinoko Vegan Shoyu (chintan)",
  "Broth based on dashi, won ton mushroom dumplings, oyster mushroom chips, grilled leek, chives, nori",
  "72 PLN"
);

const sweetRamen2 = item(
  "Kinoko Vegan Shoyu (chintan)",
  "Broth based on dashi, won ton mushroom dumplings, oyster mushroom chips, grilled leek, chives, nori",
  "72 PLN"
);

const sweetRamen3 = item(
  "Kinoko Vegan Shoyu (chintan) 🥦",
  "Broth based on dashi, won ton mushroom dumplings, oyster mushroom chips, grilled leek, chives, nori",
  "720 PLN"
);

const menu = () => {
  const menuDiv = document.createElement("div");

  menuItems.forEach((element, i) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `<div class='item-name'><h3>${i + 1}. ${
      element.name
    }</h3><p>${element.description} </p> </div><div class='item-price'><h3> ${
      element.price
    }</h3></div>`;
    menuDiv.appendChild(menuItem);
  });

  return menuDiv;
};

export default menu();
