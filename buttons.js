import { cardsImg, randomPositions } from "./cards.js";
import { attachCardListeners } from "./main.js";

export function restartGame() {
  const shuffled = randomPositions([...cardsImg, ...cardsImg]);
  const productHtml = shuffled
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
  document.getElementById("flip-card-container").innerHTML = productHtml;

  // Re-attach card listeners
  attachCardListeners();
}

document.getElementById("restart").addEventListener("click", restartGame);
