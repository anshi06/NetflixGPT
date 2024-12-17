import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movies, movieNames } = gpt;

  if (!movieNames) return null;
  if (!movies.length) return null;

  return (
    <div className="flex justify-center">
      <div className="p-4 m-4 bg-black bg-opacity-70 text-white w-fit">
        {movieNames.map((name, index) => (
          <MovieList key={name} title={name} movies={movies[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMoviesSuggestions;
