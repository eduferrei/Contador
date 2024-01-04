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

// Selecionando os elementos
const tabs = $(".tab");
const contents = $(".content");

// Adicionando o evento de clique nas abas
tabs.click(function () {
  // Removendo a classe active das abas e conteúdos
  tabs.removeClass("active");
  contents.removeClass("active");
  // Adicionando a classe active na aba e conteúdo clicados
  $(this).addClass("active");
  contents.eq($(this).index()).addClass("active");
});


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

  // mostra o número no span
  resultadoSpan.textContent = numero;
}

// adiciona um evento de clique no botão de sortear
sortearButton.addEventListener("click", sortearNumero);

// cria um botão com o texto "Salvar resultado" e o id "salvar"
var botao = document.createElement("button");
var textoBotao = document.createTextNode("Salvar resultado");
botao.appendChild(textoBotao);
botao.id = "salvar";

// adiciona um evento de clique para o botão que chama a função adicionarResultado
botao.addEventListener("click", adicionarResultado);

//  novo código

// define uma função para adicionar o resultado
function adicionarResultado() {
  // obtém o número do span
  const numero = resultadoSpan.textContent;

  // salva o número em algum lugar, por exemplo, no localStorage
  localStorage.setItem('resultado', numero);
}

// cria um botão com o texto "Salvar resultado" e o id "salvar"
var botao = document.createElement("button");
var textoBotao = document.createTextNode("Salvar resultado");
botao.appendChild(textoBotao);
botao.id = "salvar";

// adiciona o botão ao corpo do documento
document.body.appendChild(botao);

// adiciona um evento de clique para o botão que chama a função adicionarResultado
botao.addEventListener("click", adicionarResultado);

// Para mostrar valor salvo

// cria um div para mostrar o resultado
var resultadoDiv = document.createElement("div");
resultadoDiv.id = "resultadoSalvo";

// adiciona o div ao corpo do documento
document.body.appendChild(resultadoDiv);

// atualiza a função adicionarResultado para também atualizar o div
function adicionarResultado() {
  // obtém o número do span
  const numero = resultadoSpan.textContent;

  // salva o número em algum lugar, por exemplo, no localStorage
  localStorage.setItem('resultado', numero);

  // atualiza o div com o número salvo
  resultadoDiv.textContent = "Resultado salvo: " + numero;
}


// cria um parágrafo para mostrar o resultado salvo
var resultadoSalvoParagrafo = document.createElement("p");
resultadoSalvoParagrafo.id = "resultadoSalvo";

// adiciona o parágrafo ao corpo do documento
document.body.appendChild(resultadoSalvoParagrafo);

// atualiza a função adicionarResultado para também atualizar o parágrafo
function adicionarResultado() {
  // obtém o número do span
  const numero = resultadoSpan.textContent;

  // salva o número em algum lugar, por exemplo, no localStorage
  localStorage.setItem('resultado', numero);

  // atualiza o parágrafo com o número salvo
  resultadoSalvoParagrafo.textContent = "Resultado salvo: " + numero;
}
