import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // ✅ Use HashRouter for GitHub Pages
import App from "./App";
import "./style.css"; // Ensure this exists in /src/

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("❌ Root element not found. Ensure there is a <div id='root'></div> in index.html.");
} else {
  ReactDOM.createRoot(rootElement).render(
    <HashRouter>
      <App />
    </HashRouter>
  );
}



