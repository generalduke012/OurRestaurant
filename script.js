// dark mode light
var theme=0;
let darkModeIcon = document.querySelector('#darkMode-icon');
let neonModeIcon = document.querySelector('#neon-icon');
darkModeIcon.onclick = () => {
    
    if(theme === 0)
    {
        darkModeIcon.classList.toggle('bx-sun');
        
        document.body.classList.add('dark-mode');
        document.body.classList.remove('neon-mode');
        theme=1;
    }
    else if(theme === 1)
    {
        darkModeIcon.classList.toggle('bx-menu');
        
        document.body.classList.remove('dark-mode');
        document.body.classList.add('neon-mode');
        theme=2;
    }
    else
    {
        darkModeIcon.classList.toggle('bx-sun');
        document.body.classList.remove('dark-mode');
        document.body.classList.remove('neon-mode');
        theme = 0;
    }


    
    
};

// neon
// let neonModeIcon = document.querySelector('#neon-icon');

// neonModeIcon.onclick = () => {
//     neonModeIcon.classList.toggle('bx-happy-heart-eyes');
//     document.body.classList.toggle('neon-mode');
// };

//menu bar
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>
{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>
{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>
{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>
{
    document.querySelector('#search-form').classList.remove('active');
}


// *************   Image slide    ***************//
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1000000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

// *************   Review slide  ***************//
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 600000,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        640:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        1024:{
            slidesPerView: 4,
        }, 
          
    },
    loop:true,
  });  


//*********** */   loader section designing   ***************
// function loader()
// {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut()
// {
//     setInterval(loader, 1000);
// }

// window.onload = fadeOut;









//dot
let dot = document.querySelector('#dot');
let icons = document.querySelector('.icons');

dot.onclick = () =>
{
    dot.classList.toggle('bx-dots-vertical-rounded');
    icons.classList.toggle('dot');
}


//****** */ log-in and sign-in section *********************
const formOpenBtn = document.querySelector("#form-Open");
const formPopUp = document.querySelector(".form-popup");
const formCloseButton = document.querySelector("#close_Btn");
const logInBtn = document.querySelector("#login");
const signInBtn = document.querySelector("#signup");

formOpenBtn.addEventListener("click", () => formPopUp.classList.add("show"));
formCloseButton.addEventListener("click", () => formPopUp.classList.remove("show"));

signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formPopUp.classList.add("active");
});


logInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formPopUp.classList.remove("active");
});


//***************** Cart section *********************   ///
let openShopping = document.querySelector('.bx-cart');
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector('.list');

let listCard = document.querySelector('.listCard');

let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('cartOpen');
    console.log(1);
})

closeShopping.addEventListener('click', () => {
    body.classList.remove('cartOpen');
    console.log(1);
})

let products = 
[
    {
        id:1,
        name: 'PRODUCT NAME 1',
        image: 'dishes1.jpg' ,
        price: 12000
    },
    {
        id:2,
        name: 'PRODUCT NAME 2',
        image: 'dishes2.jpg' ,
        price: 12077
    },
    {
        id:3,
        name: 'PRODUCT NAME 3',
        image: 'dishes3.jpg' ,
        price: 32000
    },
    {
        id:4,
        name: 'PRODUCT NAME 4',
        image: 'dishes4.jpg' ,
        price: 14000
    },
    {
        id:5,
        name: 'PRODUCT NAME 5',
        image: 'dishes5.jpg' ,
        price: 15000
    },
    {
        id:6,
        name: 'PRODUCT NAME 6',
        image: 'dishes6.jpg' ,
        price: 16000
    },
]

let listCards = [];

function initApp(){
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
           <img src="./images/${value.image}"/>
           <div class="title">${value.name} </div>
           <div class="price">${value.price.toLocaleString()} </div>
           <button onclick="addToCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv);
    })
}

initApp();

function addToCard(key)
{
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="./images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick = "changeQuantity(${key}, ${value.quantity - 1})" >-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
                    
                </div>
                
            `;
            listCard.appendChild(newDiv);
        }
    })

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0)
    {
        delete listCards[key];
    }
    else
    {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
