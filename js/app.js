let data = JSON.parse(localStorage.getItem("menu"));

if(!data || data.length === 0){
  data = [
    {
      name: "Paneer Chilli",
      price: 200,
      status: "Available",
      image: "https://source.unsplash.com/600x400/?paneer"
    },
    {
      name: "Veg Manchurian",
      price: 170,
      status: "Available",
      image: "https://source.unsplash.com/600x400/?manchurian"
    },
    {
      name: "Hakka Noodles",
      price: 150,
      status: "Available",
      image: "https://source.unsplash.com/600x400/?noodles"
    }
  ];
}

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
