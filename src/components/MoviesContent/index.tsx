// MoviesContent.tsx
import * as C from "./styles";
import MovieCard from "../MovieCard";

interface MovieProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface MoviesContentProps {
  movies: MovieProps[];
}

function MoviesContent({ movies }: MoviesContentProps) {
  return (
    <C.Container>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </C.Container>
  );
}

export default MoviesContent;
