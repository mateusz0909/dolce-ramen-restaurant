const navBar = () => {
  const nav = document.createElement("div");
  nav.classList.add("navbar");
  const menu = document.createElement("button");
  const about = document.createElement("button");
  const locations = document.createElement("button");
  const order = document.createElement("button");
  const icon = document.createElement("span");

  menu.innerHTML = "MENU";
  about.innerHTML = "ABOUT";
  locations.innerHTML = "LOCATIONS";
  order.innerHTML = "ORDER ONLINE";
  icon.innerHTML = "🉐";

  menu.classList.add("menu-btn");
  about.classList.add("about-btn");
  locations.classList.add("locations-btn");
  order.classList.add("order-btn");

  order.classList.add("order-btn");

  nav.appendChild(icon);
  nav.appendChild(menu);
  nav.appendChild(about);
  nav.appendChild(locations);
  nav.appendChild(order);

  return nav;
};
export default navBar();
