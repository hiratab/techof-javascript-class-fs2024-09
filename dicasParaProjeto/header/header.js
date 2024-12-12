function renderHeader() {
  const header = document.createElement('header');
  header.innerHTML = `
    <h1>Meu Projeto</h1>
  `;
}

document.addEventListener('onload', renderHeader());