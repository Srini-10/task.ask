import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppContent from "./base/AppContent.tsx";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
