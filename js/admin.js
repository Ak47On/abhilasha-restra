function add(){
  let name = document.getElementById("name").value.trim();
  let price = document.getElementById("price").value.trim();
  let status = document.getElementById("status").value;

  // 🔴 Validation
  if(name === "" || price === ""){
    alert("Please fill all fields ❌");
    return;
  }

  // 🧠 Smart Image Logic (auto detect)
  let image = "https://source.unsplash.com/600x400/?food";

  let n = name.toLowerCase();

  if(n.includes("paneer")){
    image = "https://source.unsplash.com/600x400/?paneer";
  }
  else if(n.includes("noodle")){
    image = "https://source.unsplash.com/600x400/?noodles";
  }
  else if(n.includes("manchurian")){
    image = "https://source.unsplash.com/600x400/?manchurian";
  }
  else if(n.includes("thali")){
    image = "https://source.unsplash.com/600x400/?indian,thali";
  }
  else if(n.includes("rice")){
    image = "https://source.unsplash.com/600x400/?fried,rice";
  }

  // 📦 LocalStorage Data
  let data = JSON.parse(localStorage.getItem("menu")) || [];

  data.push({
    name: name,
    price: price,
    status: status,
    image: image
  });

  localStorage.setItem("menu", JSON.stringify(data));

  // ✅ Reset fields
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";

  alert("Item Added Successfully ✅");
}
