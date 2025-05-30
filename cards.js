export const cardsImg = [
  {
    cardType: "AG",
    img: "./assets/angular.png",
  },
  {
    cardType: "CS",
    img: "./assets/c-sharp.webp",
  },
  {
    cardType: "CPP",
    img: "./assets/c++.jpg",
  },
  {
    cardType: "CSS",
    img: "./assets/css.png",
  },
  {
    cardType: "HTML",
    img: "./assets/html.png",
  },
  {
    cardType: "JS",
    img: "./assets/js.webp",
  },
];
export function randomPositions(array) {
  const random = [...array];
  for (let i = random.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [random[i], random[j]] = [random[j], random[i]];
  }
  return random;
}

export const shuffledCards = randomPositions([...cardsImg, ...cardsImg]);

const productHtml = shuffledCards
  .map(
    (product) => `
  <div class="card-${product.cardType}" data-card="${product.cardType}">
    <div class="flip-card-inner">
      <div class="flip-card-back"></div>
      <div class="flip-card-front">
        <img src="${product.img}" class="icon" />
      </div>
    </div>
  </div>
`
  )
  .join("");
function drawGame() {
  document.getElementById("flip-card-container").innerHTML = productHtml;
}

drawGame();
