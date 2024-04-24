import {requireProducts,allProducts} from './modulo.js'
const cart = [] 


export default function addProduct(evt,event2){
    let trolley = document.querySelector('#trolley')
    trolley.classList.add('trolleyOn')


cart.push(allProducts.find(product => product.id == event2.getAttribute("primarykey")))

console.log(cart)

}

