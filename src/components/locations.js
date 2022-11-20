const locations = () => {
  const map = document.createElement("div");
  map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4241.363623351223!2d21.01399771803679!3d52.18626055143728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471932d5e8295551%3A0x23ae8f9c6ff3c2d8!2sTVP%20Telewizja%20Polska!5e0!3m2!1spl!2spl!4v1668945694427!5m2!1spl!2spl" width="400" height="300" style="border:0;" allowfullscreen=""  referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  map.classList.add("locations");
  return map;
};

export default locations();
