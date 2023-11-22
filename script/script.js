
function exibirOculos() {
    const glasses = document.getElementById('glasses');
    glasses.style.display = 'block'; // Exibe os óculos
  }

  const image = document.getElementById('myImage');
  image.addEventListener('mouseleave', () => {
    const glasses = document.getElementById('glasses');
    glasses.style.display = 'none'; // Esconde os óculos ao sair da área
  });

  function exibirTrio() {
    const trio = document.getElementById('trio');
    trio.style.display = 'block'; // Exibe os óculos
}

  const imagem = document.getElementById('myImage');
  image.addEventListener('mouseleave', () => {
    const trio = document.getElementById('trio');
    trio.style.display = 'none'; // Esconde os óculos ao sair da área
  });
  