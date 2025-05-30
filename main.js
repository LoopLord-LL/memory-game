export function attachCardListeners() {
  const cards = document.querySelectorAll("[data-card]");
  let flippedCards = [];

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("flipped")) return;
      if (flippedCards.length === 2) return;

      card.classList.add("flipped");
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        const [first, second] = flippedCards;
        if (first.dataset.card === second.dataset.card) {
          first.classList.add("matched");
          second.classList.add("matched");
          setTimeout(() => {
            checkWin(cards);
          }, 300);
          flippedCards = [];
        } else {
          setTimeout(() => {
            first.classList.remove("flipped");
            second.classList.remove("flipped");
            flippedCards = [];
          }, 500);
        }
      }
    });
  });
}
function checkWin(cards) {
  const allMatched = Array.from(cards).every((card) =>
    card.classList.contains("matched")
  );
  if (allMatched) {
    showWinMessage();
  }
}

const modalOverlay = document.querySelector(".modal-overlay");

function showWinMessage() {
  modalOverlay.style.display = "flex";
  const closeModal = document.querySelector(".close-modal");
  closeModal.addEventListener("click", () => {
    document.getElementById("flip-card-container").style.display = "none";
    modalOverlay.style.display = "none";
    // restartGame();
  });
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = "none";
      // restartGame();
    }
  });
}

attachCardListeners();
