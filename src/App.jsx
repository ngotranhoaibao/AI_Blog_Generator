import React from "react";
import EditorPage from "./pages/EditorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/index.jsx";
import HomePage from "./pages/HomePage/index.jsx";
import HistoryPage from "./pages/HistoryPage/index.jsx";
function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
