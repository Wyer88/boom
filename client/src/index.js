import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import App from "./App"
import ErrorBoundary from "./components/ErrorBoundary"
import "./style.css"

const rootElement = document.getElementById("root")

if (!rootElement) {
  console.error("❌ Root element not found. Ensure there is a <div id='root'></div> in index.html.")
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <HashRouter>
          <App />
        </HashRouter>
      </ErrorBoundary>
    </React.StrictMode>,
  )
}


