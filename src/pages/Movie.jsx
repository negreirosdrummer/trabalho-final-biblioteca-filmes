import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";
import "./Movie.css";

const moviesURL = import.meta.env.VITE_API; // URL da API de filmes
const apiKey = import.meta.env.VITE_API_KEY; // Chave da API

const Movie = () => {
  const { id } = useParams(); // Obtém o parâmetro de ID da URL
  const [movie, setMovie] = useState(null); // Estado para armazenar os dados do filme

  // Função que busca os detalhes de um filme específico
  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data); // Atualiza o estado com os detalhes do filme
  };

  // Função para formatar números como valores monetários
  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  // useEffect para buscar os detalhes do filme ao carregar a página
  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`; // Monta a URL da requisição com o ID do filme
    getMovie(movieUrl);
  }, [id]); // Executa o efeito sempre que o ID do filme mudar

  return (
    <div className="movie-page">
      {movie && (
        <>
          {/* Exibe o cartão do filme */}
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          {/* Exibe informações adicionais sobre o filme */}
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
