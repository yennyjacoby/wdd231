document.getElementById("currentyear").textContent = new Date().getFullYear();


const lastModified = new Date(document.lastModified);

document.getElementById("lastmodified").textContent =
  lastModified.toLocaleDateString();