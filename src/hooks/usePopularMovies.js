import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES_API_URL } from "../utils/constants";
import { addPopularMovies } from "../store/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config?.lang);
  
  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const res = await fetch(POPULAR_MOVIES_API_URL + `${languageKey == "en" ? "en-US" : languageKey}`, API_OPTIONS);
    const data = await res.json();
    dispatch(addPopularMovies(data.results));
  };
};

export default usePopularMovies;
