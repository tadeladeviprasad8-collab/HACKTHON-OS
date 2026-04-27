document.querySelectorAll('.card').forEach((card, i) => {
  card.style.opacity = 0;
  setTimeout(() => {
    card.style.transition = "opacity 1s ease, transform 0.5s ease";
    card.style.opacity = 1;
    card.style.transform = "translateY(0)";
  }, i * 200);
});
