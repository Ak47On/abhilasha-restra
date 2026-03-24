fetch('data/menu.json')
  .then(res => res.json())
  .then(data => {
    let container = document.getElementById('menu-container');

    data.forEach(item => {
      if(item.status === "Available"){
        container.innerHTML += `
          <div class="card">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
          </div>
        `;
      }
    });
  });
