const header = () => {
  const element = document.createElement("div");
  const h1 = document.createElement("h1");
  const h4 = document.createElement("h4");
  h1.innerHTML = "<span class='icon'>🉐</span> DOL-CE RAMEN";
  h4.innerHTML =
    "ONLINE ORDERING AVAILABLE FOR BOTH LOCATIONS - MOKO AND PRAGA!";

  element.classList.add("heading");
  element.appendChild(h1);
  element.appendChild(h4);

  return element;
};

export default header();
