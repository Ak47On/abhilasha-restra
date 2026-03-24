function add(){
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let status = document.getElementById("status").value;
  let image = document.getElementById("image").value;

  let data = JSON.parse(localStorage.getItem("menu")) || [];

  data.push({
    name: name,
    price: price,
    status: status,
    image: image
  });

  localStorage.setItem("menu", JSON.stringify(data));

  alert("Item Added ✅");
}
