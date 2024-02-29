function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}

// set inital value to zero
let count = 0;
let randomNumber = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

const minInput = document.querySelector("#min"); 
const maxInput = document.querySelector("#max"); 
const sortearButton = document.querySelector("#sortear"); 
const resultadoSpan = document.querySelector("#resultado");

//const contents = $(".content");

function getRandomNumber() {
  return Math.ceil(Math.random() * 100 + 1);
}

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if(styles.contains("random-inc")) {
      randomNumber = getRandomNumber();
      count += randomNumber;
    }else if(styles.contains("random-dec")) {
      randomNumber = getRandomNumber();
      count -= randomNumber;
    }else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

// define uma função para gerar um número aleatório entre min e max
 function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// define uma função para sortear um número e mostrar o resultado
function sortearNumero() {
  // obtém os valores dos inputs
  const min = Number(minInput.value);
  const max = Number(maxInput.value);

  // verifica se os valores são válidos
  if (min >= max) {
    alert("O valor mínimo deve ser menor que o valor máximo.");
    return;
  }

  // gera um número aleatório entre min e max
  const numero = gerarNumeroAleatorio(min, max);

  if (numero > 0) {
    resultadoSpan.style.color = "green";
  }
  if (numero < 0) {
    resultadoSpan.style.color = "red";
  }
  if (numero === 0) {
    resultadoSpan.style.color = "#222";
  }

  // mostra o número no span
  resultadoSpan.textContent = numero;
}

// adiciona um evento de clique no botão de sortear
sortearButton.addEventListener("click", sortearNumero);