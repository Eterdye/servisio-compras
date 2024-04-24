import addProduct from "./trolley.js"


export let allProducts = [
    {id:1 ,name:"Pan frances", productType:1, price:3,details:"El pan frances es simple pero bueno!", imageName:'frances.png'},
    {id:2 ,name:"Pan campesino", productType:1, price:60,details:"Por su sabor semi dulce es una gran opcion para la familia y los niños!", imageName:'campesino.jpg'},
    {id:3 ,name:"pan dulce", productType:1, price:8,details:"Para un momento en donde se te antoje algo rico y rapido...", imageName:'dulce.jpg'},
    {id:4 ,name:"pan de guayaba", productType:1, price:20,details:"Un exelente sabor para tu paladar!", imageName:'guayaba.jpg'},
    {id:5 ,name:"pan canilla", productType:1, price:40,details:"Muy buena eleccion para degustar", imageName:'canilla.jpeg'},
    {id:6 ,name:"pan de queso", productType:1, price:15 ,details:"Simplicidad a tu gusto", imageName:'panQueso.jpg'}

]


export function requireProducts(listProducts){
allProducts.forEach(product=>{
    let div = document.createElement('div')
    div.innerHTML = `
    <span class="productos-texto">${product.name}</span>
    <span class="texto-producto"
      >${product.details}</span
    >
    <span class="precio">${product.price}Bs</span>
    <button id="productButton" class="add-product">Añadir producto</button>
    ` 
    div.style.backgroundImage = `url(./public/assets/${product.imageName})`


    
    div.setAttribute('primaryKey', `${product.id}`)
    

    listProducts.appendChild(div)
})


document.querySelectorAll('#productButton')
.forEach(currentBtn => currentBtn.addEventListener('click', (evt)=> addProduct(evt,evt.target.parentNode) ))

}
 
