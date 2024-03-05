import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => {
        return <MovieCard movie={movie} key={movie.imdbId} />;
      })}
    </div>
  </>
);
