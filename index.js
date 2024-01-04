const feature = [
    {
        id: 1,
        label: "GIFT FOR ALL",
        imgUrl: "./images/future_1.webp"
    }, {
        id: 2,
        label: "GIFT FOR HIM",
        imgUrl: "./images/future-2.webp"
    }, {
        id: 3,
        label: "GIFT FOR HER",
        imgUrl: "./images/future-3.webp"
    }, {
        id: 4,
        label: "GIFT FOR KIDS",
        imgUrl: "./images/future_4.webp"
    }
];

document
    .getElementById("feature")
    .innerHTML = feature
    .map(
        (item) => `<div class="col mb-5">
            <div class="card m-auto" style="width: 18rem; min-height: 300px">
            <img src="${item.imgUrl}" class="card-img-top" alt="...">
          </div>
          </div>`
    )

const product = [
    {
        id: 1,
        productName: "Classic Slip-On Sherpa Shoe",
        img: "images/1.webp",
        price: 7500
    }, {
        id: 2,
        productName: "UltraRange EXO Shoe",
        img: "images/2.webp",
        price: 10000
    }, {
        id: 3,
        productName: "Sk8-Hi MTE-2 Shoe",
        img: "images/3.webp",
        price: 15000
    }, {
        id: 4,
        productName: "Classic Slip-On Checkerboard Shoe",
        img: "images/4.webp",
        price: 6500
    }, {
        id: 5,
        productName: "Sk8-Hi MTE-2 Shoe",
        img: "images/5.webp",
        price: 15500
    }, {
        id: 6,
        productName: "UltraRange EXO Hi MTE-3 Shoe",
        img: "images/6.webp",
        price: 155
    }, {
        id: 7,
        productName: "Sk8-Hi Tapered Shoe",
        img: "images/7.webp",
        price: 15500
    }, {
        id: 8,
        productName: "Sk8-Low Sport Shoe",
        img: "images/8.webp",
        price: 15500
    }
];

document
    .getElementById("product")
    .innerHTML = product
    .map(
        (item) => `<div class="col mb-5">
            <div class="card border-0 m-auto" style="width: 18rem; min-height: 300px">
            <img src="${item.img}" class="shadow card-img-top mb-2 img-fluid" alt="...">
            <h5 class="my-3">${item.productName}</h5>
            <p class="card-text">$${item.price}</p>
          </div>
          </div>`
    )

const product1 = [
    {
        id: 1,
        productName: "Old Scholl",
        img: "images/11.webp",
        price: 7000,
        link: 'detail.html'
    }, {
        id: 2,
        productName: "Classic Slip-On",
        img: "images/12.webp",
        price: 6000,
        link: 'detail.html'
    }, {
        id: 3,
        productName: "Authentic Shoe",
        img: "images/13.webp",
        price: 1,
        link: 'detail.html'
    }, {
        id: 4,
        productName: "Sk-8Hi Shoe",
        img: "images/14.webp",
        price: 7500,
        link: 'detail.html'
    }, {
        id: 5,
        productName: "Old Scholl Shoe",
        img: "images/15.webp",
        price: 7000,
        link: 'detail.html'
    }, {
        id: 6,
        productName: "Authentic Shoe",
        img: "images/17.webp",
        price: 5500,
        link: 'detail.html'
    }, {
        id: 7,
        productName: "Era Shoe",
        img: "images/18.webp",
        price: 5500,
        link: 'detail.html'
    }, {
        id: 8,
        productName: "Sk8-Low Sport Shoe",
        img: "images/8.webp",
        price: 15500,
        link: 'detail.html'
    }
];

document
    .getElementById("product1")
    .innerHTML = product1
    .map(
        (item) => `<div class="col mb-5">
        <div class="card border-0 m-auto" style="width: 18rem; min-height: 300px">
        <img src="${item.img}" class="shadow card-img-top mb-2" alt="...">
        <a href="${item.link}">
        <h5 class="my-3">${item.productName}</h5>
        </a>
        <p class="card-text">$${item.price}</p>
      </div>
      </div>`
    )
