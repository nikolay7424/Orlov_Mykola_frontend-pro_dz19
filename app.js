const products = [
    {
        title: "Футболки",
        description: "Lorem ipsum dolor sit amet.",
        image: "img/t-shirt.jpg",
    },
    {
        title: "Худі",
        description: "Lorem ipsum dolor sit amet.",
        image: "img/hoodie.jpg",
    },
    {
        title: "Джинси",
        description: "Lorem ipsum dolor sit amet.",
        image: "img/jeans.jpg",
    },
    {
        title: "Кросівки",
        description: "Lorem ipsum dolor sit amet.",
        image: "img/sneakers.jpg",
    },
    {
        title: "Головні убори",
        description: "Lorem ipsum dolor sit amet.",
        image: "img/hats.jpg",
    },
]

const categories = document.querySelector('.categories')
const productsDiv = document.querySelector('.products')
const cart = document.querySelector('.cart')
const notification = document.querySelector('.notification')

categories.addEventListener('click', caterogiesHandler)
productsDiv.addEventListener('click', productstHandler)
window.addEventListener('click', buttonHandler)

function caterogiesHandler(e) {
    if(productsDiv.children[0]) {
        productsDiv.innerHTML = ''
    }
    products.forEach(product => {
        if(e.target.textContent === product.title) {
            for(let i = 0; i < 6; i++) {
                const productDiv = createProductDiv(
                    product.title, 
                    product.description, 
                    product.image)
                productsDiv.appendChild(productDiv)
            }
        }
    })
}

function productstHandler(e) {
    if(cart.children[0]) {
        cart.innerHTML = ''
    }
    if(e.target.classList.contains('product')) {
        const button = document.createElement('button')
        button.textContent = 'Купити'
        button.classList.add('btn')
        const productDiv = createProductDiv(
            e.target.children[1].textContent, 
            e.target.children[2].textContent, 
            e.target.children[0].src, 
            button)
        cart.appendChild(productDiv)
    }
}

function createProductDiv(title, description, img, button = null) {
    const productDiv = document.createElement('div')
    productDiv.classList.add('product')

    const productImg = document.createElement('img')
    productImg.src = img

    const procutTitle = document.createElement('h2')
    procutTitle.classList.add('product-name')
    procutTitle.textContent = title

    const procutDescription = document.createElement('p')
    procutDescription.classList.add('product-description')
    procutDescription.textContent = description

    
    productDiv.appendChild(productImg)
    productDiv.appendChild(procutTitle)
    productDiv.appendChild(procutDescription)
    if(button) {
        productDiv.appendChild(button)
    }
    return productDiv
}

function buttonHandler(e) {
    if(e.target.classList.contains('btn')) {
        notification.style.display = 'block'
        setTimeout(function() {
            cart.innerHTML = ''
            productsDiv.innerHTML = ''
            notification.style.display = 'none'
        }, 1500)
    }
}