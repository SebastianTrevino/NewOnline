let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let SnackOptionHTML = document.querySelector('.SnackOption');

let SnackOption = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

const addDataToHTML = () => {
    SnackOptionHTML.innerHTML = '';
    if(SnackOption.length>0){
        SnackOption.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <img src="pictures/Lays.png" alt="">
                <h2>NAME PRODUCT</h2>
                <div class="price">$1.50</div>
                <button class="addCart">
                    Add To Cart
                </button>
            `;
            SnackOptionHTML.appendChild(newProduct);
        })
    }
}

const initApp = () => {
    fetch('Snacks.json')
    .then(response => response.json())
    .then(data => {
        SnackOption = data;
        addDataToHTML();
    })
}
initApp();
