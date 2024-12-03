const ratings = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".submit-btn");
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you-card");
const selectedRating = document.getElementById("selected-rating");

let selectedValue = null;

// Adiciona evento de clique em cada botão de classificação
ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratings.forEach((r) => r.classList.remove("selected")); // Remove seleção de todos
    rating.classList.add("selected"); // Adiciona classe 'selected' ao clicado
    selectedValue = rating.textContent; // Salva o valor da classificação
  });
});

// Adiciona evento de clique no botão Submit
submitBtn.addEventListener("click", () => {
  if (selectedValue) {
    selectedRating.textContent = selectedValue; // Atualiza o texto com a classificação
    ratingCard.classList.add("hidden"); // Esconde o card de classificação
    thankYouCard.classList.remove("hidden"); // Mostra o card de agradecimento
  } else {
    alert("Please select a rating!"); // Alerta se nenhuma classificação for escolhida
  }
});
