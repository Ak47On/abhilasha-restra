let data = [
  {
    name: "Paneer Chilli",
    price: 200,
    image: "https://source.unsplash.com/400x300/?paneer"
  },
  {
    name: "Veg Manchurian",
    price: 170,
    image: "https://source.unsplash.com/400x300/?manchurian"
  },
  {
    name: "Hakka Noodles",
    price: 150,
    image: "https://source.unsplash.com/400x300/?noodles"
  },
  {
    name: "Veg Thali",
    price: 180,
    image: "https://source.unsplash.com/400x300/?indian,thali"
  }
];

let container = document.getElementById("menu-container");

data.forEach(item => {
  container.innerHTML += `
    <div class="card">
      <img src="${item.image}">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
    </div>
  `;
});
