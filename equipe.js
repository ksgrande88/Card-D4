const teamDialog = document.getElementById("equipe-dialog");
const teamTrigger = document.getElementById("team-trigger");
teamTrigger.addEventListener("click", () => {
  teamDialog.showModal();
  document.body.classList.add("modal-open");
});
teamDialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  teamTrigger.focus();
});
