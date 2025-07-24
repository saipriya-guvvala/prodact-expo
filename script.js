let products = [{
    "name": "phone",
    "desc": "High-quality noise-cancelling headphones with Bluetooth connectivity.",
    "price": 89.99,
    "qty": 150,
    "id" : 1,
    "image": "./images1/1.png"
  },
  {
    "name": "TV",
    "id" : 2,
    "desc": "Latest smartphone with 128GB storage, 5G, and a 48MP camera.",
    "price": 699.99,
    "qty": 200,
    "image": "./images1/2.png"
  },
  {
    "name": "mouse",
    "id" : 3,
    "desc": "Ultra-lightweight laptop with 16GB RAM, 512GB SSD, and a 13-inch display.",
    "price": 1299.99,
    "qty": 50,
    "image": "./images1/3.png"
  },
  {
    "name": "laptop",
    "id" : 4,
    "desc": "Portable waterproof Bluetooth speaker with deep bass and 12 hours battery life.",
    "price": 59.99,
    "qty": 300,
    "image": "./images1/4.png"
  },
  {
    "name": "Smartwatch",
    "id" : 5,
    "desc": "Fitness tracking smartwatch with heart-rate monitor and GPS functionality.",
    "price": 199.99,
    "qty": 120,
    "image": "./images1/5.png"
  },
    {
    "name": "Scooty",
    "id" : 6,
    "desc": "Latest smartphone with 128GB storage, 5G, and a 48MP camera.",
    "price": 699.99,
    "qty": 200,
    "image": "./images1/6.png"
  },
  {
    "name": "water bottle",
    "id" : 7,
    "desc": "Ultra-lightweight laptop with 16GB RAM, 512GB SSD, and a 13-inch display.",
    "price": 1299.99,
    "qty": 50,
    "image": "./images1/7.png"
  },
  {
    "id" : 8,
    "name": "buds",
    "desc": "Portable waterproof Bluetooth speaker with deep bass and 12 hours battery life.",
    "price": 59.99,
    "qty": 300,
    "image": "./images1/8.png"
  }];
const cardContainer = document.querySelector('.card-container');

let filterProducts = () => {
    const searchText = document.querySelector('#search');
    if (searchText.value === "") {
        displayCards()
        return
    }
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchText.value.toLowerCase())
    })
    displayFilteredProducts(filteredProducts)
}

let displayFilteredProducts = (products) => {
    cardContainer.innerHTML =""
    products.forEach((product) => {
        const card = createCard(product);
        cardContainer.appendChild(card);
    })
}

let createCard = (product) => {
    const card = document.createElement('div');
    card.classList.add('card');

    // Create Name, Image & Price
    const h2 = document.createElement('h2');
    h2.textContent = product.name;
    const img = document.createElement('img');
    img.src = product.image;
    const p = document.createElement('p');
    p.textContent = product.price;

    const icon = document.createElement('i')
    icon.classList.add('ri-delete-bin-7-line')
    icon.classList.add('d-none')
    icon.setAttribute('id', product.id)

    icon.addEventListener('click', (event) => {
        const productId = event.target.id;
        const removeIndex = products.findIndex((ele) => ele.id == productId)
        products.splice(removeIndex, 1);
        displayCards()
        // card.remove();
    })

    card.appendChild(h2);
    card.appendChild(img)
    card.appendChild(p);
    card.appendChild(icon)

    return card;
}

let displayCards = () => {
    cardContainer.innerHTML =""
    products.forEach((product) => {
        const card = createCard(product);
        cardContainer.appendChild(card);
    })
}



 displayCards();