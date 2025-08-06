const showBtn = document.getElementById("showRulesBtn");
const modal = document.getElementById("rulesModal");
const closeModal = document.getElementById("closeModal");

showBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
