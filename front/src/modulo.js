

let allProducts = [
    {name:"Pan frances", productType:1, price:2,details:"El pan frances es simple pero bueno!"},
    {name:"Pan campesino", productType:1, price:60,details:"Por su sabor semi dulce es una gran opcion para la familia y los niños!"},
    {name:"pan dulce", productType:1, price:15,details:"Para un momento en donde se te antoje algo rico y rapido..."},
    {name:"pan de guayaba", productType:1, price:20,details:"Un exelente sabor para tu paladar!"},
    {name:"pan canilla", productType:1, price:40,details:"Muy buena eleccion para degustar"}
]


export default function requireProducts(listProducts){
allProducts.forEach(product=>{
    let div = document.createElement('div')
    div.innerHTML = `
    <span class="productos-texto">${product.name}</span>
    <span class="texto-producto"
      >${product.details}</span
    >
    <span class="precio">${product.price}Bs</span>
    `
    
    listProducts.appendChild(div)
})

}
 
function change(){}

