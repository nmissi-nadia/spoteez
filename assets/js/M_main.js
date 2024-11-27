

tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
          'primary': '#254596', // Blue
          'secondary': '#FB2649', // Rose
          'accent': '#343635', // Noir
          'accent-2': '#F8FCFF', // Blanc
          'blue-hover': '#3757A7', // couleur du hover sur les boutons bleu
          'pink-hover': '#E42141' // couleur du hover sur les boutons Pink
        },
        fontFamily: {
          'custom': ['"Roboto"', 'sans-serif'],
        },
        borderRadius: {
          'rounded-20': '20px'
        },
        borderWidth: {
          '1': '1px', // border de 1px
        },
        transitionDuration: {
          '500': '500ms',   //durée de 500ms
        },
        width: {
          '7/10': '70%'
        },
      }
    }
  }
// Fonction d'Afficher et cacher aside barre
const panelIcons = document.querySelectorAll(".panel-icons");

panelIcons.forEach(function(icon) {
  icon.addEventListener("click", function () {
    const panelCard = document.getElementById("panel-aside-bar");
    displayCartItems();
    panelCard.classList.remove("hidden");
  });
});

    document.getElementById("close-btn").addEventListener("click", function () {
      const panelCard = document.getElementById("panel-aside-bar");

      panelCard.classList.add("hidden");
    })

    const seePanel = document.getElementById("see-panel");
    seePanel.addEventListener("click", function () {
      const panelCard = document.getElementById("panel-aside-bar");
      panelCard.classList.add("hidden");
      window.location.href = "../vues/panier.html";

    })

    function getCartFromLocalStorage() {
      return JSON.parse(localStorage.getItem('cart')) || [];
  }

console.log(cart);

// Afficher les produits dans le panier
function displayCartItems() {

  const carts = getCartFromLocalStorage();


  const cartItemsDiv = document.getElementById('aside-panel');
  const totalPriceDiv = document.getElementById('total-price');

  cartItemsDiv.innerHTML = '';
  let totalPrice = 0;

  if (carts.length === 0) {
    cartItemsDiv.innerHTML =` 
      <div class="flex w-full mx-2 mt-2 mb- 10">
        <div class="flex justify-center items-center">
          <h3>Votre Panier est vide !</h3>
        </div>
      </div>
    `; // à modifier le message de panier vide
    totalPriceDiv.innerHTML = '0,00 €';
    return;
  }

  carts.forEach((item, index) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'cart-item';
    productDiv.innerHTML =` 
      <div class="flex bg-red-100 mb-4 p-4 rounded-lg justify-between">
        <div class="item-pic w-1/4">
          <div class="flex flex-col justify-center m-auto">
            <img class="h-full w-full rounded-lg" src="${item.images}" alt="${item.title}">
            <div class="flex rounded-md shadow-sm justify-around mt-2" role="group">
              <button type="button" class="bg-primary text-sm h-6 px-1 rounded-l-lg text-accent-2 "><i class="fa-solid fa-minus"></i></button>
              <button type="button" class="bg-primary text-sm h-6 px-4 text-accent-2 "><span>${item.quantity}</span></button>
              <button type="button" class="bg-primary text-sm h-6 px-1 rounded-r-lg text-accent-2 "><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
        <div class="infos bg-accent-2 w-[70%] flex flex-col justify-between rounded-lg">
          <div class="p-3">
            <div class="title-price flex justify-between ">
              <h3 class="text-lg">${item.title}</h3>
              <i class="fa-solid fa-trash text-secondary text-right cursor-pointer mt-1 sm:text-2xl sm:mt-0"></i>
            </div>
            <div class="title-price flex justify-between">
              <h5 class="text-sm">Livraison gratuite</h5>
            </div>
          </div>
          <div class="p-3">
            <h3 class="font-bold text-primary text-right"><span>${item.price}</span> €</h3>
          </div>
        </div>
      </div>
    `;
    totalPrice += item.price * item.quantity;
    cartItemsDiv.appendChild(productDiv);
  });

  totalPriceDiv.innerHTML =` <p>TOTAL PANIER : ${totalPrice} €</p>`;
}









      
      function openmune() {
        document.getElementById("navbar-default").classList.toggle("hidden")
      
      }





