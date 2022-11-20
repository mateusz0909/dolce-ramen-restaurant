const locations = () => {
  const hamburger = document.createElement("div");
  hamburger.innerHTML = `<button class="hamburger hamburger--collapse" type="button">
<span class="hamburger-box">
  <span class="hamburger-inner"></span>
</span>
</button>`;
  hamburger.classList.add("hamburger-container");
  return hamburger;
};

export default locations();
