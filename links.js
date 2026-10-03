// Atualize apenas os destinos abaixo quando os arquivos mudarem.
const destinations = {
  slides: "https://docs.google.com/presentation/d/1uMzAD161lqaZYPAIe49ukCo0PBJV2yyt/edit",
  tabela: "https://docs.google.com/spreadsheets/d/184myEvIlXvMINmsk30JGBw4Y2RbMA1SD/edit",
  equipe: "", // PNG Quem faz o que: conteúdo a definir.
  imagens: "https://drive.google.com/drive/folders/1Dkn6AasMnvxKDDt3hlxEYs0V_a0L4Nja",
  whatsapp: "https://wa.me/554899175986",
  tema: "https://drive.google.com/file/d/1u6nyWOluaZ5HqB126Th1HUVLBmUlp9ld/view",
  opcj1: "https://drive.google.com/file/d/1qmNKraTWROndoainQ7jb_hZi-Mtfw8QF/view",
  opcj2: "https://drive.google.com/file/d/1Y0Nv-nwgIwZZJCOjg4m_syziMoh-FTUd/view",
  dameplan: "https://drive.google.com/file/d/1VKqj6wUQz3pQTyUgB4NrVdImGKXTx9jZ/view",
  regras: "https://drive.google.com/file/d/1CeoQAZ6RW_1lPRavB8bhbVG3Y-J-thSC/view"
};

document.querySelectorAll("[data-link]").forEach(link => {
  const destination = destinations[link.dataset.link];
  if (destination) {
    link.href = destination;
  } else {
    link.setAttribute("aria-disabled", "true");
    const note = document.createElement("span");
    note.className = "pending";
    note.textContent = "Em preparação";
    link.append(note);
  }
});
