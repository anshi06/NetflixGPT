import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_MOVIES_API_URL } from "../utils/constants";
import { addTopRatedMovies } from "../store/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const res = await fetch(TOP_RATED_MOVIES_API_URL, API_OPTIONS);
    const data = await res.json();
    dispatch(addTopRatedMovies(data.results));
  };
};

export default useTopRatedMovies;
