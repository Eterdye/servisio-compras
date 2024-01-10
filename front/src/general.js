const buttons = document.querySelectorAll('.link-nav');


function updateToSection(evt) {
  const targetButton = evt ? evt.target : buttons[0];
  const sectionName = targetButton.name;
  const mainSection = document.querySelector('#mainSection');

  fetch('index')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return response.text();
  })
    .then(indexHtml => {
          mainSection.innerHTML = indexHtml;
    })
    .catch(error => console.error(error));
}

document.addEventListener('DOMContentLoaded', function () {
  updateToSection();
});

buttons.forEach((element) => element.addEventListener("click", updateToSection));