let carousel_cards = document.getElementById('carousel-cards');

function slideLeft() {
    carousel_cards.style.scrollBehavior = "smooth"
    carousel_cards.scrollLeft -= 500

}


function slideRighe() {
    carousel_cards.style.scrollBehavior = "smooth"
    carousel_cards.scrollLeft += 500
}










function openMenu() {

    document.getElementById("navbar-default").style.scrollBehavior = "smooth"
    document.getElementById("navbar-default").classList.toggle("hidden")


}
//carousel-images header
const slides = document.getElementById('carousel-images');
slides.addEventListener("wheel", (evnt) => {
    slides.scrollLeft += evnt.deltaX
})

//carousel-cards


carousel_cards.addEventListener("wheel", (evnt) => {
    carousel_cards.scrollLeft += evnt.deltaX
})





//slide-images catgory

const carousel_cards_words = document.getElementById('carousel-cards_Words');
document.getElementById("one").style.background = "#608BC1"
// right
document.getElementById("rightBtn").addEventListener("click", () => {

    carousel_cards_words.style.scrollBehavior = "smooth"
    carousel_cards_words.scrollLeft += 1500;


    if (carousel_cards_words.scrollLeft < 1500) {
        document.getElementById("two").style.background = "#608BC1"
        document.getElementById("one").style.background = "none"

    } else if (carousel_cards_words.scrollLeft >= 1500) {
        document.getElementById("two").style.background = "none"
        document.getElementById("three").style.background = "#608BC1"



    }

})

// left
document.getElementById("leftBtn").addEventListener("click", () => {
    carousel_cards_words.style.scrollBehavior = "smooth"
    carousel_cards_words.scrollLeft -= 1500;

    if (carousel_cards_words.scrollLeft > 1500) {
        document.getElementById("two").style.background = "#608BC1"
        document.getElementById("three").style.background = "none"

    } else if (carousel_cards_words.scrollLeft <= 1500) {
        document.getElementById("two").style.background = "none"
        document.getElementById("one").style.background = "#608BC1"

    }

})



function slideNum(value) {
    console.log(value);

    if (value == "one") {
        document.getElementById("one").style.background = "#608BC1"
        carousel_cards_words.style.scrollBehavior = "smooth"
        document.getElementById("two").style.background = "none"
        document.getElementById("three").style.background = "none"
        carousel_cards_words.scrollLeft = 0;

    }

    if (value == "two") {
        document.getElementById("two").style.background = "#608BC1"
        carousel_cards_words.style.scrollBehavior = "smooth"
        carousel_cards_words.scrollLeft = 1500;
        document.getElementById("one").style.background = "none"
        document.getElementById("three").style.background = "none"


    }

    if (value == "three") {
        carousel_cards_words.scrollBehavior = "smooth"
        document.getElementById("three").style.background = "#608BC1"
        carousel_cards_words.scrollLeft = 3000;
        document.getElementById("one").style.background = "none"
        document.getElementById("two").style.background = "none"


    }



}

//request restApi get post delete patch put ..
//responce data array 
//option methode status:200 - 404 - 500 - 403

fetch("https://mohamedmoustir.github.io/api/")
    .then(result => result.json()
    )

    .then(function (data) {
        let cloths = data.Tshorts

        for (let i = 1; i < 15; i++) {


            carousel_cards.innerHTML += `
        
     <div class =" mx-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow max-h-[500px]">
                 <a href="#">
                     <img class="p-8 w-[100%] border max-h-[55%] rounded-t-lg" src="${cloths[i].images[2]}" alt="product image" />
                 </a>
                 <div class="px-8 pb-5 w-[350px]">
                    <a href="#">
                         <h5 class="text-xl  font-semibold tracking-tight text-gray-900 dark:text-white">${cloths[i].description.slice(0, 90)}...</h5>
                     </a>
                     
                     <div class="flex items-center mt-2.5 mb-5">
                         <div class="flex items-center space-x-1 rtl:space-x-reverse">
                             <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                 <path
                                     d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                             </svg>
                             <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                 <path
                                     d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                             </svg>
                             <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                 <path
                                     d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                             </svg>
                             <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                 <path
                                     d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                             </svg>
                             <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                 <path
                                     d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                             </svg>
                         </div>
                         <span
                             class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                     </div>
                     <div class="flex items-center justify-between">
                         <span class="text-3xl font-bold text-gray-900 dark:text-white">${cloths[i].price}$</span>
                         
                     </div>
                 </div>
             </div>
     
     `
        }
    })

