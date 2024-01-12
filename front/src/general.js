const buttons = document.querySelectorAll('.link-nav');

function updateToSection(sectionName) {
  fetch(sectionName, {
    headers: {
      'Content-Type': 'text/html'
    },
    method: 'POST'
  })
    .then(res => res.text())
    .then(html => mainSection.innerHTML = html )
}

document.addEventListener('DOMContentLoaded', function () {
  const sectionName = window.location.pathname.replace('\/', '') || 'inicio';

  updateToSection(sectionName)
});

buttons.forEach((element) => element.addEventListener("click", (event) => {
  event.preventDefault();

  const sectionName = event.target.name;

  updateToSection(sectionName);

  history.pushState(null, null, sectionName);
}));