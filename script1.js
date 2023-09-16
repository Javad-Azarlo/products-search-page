 const search_input = document.querySelector("#search-input");
 const name_products = document.querySelectorAll(".product-item"); 
 const btn_filter = document.querySelectorAll(".filter");
 const btnSearchPric = document.getElementById("search_prce").querySelector("button");
  
function selectedFunction(filEelcted){
   btn_filter.forEach(btn =>{
      if(btn.dataset.filter === filEelcted){
         btn.classList.add("selected")
      }
      else{
         btn.classList.remove("selected")
      }
   })
 }
console.log(name_products)
const searchHandler = (event) =>{
    //گرفتن مقدار اینپوت و تبدیل کردن به حروف کوچک و پاک کردن فاصله های اول و آخر
const search_value = event.target.value.toLowerCase().trim();
 
name_products.forEach((name_products)=>{
    const child = name_products.children[1].innerText.toLowerCase();
 if(child.includes(search_value)){
    name_products.style.display = "block";
 }  
 else{
    name_products.style.display = "none";
 }
    
    
})
}
const btnHandler = (event =>{
   const fil = event.target.dataset.filter;
    selectedFunction(fil)
   name_products.forEach((cate) => {
      const categor = cate.dataset.categ;
      
      if(fil === "all"){
         document.getElementById("products").style.justifyContent = "space-between";
         cate.style.display = "block";
      }
      else{
         document.getElementById("products").style.justifyContent = "normal";
         fil === categor ? cate.style.display = "block" : cate.style.display = "none";
      }
     })
})
btn_filter.forEach(handler =>{
   handler.addEventListener("click" , btnHandler)
})
const funcSerchPric = (event =>{
   const input_search = +event.target.parentElement.children[0].value;
   name_products.forEach(product =>{
      const prd_pric = +product.children[2].innerText.split(" ")[1];
      if(!input_search){
         document.getElementById("products").style.justifyContent = "space-between";
         product.style.display = "block" 
      }
      else{
         document.getElementById("products").style.justifyContent = "normal";
         input_search === prd_pric ? product.style.display = "block" : product.style.display = "none" 
      }
      })
 })
search_input.addEventListener("keyup" , searchHandler) 
btnSearchPric.addEventListener("click" , funcSerchPric)