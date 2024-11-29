document.getElementById("selectElementButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      // Tenta enviar uma mensagem ao content.js
      chrome.tabs.sendMessage(tabs[0].id, { action: "selectElement" }, (response) => {
        if (chrome.runtime.lastError) {
          // Se o script não estiver injetado, injeta dinamicamente
          chrome.scripting.executeScript(
            {
              target: { tabId: tabs[0].id },
              files: ["content.js"],
            },
            () => {
              // Reenvia a mensagem após injetar o script
              chrome.tabs.sendMessage(tabs[0].id, { action: "selectElement" });
            }
          );
        } else {
          console.log(response.status);
        }
      });
    } else {
      alert("Nenhuma aba ativa foi encontrada.");
    }
  });
});

document.getElementById("highlightButton").addEventListener("click", () => {
  const color = document.getElementById("colorPicker").value;
  chrome.storage.sync.get("highlightClass", (result) => {
    if (result.highlightClass) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: (highlightClass, color) => {
              const elements = document.querySelectorAll(highlightClass);
              elements.forEach((el) => {
                el.style.backgroundColor = color;
              });
            },
            args: [result.highlightClass, color],
          });
        } else {
          alert("Nenhuma aba ativa foi encontrada.");
        }
      });
    } else {
      alert("Nenhuma classe foi capturada!");
    }
  });
});
