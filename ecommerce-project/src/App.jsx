import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";

import "./App.css";

function App() {
  return (
    <Routes>
      {/* Route prop path="/" same as index prop */}
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<div>Test checkout page</div>} />
    </Routes>
  );
}

export default App;
