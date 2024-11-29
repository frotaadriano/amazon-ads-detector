// Listener para mensagens vindas do popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "selectElement") {
    // Reseta todos os eventos e reinicia o processo de seleção
    resetSelection();
    startElementSelection();
    sendResponse({ status: "Selection started" });
  }
});

// Função para iniciar a seleção de elementos
function startElementSelection() {
  document.body.style.cursor = "crosshair";

  // Adiciona os eventos de mouseover, mouseout e clique
  document.addEventListener("mouseover", handleMouseOver);
  document.addEventListener("mouseout", handleMouseOut);
  document.addEventListener("click", handleClick, true);
}

// Função para resetar eventos e o cursor
function resetSelection() {
  document.body.style.cursor = "default";

  // Remove todos os eventos para evitar duplicações
  document.removeEventListener("mouseover", handleMouseOver);
  document.removeEventListener("mouseout", handleMouseOut);
  document.removeEventListener("click", handleClick, true);
}

// Evento: ao passar o mouse sobre um elemento
function handleMouseOver(event) {
  event.target.style.outline = "2px solid red";
}

// Evento: ao tirar o mouse de um elemento
function handleMouseOut(event) {
  event.target.style.outline = "";
}

// Evento: ao clicar em um elemento
function handleClick(event) {
  event.preventDefault();
  event.stopPropagation();

  const element = event.target;
  const highlightClass = getElementSelector(element);

  // Salva a classe capturada no armazenamento da extensão
  chrome.storage.sync.set({ highlightClass }, () => {
    console.log(`Classe capturada: ${highlightClass}`);
  });

  // Reseta a seleção após capturar o elemento
  resetSelection();
}

// Função para gerar o seletor único do elemento
function getElementSelector(element) {
  let selector = element.tagName.toLowerCase();
  if (element.id) {
    selector += `#${element.id}`;
  }
  if (element.className) {
    const classes = element.className.split(" ").filter((cls) => cls.trim().length > 0);
    selector += "." + classes.join(".");
  }
  return selector;
}
