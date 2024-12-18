import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return null;

  return (
    <div className="bg-black">
      <div className="-mt-10 md:-mt-52 pl-0 md:pl-12 relative z-20">
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Upcoming Movies" movies={movies?.upcomingMovies} />
        <MovieList title="Top Rated Movies" movies={movies?.topRatedMovies} />
        <MovieList title="Popular" movies={movies?.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
