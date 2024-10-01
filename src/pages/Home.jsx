import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API; // URL da API de filmes
const apiKey = import.meta.env.VITE_API_KEY; // Chave da API

const Home = () => {
  const [topMovies, setTopMovies] = useState([]); // Estado para armazenar os melhores filmes

  // Função que busca os melhores filmes da API
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results); // Atualiza o estado com os filmes retornados
  };

  // useEffect para buscar os filmes quando o componente é montado
  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`; // Monta a URL da requisição
    getTopRatedMovies(topRatedUrl);
  }, []); // O array vazio faz com que o useEffect seja executado apenas uma vez

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {/* Mapeia e renderiza os filmes se a lista não estiver vazia */}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
