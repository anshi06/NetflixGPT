import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES_API_URL } from "../utils/constants";
import { addPopularMovies } from "../store/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const res = await fetch(POPULAR_MOVIES_API_URL, API_OPTIONS);
    const data = await res.json();
    dispatch(addPopularMovies(data.results));
  };
};

export default usePopularMovies;
