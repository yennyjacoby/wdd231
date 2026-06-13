const userInfo = new URLSearchParams(window.location.search);

document.querySelector('#thanks').innerHTML = `
<p>Thank you, ${userInfo.get('fname')} ${userInfo.get('lname')}. Your message has been received. We will contact you at the following email: ${userInfo.get('email')} for more information about ${userInfo.get('trip')} trip.</p>`

const raw = userInfo.get("timestamp");
const date = new Date(raw);

document.getElementById("submittedDate").textContent =
  date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
