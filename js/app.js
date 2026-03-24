let data = JSON.parse(localStorage.getItem("menu")) || [];

let menu = document.getElementById("menu");

data.forEach(item => {
  if(item.status === "Available"){
    menu.innerHTML += `
      <div class="card">
        <img src="${item.image}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
      </div>
    `;
  }
});
