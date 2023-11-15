const menu = document.getElementById('imenu');
const cabecalho = document.getElementById('icabecalho');
const botaoMenu = document.getElementById('icone-menu') as HTMLElement;
const botaoCabecalho = document.getElementById('icone-cabecalho') as HTMLElement;

function clickMenu() {
  if (cabecalho && menu) {
    if (cabecalho.style.display === 'flex') {
      cabecalho.style.display = 'none';
      menu.style.display = 'block';
    } else {
      cabecalho.style.display = 'flex';
      menu.style.display = 'none';
    }
  }
}

if (botaoMenu && botaoCabecalho) {
  botaoMenu.addEventListener('click', clickMenu);
  botaoCabecalho.addEventListener('click', clickMenu);
}
