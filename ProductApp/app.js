// let suppose we have Array of products

let products = [{
    productName: ' Apple iPhone-8',
    image: "./images/apple_iphone_8.jpg",
    isLiked: false,
    tag: "oldPhones ",
    price: " Rs. 36,000"
  },
  {
    productName: ' Apple iPhone-6',
    image: "./images/iphone-6.jpg",
    isLiked: false,
    tag: "oldPhones ",
    price: " Rs. 12,000"
  },
  {
    productName: 'Apple iPhone-XR',
    image: "./images/iphone-XR.jpg",
    isLiked: false,
    tag: "oldPhones ",
    price: " Rs. 100,000"
  },
  {
    productName: " Apple iPhone-12",
    image: "./images/iPhone-12-pro-blue.png",
    isLiked: true,
    tag: "newPhones ",
    price: " Rs. 200,000"
  },
  {
    productName: "Apple iPhone-11",
    image: "./images/Apple-iPhone-11-1.jpg",
    isLiked: true,
    tag: "newPhones",
    price: " Rs. 100,000"
  },
  {
    productName: "Apple iPhone-13",
    image: "./images/apple-iphone-13.jpg",
    isLiked: true,
    tag: "newPhones",
    price: " Rs. 350,000"
  },
  {
    productName: "Apple iPhone-6s/5s",
    image: "./images/iphone-6s-iphone-6-iphone-5s.jpg",
    isLiked: false,
    tag: "oldPhones",
    price: " Rs. 16,000"
  },
  {
    productName: "Apple iPod",
    image: "./images/ipod-blue.jpg",
    isLiked: true,
    tag: "newPhones",
    price: " Rs. 20,000"
  },
  {
    productName: "iPhone charger",
    image: "./images/iphone-charger.jpg",
    isLiked: false,
    tag: "charger",
    price: " Rs. 6,000"
  },
  {
    productName: "iPhone charger",
    image: "./images/iphone-pack-4.jpg",
    isLiked: true,
    tag: "charger",
    price: " Rs. 5,000"
  },
  {
    productName: "iPhone charger",
    image: "./images/charger-iphone.jpg",
    isLiked: false,
    tag: "charger",
    price: " Rs. 6,000"
  },
  {
    productName: "iPhone charger",
    image: "./images/iphone.jpg",
    isLiked: true,
    tag: "charger",
    price: " Rs. 7,000"
  },
  {
    productName: "iPhone charger",
    image: "./images/iphone-11-pro-charger.jpg",
    isLiked: false,
    tag: "charger",
    price: " Rs. 6,000"
  }
  ];
  
  // declare a function for products
  
  function ProductTemplate(myProducts) {
  return `
  <div class="cards">
  <i class="fa fa-heart" aria-hidden="true"></i>
  <div class="img">
  <img src="${myProducts.image}">
  </div>
  <h4 >${myProducts.productName} </h4>
  <a href="">Add to Cart</a>
  <h3>${myProducts.price}</h3>
  </div>
  `;
  }

  
  
  document.getElementById("filteredItems").innerHTML += `${products.map(ProductTemplate).join('')}
  `;
  
 

  /* functions for filter all those products which are selected by user */
  
  function getProduct(userSelected) {
  let selectedItemsArray = products.filter(myProduct);
      
    
  function myProduct(myProducts) {
    if (myProducts.tag == userSelected) {
        return document.getElementById("filteredItems").innerHTML = `${products.map(ProductTemplate).join('')}`;
  
    }
  }
  document.getElementById("filteredItems").innerHTML = `${selectedItemsArray.map(ProductTemplate).join('')} `;
 }
