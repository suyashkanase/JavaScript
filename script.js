let allprodsdiv=document.querySelector(".prods")
let Orangesdiv=document.querySelector(".Oranges")
let Meatdiv = document.querySelector(".Meat")
let Vegetablesdiv=document.querySelector(".Vegetable")
let Fastfooddiv=document.querySelector(".Fastfood")
let cartitems=document.querySelector(".modal-body")
let totalcartitems=document.querySelector(".nav-link sup")
let totalcartprice=document.querySelector(".total")
let etables=[
    {
        id:1,
        name:"Meat",
        image:"img/product/product-1.jpg",
        price:30,
        stock:10,
    
    },
    {
        id:2,
        name:"Banana",
        image:"img/product/product-2.jpg",
        price:30,
        stock:17,
    
    },
    {
        id:3,
        name:"Guava",
        image:"img/product/product-3.jpg",
        price:30,
        stock:9,
    
    },
    {
        id:4,
        name:"Grapes",
        image:"img/product/product-4.jpg",
        price:30,
        stock:15,
    
    },
    {
        id:5,
        name:"Burger",
        image:"img/product/product-5.jpg",
        price:30,
        stock:23,
    
    },
    {
        id:6,
        name:"Mango",
        image:"img/product/product-6.jpg",
        price:30,
        stock:25,
    
    },
    {
        id:7,
        name:"Water Melon",
        image:"img/product/product-7.jpg",
        price:30,
        stock:10,
    
    },
    {
        id:8,
        name:"Apple",
        image:"img/product/product-8.jpg",
        price:30,
        stock:13,
    
    },
    {
        id:9,
        name:"Dates",
        image:"img/product/product-9.jpg",
        price:30,
        stock:9,
    
    },
    {
        id:10,
        name:"Chicken",
        image:"img/product/product-10.jpg",
        price:30,
        stock:5,
    
    },
    {
        id:11,
        name:"Orange Juice",
        image:"img/product/product-11.jpg",
        price:30,
        stock:11,
    
    },
    {
        id:12,
        name:"Mixed Fruits",
        image:"img/product/product-12.jpg",
        price:30,
        stock:12,
    
    }
]

function displayallprods(){
    allprodsdiv.innerHTML = "";
    etables.forEach((e)=>{
        allprodsdiv.innerHTML += `
        <div class="col">
            <div class="card h-100 border-0 d">
                <img src="${e.image}" class="card-img-top position-relative" alt="${e.name}">
                <div class="position-absolute end-50 top-50 h">
                    <button class="btn rounded-circle border bg-white ms-4">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                    <button class="btn rounded-circle border bg-white ms-3" onclick="addtocart(${e.id})">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">${e.name}</h5>
                    <h6 class="card-text">$${e.price}</h6>
                </div>
            </div>
        </div>`;
    });
}
displayallprods();



function displayoranges(){
    Orangesdiv.innerHTML=""
    etables.forEach((e)=>{
        if(e.name=="Meat"||e.name=="Oranges"||e.name=="Grapes"){
            Orangesdiv.innerHTML+=`
            <div class="col">
            <div class="card h-100 border-0 d">
                <img src="${e.image}" class="card-img-top position-relative" alt="${e.name}">
                <div class="position-absolute end-50 top-50 h">
                    <button class="btn rounded-circle border bg-white ms-4">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                    <button class="btn rounded-circle border bg-white ms-3" onclick="addtocart(${e.id})">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">${e.name}</h5>
                    <h6 class="card-text">$${e.price}</h6>
                </div>
            </div>
        </div>`
        }
        
    });
}
displayoranges()


function displaymeat(){
    Meatdiv.innerHTML=""
    etables.forEach((e)=>{
        if(e.name=="Meat"||e.name=="Guava"||e.name=="Grapes"||e.name=="Mango"){
            Meatdiv.innerHTML+=`
            <div class="col">
            <div class="card h-100 border-0 d">
                <img src="${e.image}" class="card-img-top position-relative" alt="${e.name}">
                <div class="position-absolute end-50 top-50 h">
                    <button class="btn rounded-circle border bg-white ms-4">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                    <button class="btn rounded-circle border bg-white ms-3" onclick="addtocart(${e.id})">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">${e.name}</h5>
                    <h6 class="card-text">$${e.price}</h6>
                </div>
            </div>
        </div>`
        }
        
    });
}
displaymeat()


function displayvegetables(){
    Vegetablesdiv.innerHTML=""
    etables.forEach((e)=>{
        if(e.name=="Meat"||e.name=="Water Melon"||e.name=="Burger"){
            Vegetablesdiv.innerHTML+=`
            <div class="col">
            <div class="card h-100 border-0 d">
                <img src="${e.image}" class="card-img-top position-relative" alt="${e.name}">
                <div class="position-absolute end-50 top-50 h">
                    <button class="btn rounded-circle border bg-white ms-4">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                    <button class="btn rounded-circle border bg-white ms-3" onclick="addtocart(${e.id})">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">${e.name}</h5>
                    <h6 class="card-text">$${e.price}</h6>
                </div>
            </div>
        </div>`
        }
        
    });
}
displayvegetables()

function displayfastfood(){
    Fastfooddiv.innerHTML=""
    etables.forEach((e)=>{
        if(e.name=="Meat"||e.name=="Water Melon"||e.name=="Burger"){
            Fastfooddiv.innerHTML+=`
            <div class="col">
            <div class="card h-100 border-0 d">
                <img src="${e.image}" class="card-img-top position-relative" alt="${e.name}">
                <div class="position-absolute end-50 top-50 h">
                    <button class="btn rounded-circle border bg-white ms-4">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                    <button class="btn rounded-circle border bg-white ms-3" onclick="addtocart(${e.id})">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">${e.name}</h5>
                    <h6 class="card-text">$${e.price}</h6>
                </div>
            </div>
        </div>`
        }
    });
}
displayfastfood()


let cart=JSON.parse(localStorage.getItem("cart"))||[]

function addtocart(id){
    const index = cart.findIndex(item => item.id === id)

    if(index !== -1){
        if(cart[index].qty < cart[index].stock){
            cart[index].qty++
        }
    } else {
        const p = etables.find(e => e.id === id)
        cart.push({
            id: p.id,
            name: p.name,
            image: p.image,
            price: p.price,
            stock: p.stock,
            qty: 1
        })
    }
    updatecart()
}



function updatecart(){
    displaycartitems()
    displaytotal()
    localStorage.setItem("cart",JSON.stringify(cart))
}


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


function displaytotal(){
    let totalprice = 0, totalitems=0
    cart.forEach((c)=>{
        totalprice += c.price * c.qty
        totalitems+=c.qty
    })
    totalcartprice.innerHTML = `Total Amount: $${totalprice.toFixed(2)}`
    totalcartitems.innerHTML=totalitems
}

function removeitem(id)
{
    cart = cart.filter((item)=>item.id!==id)
    updatecart()
}
