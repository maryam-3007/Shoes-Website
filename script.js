const products = [
    { name: "Nike Air Max", price: "$120", img:"images/Product 1.jpeg" },
    { name: "Adidas Ultraboost", price: "$150", img: "images/Product 2.jpeg" },
    { name: "Puma RS-X", price: "$100", img: "images/Product 3.jpeg" },
    { name: "Reebok Classic", price: "$90", img: "images/Product 4.jpeg" },
    { name: "Adidas Comfy",price: "$130", img:"images/Product 5.jpeg"},
    { name: "Sputnik Sports",price: "$180", img:"images/Product 6.jpeg"},
    { name: "Puma ST-Z",price: "$90", img:"images/Product 7.jpeg"},
    { name: "Sports Classic",price: "$120", img:"images/Product 8.jpeg"},
    { name: "Sputnik New",price: "$210", img:"images/Product 9.jpeg"}
  ];
  
  const container = document.getElementById('product-container');
  const search = document.getElementById('search');
  
  
  function renderProducts(items) {
    container.innerHTML = "";
    items.forEach(product => {
      container.innerHTML += `
        <div class="card">
          <img src="${product.img}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.price}</p>
        </div>
      `;
    });
  }
  
  search.addEventListener("input", () => {
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(search.value.toLowerCase())
    );
    renderProducts(filtered);
  });
  
  renderProducts(products);

  function clearSearch(){
    document.getElementById('search').value='';
    renderProducts(products);
  }