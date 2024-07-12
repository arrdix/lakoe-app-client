import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/globals.css";
import { BrowserRouter as Router } from "react-router-dom";
import { IdProductCheckedProvider } from "./context/checkedProductContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IdProductCheckedProvider>
      <Router>
        <App />
      </Router>
    </IdProductCheckedProvider>
  </React.StrictMode>
);
