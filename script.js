const botao1 = document.getElementById('botao-1');
const texto1 = document.getElementById('contador-1');
let contador = 0;
botao1.addEventListener('click', function() {
  contador = contador + 1;
  texto1.textContent = contador;
});

let contador2 = 0;
const botao2 = document.getElementById('botao-2');
const texto2 = document.getElementById('contador-2');
botao2.addEventListener('click', function() {
  contador2 = contador2 + 1;
  texto2.textContent = contador2;
});