// .catch(error => console.log(erorr))


fetch("https://mohamedmoustir.github.io/nweapi/")
    .then(result => result.json())
    .then(function (data) {

        const carousel_cards_words = document.getElementById('carousel-cards_Words');
        for (let i = 0; i < 3; i++) {
            let worldfot = data.worldfot

            carousel_cards_words.innerHTML += `
     
     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mx-auto my-[100px]">

                <div
                    class="max-w-sm w-[80%] h-52 min-w-[250px]  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-[150px] max-m-[100px]">
                    <a href="#">
                        <img class="rounded-t-lg w-full h-52" src="${worldfot[0].image}" alt="" />
                    </a>
                    <div class="p-5  h-auto  shadow">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-full">
                               ${worldfot[0].name}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> ${worldfot[0].description.slice(0, 100)}...</p>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>


                <div
                    class="max-w-sm w-[80%] h-52 min-w-[250px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-[150px]">
                    <a href="#">
                        <img class="rounded-t-lg w-full h-52" src="${worldfot[1].image}" alt="" />
                    </a>
                    <div class="p-5  h-auto  shadow">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-full">
                                ${worldfot[1].name}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> ${worldfot[1].description.slice(0, 100)}.</p>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>



                <div
                    class="max-w-sm w-[80%] h-52 min-w-[250px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-[150px]">
                    <a href="#">
                        <img class="rounded-t-lg w-full h-52" src="${worldfot[7].image}" alt="" />
                    </a>
                    <div class="p-5  h-auto  shadow">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-full">
                                ${worldfot[7].name}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> ${worldfot[7].description.slice(0, 100)}</p>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>




                <div
                    class="max-w-sm w-[80%] h-52 min-w-[250px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-[150px]">
                    <a href="#">
                        <img class="rounded-t-lg w-full h-52" src="${worldfot[3].image}" alt="" />
                    </a>
                    <div class="p-5  h-auto  shadow">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-full">
                                ${worldfot[3].name}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${worldfot[3].description.slice(0, 100)}.</p>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>



                <div
                    class="max-w-sm w-[80%] h-52 min-w-[250px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-[150px]">
                    <a href="#">
                        <img class="rounded-t-lg w-full h-52" src="${worldfot[8].image}" alt="" />
                    </a>
                    <div class="p-5  h-auto  shadow">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-full">
                                ${worldfot[8].name}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${worldfot[8].description.slice(0, 100)}.</p>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
               <div
                    class="max-w-sm w-[80%] h-52 min-w-[250px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-[150px]">
                    <a href="#">
                        <img class="rounded-t-lg w-full h-52" src="${worldfot[4].image}" alt="" />
                    </a>
                    <div class="p-5  h-auto  shadow">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-full">
                                ${worldfot[4].name}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${worldfot[4].description.slice(0, 100)}.</p>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

     `
        }

    }).catch(error => console.log(erorr))

// Fonction d'Afficher et cacher aside barre
document.getElementById("shoping-icon-md").addEventListener("click", function () {
    const shoppingIconMd = document.getElementById("shoping-icon-md");
    const panelCard = document.getElementById("panel-aside-bar");
    panelCard.classList.remove("hidden");
})

document.getElementById("close-btn").addEventListener("click", function () {
    const panelCard = document.getElementById("panel-aside-bar");
    panelCard.classList.add("hidden");
});

const testimnal = document.getElementById("testimnal")
function NextSlide() {
    testimnal.style.scrollBehavior = "smooth"
    testimnal.scrollLeft += 500;
}

function PreviousSlide() {
    testimnal.style.scrollBehavior = "smooth"
    testimnal.scrollLeft -= 500;
    
}
