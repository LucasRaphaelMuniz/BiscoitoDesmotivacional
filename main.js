const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector("#btnOpen")
const btnAgain = document.querySelector('.btnAgain');

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

screen1.addEventListener('click', handleClickOpen)
btnAgain.addEventListener('click', handleResetClick);


function handleClickOpen(event) {
  event.preventDefault()
  screen1.classList.add("hide")
  screen2.classList.remove("hide")
  const fraseAleatoria = fraseBiscoito();
  document.querySelector(".screen2 h3").innerText = fraseAleatoria
  console.log(fraseAleatoria)
}


function handleResetClick() {
  toggleScreen()
}

function fraseBiscoito() {
  const frasesDesmotivacionais  = [
    "O sucesso é uma ilusão para a maioria das pessoas.",
    "Não importa o que você faça, sempre haverá alguém melhor.",
    "Por que se esforçar tanto quando o resultado será sempre o mesmo?",
    "Não adianta sonhar grande, a vida sempre vai te jogar para baixo.",
    "A vida é uma sucessão de fracassos, o sucesso é apenas uma ilusão temporária.",
    "Não importa o quão duro você tente, você nunca será bom o suficiente.",
    "Você não é especial, apenas mais um fracassado na multidão.",
    "A felicidade é uma mentira, a vida é dura e depois você morre.",
    "Por que se preocupar em tentar, se você sempre será um fracassado?",
    "Não há nada de especial em você, você é apenas mais um ser humano insignificante.",
    "Não há luz no fim do túnel, apenas escuridão.",
    "O futuro é sombrio e sem esperança.",
    "Ninguém se importa com você ou com o que você faz.",
    "A vida é uma corrida para o fundo do poço.",
    "Não há razão para se levantar de manhã, o dia sempre será ruim.",
    "Você nunca alcançará seus sonhos, então por que se importar?",
    "A vida é uma sucessão de desapontamentos e fracassos.",
    "Você é apenas uma pequena engrenagem em uma máquina sem sentido.",
    "Não há nada de positivo em ser humano, só existem problemas e tristezas.",
    "Você não é digno de amor ou respeito."
  ];

  numeroAleatorio = Math.floor(Math.random() * 20);
  fraseAleatoria = frasesDesmotivacionais [numeroAleatorio]
  return fraseAleatoria;
}
