import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

const searchURL = import.meta.env.VITE_SEARCH; // URL da API de busca
const apiKey = import.meta.env.VITE_API_KEY; // Chave da API

const Search = () => {
  const [searchParams] = useSearchParams(); // Obtém os parâmetros de busca da URL

  const [movies, setMovies] = useState([]); // Estado para armazenar os filmes buscados
  const query = searchParams.get("q"); // Obtém o valor da query string "q"

  // Função que busca filmes com base na consulta
  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results); // Atualiza o estado com os filmes retornados
  };

  // useEffect que busca filmes sempre que a query string mudar
  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`; // Monta a URL da busca
    getSearchedMovies(searchWithQueryURL);
  }, [query]); // Executa novamente o efeito sempre que a query mudar

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {/* Mapeia e renderiza os filmes se a lista não estiver vazia */}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
