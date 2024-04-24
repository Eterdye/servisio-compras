import {requireProducts,allProducts} from './modulo.js'
const cart = [] 


export default function addProduct(evt,event2){
    let trolley = document.querySelector('#trolley')
    let shoppingCart = document.querySelector("#shoppingCart")
    trolley.classList.add('trolleyOn')

    console.log(shoppingCart)

let product = `
<div class="product">
<input type="number" class="productQuantity">
<button>Quitar producto</button>
</div>
`
    
cart.push(allProducts.find(product => product.id == event2.getAttribute("primarykey")))

console.log(cart)

}

