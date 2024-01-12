const buttons = document.querySelectorAll('.link-nav');


function updateToSection(evt) {
  const targetButton = evt ? evt.target : buttons[0];
  const sectionName = targetButton.name;
  const mainSection = document.querySelector('#mainSection');

  fetch(sectionName)
  .then(res => res.text())
  .then(html => mainSection.innerHTML = html )

}

document.addEventListener('DOMContentLoaded', function () {
  updateToSection();
});

buttons.forEach((element) => element.addEventListener("click", updateToSection));