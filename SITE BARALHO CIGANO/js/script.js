const tabuleiro = document.getElementById('tabuleiro');
const novoJogo = document.getElementById('novoJogo');
const overlay = document.getElementById('overlay');
const cartaVirada = document.getElementById('cartaVirada');
const mensagem = document.getElementById('mensagem');
const tema = document.getElementById('tema');

let jogadas = 0;

const mensagens = {
  amor: [
    "Um novo amor surgirá em breve.",
    "Velhos sentimentos ressurgirão.",
    "Momento de fortalecer vínculos."
  ],
  dinheiro: [
    "Oportunidade financeira inesperada.",
    "Cuidado com gastos desnecessários.",
    "Investimentos trarão retorno."
  ],
  futuro: [
    "Grandes mudanças à vista.",
    "Surpresas boas chegando.",
    "Um ciclo se encerrará, outro começará."
  ]
};

function criarTabuleiro() {
  tabuleiro.innerHTML = "";
  jogadas = 0;
  for (let i = 1; i <= 36; i++) {
    const carta = document.createElement('img');
    carta.src = 'imagens/carta-costas.png';
    carta.alt = `Carta ${i}`;
    carta.dataset.numero = i;
    carta.onclick = () => virarCarta(i);
    tabuleiro.appendChild(carta);
  }
}

function virarCarta(numero) {
  if (jogadas >= 2) {
    alert("Você já tirou 2 cartas grátis! Para mais, faça um pagamento.");
    return;
  }
  jogadas++;

  const temaSelecionado = tema.value;
  const mensagemTema = mensagens[temaSelecionado][Math.floor(Math.random() * 3)];

  cartaVirada.src = `imagens/carta-${numero}.png`;
  mensagem.innerHTML = `No ${temaSelecionado}, a carta ${numero} diz:<br><strong>${mensagemTema}</strong>`;
  overlay.style.display = "flex";
}

function fecharPopup() {
  overlay.style.display = "none";
}

novoJogo.onclick = criarTabuleiro;

criarTabuleiro();
