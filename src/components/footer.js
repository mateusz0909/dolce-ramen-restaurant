import Icon from "../assets/github-icon.png";

const footer = () => {
  const footerDiv = document.createElement("footer");
  const content = document.createElement("p");
  content.innerHTML = `Made with ❤️ in Warsaw | <a href="https://github.com/mateusz0909/dolce-ramen-restaurant" target='_blank'>
  <span style='margin-left:0.3em;margin-right:0.3em;height:1.5em'> 
   <img src="${Icon}" class='gh-logo' alt="icon" ">
  </span>
</a> mateusz0909`;
  footerDiv.classList.add("footer");
  footerDiv.appendChild(content);
  return footerDiv;
};

export default footer();
