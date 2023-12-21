const usernme = document.getElementById("User");
const Priceofproduct = document.getElementById("Price");
const btn = document.querySelector("button");

const ul = document.querySelector("tr");
console.log(ul);


btn.addEventListener('click', () => {
    const customer = []
    customer.push(usernme.value, Priceofproduct.value);
    const store = localStorage.setItem("Products", customer);
   const list= customer.map(Item =>{
            
    })
})
