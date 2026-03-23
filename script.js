const esfera = document.querySelector('.esfera');

esfera.addEventListener('mouseenter', () => {
  // Gera uma cor hexadecimal aleatória
  const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);
  
  // Atualiza a variável CSS no elemento
  esfera.style.setProperty('--cor-esfera', corAleatoria);
});