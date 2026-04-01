function toggleModal() {
  let modal = document.getElementById("modalOverlay");
  if (modal.style.display === "none") {
    modal.style.display = "flex";
    if (typeof initWheel === 'function') initWheel(); // запускаем колесо
  } else {
    modal.style.display = "none";
  }
}
