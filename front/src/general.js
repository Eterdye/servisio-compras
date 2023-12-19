const home_button = document.querySelector('#home')
const details_button = document.querySelector('#details')
const orders_button = document.querySelector('#orders')
const contact_button = document.querySelector('#contact')



function updateToSection (evt, section) {

    let actSection = evt.target

    fetch(`./public/${actSection.name}.html`)
    .then(res => res.text())
    .then(dataSection => document.querySelector('#mainSection').innerHTML = dataSection)
    .catch(err => console.log('Error al cargar:', err))

}



home_button.addEventListener('click', updateToSection)
details_button.addEventListener('click', updateToSection)
orders_button.addEventListener('click', updateToSection)
contact_button.addEventListener('click', updateToSection)