import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS, NOWPLAYING_MOVIE_API_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../store/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config?.lang);
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, []);

  const getNowPlayingMovies = async () => {
    const res = await fetch(
      NOWPLAYING_MOVIE_API_URL +
        `${languageKey == "en" ? "en-US" : languageKey}`,
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addNowPlayingMovies(data.results));
  };
};

export default useNowPlayingMovies;
