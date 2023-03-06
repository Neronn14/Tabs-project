// (function(){
//     const Btns = document.querySelectorAll(".btn");
//     const cards = document.querySelectorAll(".card");
    
//     Btns.forEach((Btn) => {
//         Btn.addEventListener("click", (e) => {
//             e.preventDefault();
//             const filter = e.target.dataset.filter;
    
//             cards.forEach((item) => {
//                 if(filter === "all-cars"){
//                     item.style.display = "block" 
//                 } else{
//                     if(item.classList.contains(filter)){
//                         item.style.display = "block"
//                     }else{
//                         item.style.display = "none"
//                     }
//                 }
    
//             })
//         })
//     })
// })();

// const Btns = document.querySelectorAll(".btn");
// const Cards = document.querySelectorAll(".card");

// Btns.forEach(Btn => {
//     Btn.onclick = function(){
//         Btns.forEach(Btn =>{
//             Btn.className = "";
//         })
//         // Btn.className = "active";
        
//         // console.log(Btn.textContent);
//     const value = Btn.textContent;
//     Cards.forEach(Card => {
//         Card.style.display = "none";
//         console.log(Card.getAttribute("data-filter"));
//         if(Card.getAttribute("data-filter") == value.toLowerCase()){
//             Card.style.display = "block";
//         }

//     })
//     }   
// });


// ! Filter
function myapp() {
    const buttons = document.querySelectorAll(".btn");
    const cards = document.querySelectorAll(".card");
  
    function filter(category, items) {
      items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category);
        const isShowAll = category.toLowerCase() === "all";
        if (isItemFiltered && !isShowAll) {
          item.classList.add("hide");
        } else {
          item.classList.remove("hide");
        }
      });
    }
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const currentCategory = button.dataset.filter;
        console.log(currentCategory);
        filter(currentCategory, cards);
      });
    });
  }
  
  myapp();
  
  