// const btnAll = document.querySelector(".btn-all-cars");
// const btnBmw = document.querySelector(".btn-bmw");
// const btnMercedes = document.querySelector(".btn-mercedes");
// const btnVolkswagen = document.querySelector(".btn-wolksvagen");

// const allCards = document.querySelectorAll(".card");
// const bmw = document.querySelectorAll(".bmw");
// const mercedes = document.querySelectorAll(".mercedes")


// btnBmw.addEventListener("click", function () {

//    bmw.classList.toggle("bmw-show");
// });






// const card = [
//  {
//     id: 1,
//     img: "./img/item-1.jpg",
//     brand: "BMW 328",
//     price: 21500,
//     details: "2014, 2.0 L, 100 000 km",
//     color: "white",
//  },
//  {
//     id: 2,
//     img: "./img/item-2.jpg",
//     brand: "BMW 530",
//     price: 27000,
//     details: "2008, 3.0 L, 188 600 km",
//     color: "black",
//  },
//  {
//     id: 3,
//     img: "./img/item-3.jpg",
//     brand: "BMW 528",
//     price: 33900,
//     details: "2013, 2.0 L, 137 000 km",
//     color: "black",
//  },
//  {
//     id: 4,
//     img: "./img/item-4.jpg",
//     brand: "Mercedes E 320",
//     price: 20500,
//     details: "2004, 3.2 L, 400 000 km",
//     color: "black",
//  },
//  {
//     id: 5,
//     img: "./img/item-5.jpg",
//     brand: "Mercedes E 200",
//     price: 27400,
//     details: "2011, 2.0 L, 199 500 km",
//     color: "black",
//  },
//  {
//     id: 6,
//     img: "./img/item-6.jpg",
//     brand: "Mercedes E 220",
//     price: 42300,
//     details: "2014, 2.2 L, 177 000 km",
//     color: "white",
//  },
//  {
//     id: 7,
//     img: "./img/item-7.jpg",
//     brand: "Volkswagen Golf",
//     price: 17000,
//     details: "2011, 1.6 L, 142 200 km",
//     color: "blue",
//  },
//  {
//     id: 8,
//     img: "./img/item-8.jpg",
//     brand: "Volkswagen Jetta",
//     price: 11900,
//     details: "2010, 1.6 L, 150 000 km",
//     color: "white",
//  },
//  {
//     id: 9,
//     img: "./img/item-9.jpg",
//     brand: "Volkswagen Polo",
//     price: 30700,
//     details: "2021, 1.6 L, 20 000 km",
//     color: "white",
//  },   
// ];

// const cardsSection = document.querySelector("#cards-section");
// const container = document.querySelector(".container");
// const row = document.querySelector(".row");
// container.appendChild(row);

// window.addEventListener("DOMContentLoaded", function() {
//     let displayMenu = card.map(function(item) {
//         return `<div class="col-4">
//                 <div class="card ">
//                     <div class="card__top">
//                         <img src="${item.img}" alt="Nissan Note">
//                         <div class="icon-heart"></div>
//                     </div>
//                     <div class="card__bottom">
//                         <div class="d-flex justify-content-between">
//                             <div class="d-flex flex-column">
//                                 <div class="card__brand">
//                                     Nissan Note
//                                 </div>
//                             </div>
//                             <span class="card__price">12000 Azn</span>
//                         </div>
//                         <div>
//                             <h6 class="card__common-header" style="margin-top: 16px; margin-bottom: 8px;">Details</h6>
//                             <span class="card__secondary-text">2013, 1.2 L, 46000 km</span>
//                         </div>
//                         <div>
//                             <h6 class="card__common-header" style="margin-top: 16px; margin-bottom: 8px;">Color</h6>
//                             <span class="card__color-circle bg-red"></span>
//                         </div>
//                     </div>
//                 </div>
//             </div>`;
//     });

//     displayMenu = displayMenu.join("");
//     console.log(displayMenu);
  
//     cardsSection.innerHTML = displayMenu;
// });