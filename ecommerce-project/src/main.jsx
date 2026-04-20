import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,

  // We saw useEffect runs twice due to <StrictMode>.
  // Running twice helps us catch bugs.
  // Running useEffect twice should result in the same HTML being rendered.
  // This is called idempotency.
  // This only happens in development.
  // In production (the website is on the Internet), <StrictMode> doesn't do anything.
);
