function addItem(){
  let name = document.getElementById('name').value;
  let price = document.getElementById('price').value;
  let status = document.getElementById('status').value;

  let newItem = {
    name: name,
    price: price,
    status: status
  };

  fetch('data/menu.json')
    .then(res => res.json())
    .then(data => {
      data.push(newItem);

      fetch('data/menu.json', {
        method: 'POST',
        body: JSON.stringify(data)
      });

      alert("Item Added");
    });
}
