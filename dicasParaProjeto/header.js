function renderHeader() {
  const header = document.getElementById('header');
  const user = localStorage.getItem('user');
  const isUserLoggedIn = !!user;
  header.innerHTML = `
    <h1 style="">Dicas para Projeto</h1>
    <a href="./dicasParaProjeto.html">Dicas para Projeto</a>
    <a href="./navigation.html">Navigation</a>

  `;

  // ${
  //   isUserLoggedIn ?
  //   `<p>Ola, ${user}</p>` :
  //   `<a href="./filtroDaLista.html">Filtro Da Lista</a>
  //    <a href="./createFlat.html">Login</a>`
  //   }

  if (isUserLoggedIn) {
    const p = document.createElement('p');
    p.innerText = `Ola, ${user}`;
    header.appendChild(p);
  } else {
    const a = document.createElement('a');
    a.href = './createFlat.html';
    a.innerText = 'Login';
    header.appendChild(a);

    const p = document.createElement('p');
    p.innerText = 'Ola, visitante';
    header.appendChild(p);
  }
}
document.addEventListener('onload', renderHeader());
