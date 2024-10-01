import { Link } from "react-router-dom"; // Importa o componente Link para navegação
import { FaStar } from "react-icons/fa"; // Importa o ícone de estrela para exibir a avaliação do filme

const imagesURL = import.meta.env.VITE_IMG; // URL base para as imagens dos filmes

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      {/* Exibe o pôster do filme */}
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      {/* Exibe o título do filme */}
      <h2>{movie.title}</h2>
      {/* Exibe a avaliação do filme com o ícone de estrela */}
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {/* Exibe o link para os detalhes do filme, se showLink for true */}
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
