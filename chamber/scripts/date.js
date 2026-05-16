const lastModified = new Date(document.lastModified);

document.getElementById("lastUpdated").textContent = lastModified.toLocaleString("en-US", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12:false

});