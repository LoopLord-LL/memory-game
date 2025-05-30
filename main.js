const cards = document.querySelectorAll("[data-card]");

const game = document.querySelector(".flip-card");

const container = document.querySelector(".main-content");

// array for flipped cards
let flippedCards = [];

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.classList.contains("flipped")) return;

    if (flippedCards.length === 2) return;

    // add .flipped class flipped card
    card.classList.add("flipped");
    // and, push in the array
    flippedCards.push(card);

    // if  2 cards are flipped check them
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards; 
      // if cards  match, back to first position.
      if (first.dataset.card === second.dataset.card) {
        first.classList.add("matched");
        second.classList.add("matched");
        flippedCards = [];
      } else {
        // if cards dont match, back to first position.
        setTimeout(() => {
          first.classList.remove("flipped");
          second.classList.remove("flipped");
          flippedCards = [];
        }, 1000);
      }
    }
  });
});
