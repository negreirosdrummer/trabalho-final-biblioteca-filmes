import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

import "./index.css";

// Renderiza o aplicativo dentro da div com id "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Configura a navegação entre páginas */}
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} /> {/* Página inicial */}
          <Route path="movie/:id" element={<Movie />} /> {/* Detalhes do filme */}
          <Route path="search" element={<Search />} /> {/* Página de busca */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
