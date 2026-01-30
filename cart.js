let cartitems=document.querySelector(".cartitems")
let totalcartitems=document.querySelector(".nav-link sup")
let totalcartprice=document.querySelector(".total")
let cart = JSON.parse(localStorage.getItem(".cart"))
console.log(cart)


function displaycartitems(){
    cartitems.innerHTML=""
    cart.forEach((c)=>{
        cartitems.innerHTML+=`
            <table class="table">
            <tr>
            <td><img src="${c.image}" height="80" width="80"></td>
            <td>${c.name}</td>
            <td>$${c.price}</td>
            <td>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${c.id})">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
            </svg>
            ${c.qty}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${c.id})">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
            </td>
            <td><i class="fa-solid fa-trash text-danger" onclick="removeitem(${c.id})"></i></td>
            </tr>
            </table>
        `
    })
}

cart?displaycartitems():`<h1>Your cart is empty, Please add Products in the cart</h1>`

function changeqty(action,id){
    cart=cart.map((c)=>{
        let qty=c.qty
        if(c.id===id){
            if(action=="minus" && qty>1){
                qty--
            }
            if(action=="plus" && qty<c.stock){
                qty++
            }
        }
        return{
            ...c,
            qty
        }
    })
    updatecart()
}

function updatecart(){
    displaycartitems()
    displaytotal()
    localStorage.setItem("cart",JSON.stringify(cart))
}


function removeitem(id)
{
    cart = cart.filter((item)=>item.id!==id)
    updatecart()
}


function displaytotal(){
    let totalprice = 0, totalitems=0
    cart.forEach((c)=>{
        totalprice += c.price * c.qty
        totalitems+=c.qty
    })
    totalcartprice.innerHTML = `Total Amount: $${totalprice.toFixed(2)}`
    totalcartitems.innerHTML=totalitems
}