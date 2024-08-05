import React from "react";
import "./App.css";

declare const chrome: any;

const App: React.FC = () => {
  const togglePanel = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: toggleSidebar,
      });
    });
  };

  return (
    <div className="App">
      <h1>React Chrome Extension</h1>
      <button onClick={togglePanel}>Toggle Panel</button>
    </div>
  );
};

function toggleSidebar() {
  const panelId = "my-extension-panel";
  let panel = document.getElementById(panelId);

  if (panel) {
    panel.remove();
  } else {
    panel = document.createElement("div");
    panel.id = panelId;
    panel.style.position = "fixed";
    panel.style.right = "0";
    panel.style.top = "0";
    panel.style.width = "300px";
    panel.style.height = "100%";
    panel.style.backgroundColor = "#fff";
    panel.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    panel.innerHTML =
      '<div style="padding: 10px; color: black">Right Side Panel</div>';
    document.body.appendChild(panel);
  }
}

export default App;
