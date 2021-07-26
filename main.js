const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

let btns = document.querySelectorAll('.btn');
let productsContainer = document.querySelector('.products-container');
let currentCat = 'all';


const displayData = (cat) => {

    cat.map(menuItem => {
        let item = `
            <div class="product">
                    <img src=${menuItem.img} alt="">
                <div class="product-info">
                    <div>
                        <p class="product-name">${menuItem.title}</p>
                        <p class="product-price">${menuItem.price} $</p>
                    </div>
                    <p class="product-description">${menuItem.desc}</p>
                    <button class = "btn-know-more"> know more! </button>
                </div>
            </div>
        `;
        productsContainer.innerHTML += item;
    })
}

const filteredData = categ => {
    productsContainer.innerHTML = ''
    let category = menu;
    if (categ === 'all') {
        displayData(category);
    } else {
        let filtered = category.filter(menuItem => {
            return menuItem.category === categ;
        });

        displayData(filtered)
    }
}

const showDetails = (product) => {
    console.log(product);
    let showDetailsDiv = document.querySelector('.details-container');
    showDetailsDiv.innerHTML = `
        <span class="close-btn">
            <i class="fas fa-times"></i>
        </span>
        <img src=${product.children[0].src} alt="">
        <p class="p-title"> ${product.children[1].children[0].children[0].textContent} </p>
        <p class="p-details"> ${product.children[1].children[1].textContent}</p>
        <button class= "add-to-cart">
           <i class="fas fa-cart-plus"></i>
       </button>

    `;
    showDetailsDiv.style.display = 'flex';
    let closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        closeBtn.parentElement.style.display = 'none'
    })
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) {
            return;
        } else {
            let siblings = btn.parentElement.children;
            console.log(siblings);
            for (let i = 0; i < siblings.length; i++) {
                siblings[i].classList.remove('active');
            }
            btn.classList.add('active');

        }
        filteredData(btn.name);
    })
})



window.addEventListener('DOMContentLoaded', () => filteredData(currentCat));


window.addEventListener('DOMContentLoaded', () => {

    let knowMoreBtns = document.querySelectorAll('.btn-know-more');
    knowMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            showDetails(btn.parentElement.parentElement);
        })
    })
});
