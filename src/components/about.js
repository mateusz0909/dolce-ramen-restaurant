const about = () => {
  const aboutDiv = document.createElement("p");
  aboutDiv.innerHTML =
    "Dol-Ce, a ramen restaurant that has been bringing customers from all over Warsaw since its establishment 16 years ago, is celebrating its anniversary with special promotions and events. Starting on the 6th of June until the 16th of July, every Wednesday and Thursday Ku-Raku will be offering 20% off to first time diners. This special deal will include appetizers and non-alcoholic drinks as well as the restaurant’s signature dish, Tonkotsu Ramen.";
  aboutDiv.classList.add("about");
  return aboutDiv;
};

export default about();
