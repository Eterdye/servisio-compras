const buttons = document.querySelectorAll('.link-nav2');
const mainSection = document.getElementById('mainSection');
import {requireProducts,allProducts} from './modulo.js'



function updateToSection(sectionName) {
  // Añade la clase 'section-transition' para controlar la transición de opacidad
  mainSection.classList.add('section-transition');

  fetch(sectionName, {
    headers: {
      'Content-Type': 'text/html',
    },
    method: 'POST',
  })
    .then((res) => res.text())
    .then((html) => { 
      // Actualiza el contenido de la sección
      mainSection.innerHTML = html;
      if(sectionName === 'pedidos'){
        let order = document.getElementById('lista-de-productos')
        requireProducts(order)
      }  else if (sectionName === 'compras'){
          let shoppingCart = document.querySelector('#shoppingCart')
          console.log(shoppingCart)
        } 
      


        

      // Elimina la clase 'section-transition' después de un breve retraso para activar la transición
      setTimeout(() => {
        mainSection.classList.remove('section-transition');
      }, 10);
    });
}




document.addEventListener('DOMContentLoaded', function () {
  const sectionName = window.location.pathname.replace(/\//g, '') || 'inicio';

  updateToSection(sectionName);
});

buttons.forEach((element) =>
 { 
  element.addEventListener('click', (event) => {
    event.preventDefault();

    const sectionName = event.target.name;

    // Agrega la clase 'section-transition' antes de cambiar de sección
    mainSection.classList.add('section-transition');

    // Después de un breve retraso, realiza la transición y actualiza la sección
    setTimeout(() => {
      updateToSection(sectionName);
      history.pushState(null, null, sectionName);
    }, 300); // Ajusta el tiempo según la duración de tu transición CSS
  })}
);

