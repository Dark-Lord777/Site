const modal = document.getElementById("modalOverlay");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

// открыть модалку
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";  // flex, чтобы центрирование сработало
});

// закрыть модалку
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});









