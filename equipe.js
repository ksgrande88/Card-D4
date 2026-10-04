const teamDialog = document.getElementById("equipe-dialog");
const teamTrigger = document.getElementById("team-trigger");
const teamPanel = teamDialog.querySelector(".team-panel");

// Measure the complete table before fitting it, so nothing is clipped.
function fitTeamDialog() {
  if (!teamDialog.open) return;
  const viewport = window.visualViewport;
  const availableWidth = (viewport ? viewport.width : window.innerWidth) - 24;
  const availableHeight = (viewport ? viewport.height : window.innerHeight) - 24;
  const panelWidth = Math.min(818, availableWidth - 2);
  teamPanel.style.width = panelWidth + "px";
  teamPanel.style.transform = "none";
  const panelHeight = teamPanel.getBoundingClientRect().height;
  const scale = Math.min(1, (availableHeight - 2) / panelHeight);
  teamPanel.style.transform = "scale(" + scale + ")";
  teamDialog.style.width = (panelWidth * scale + 2) + "px";
  teamDialog.style.height = (panelHeight * scale + 2) + "px";
}

teamTrigger.addEventListener("click", () => {
  teamDialog.showModal();
  document.body.classList.add("modal-open");
  fitTeamDialog();
});
window.addEventListener("resize", fitTeamDialog);
window.visualViewport?.addEventListener("resize", fitTeamDialog);
teamDialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  teamTrigger.focus();
});
