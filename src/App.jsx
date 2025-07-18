import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NewsAPI from "./components/NewsAPI";
import Home from "./components/Home";
import NewsPage from "./components/NewsPage";
import SignPage from "./components/SignPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsAPI />} />
          <Route path="/news/:country" element={<NewsPage />} />
          <Route path="/signpage" element={<SignPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
