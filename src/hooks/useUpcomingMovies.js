import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_MOVIES_API_URL } from "../utils/constants";
import { addUpcomingMovies } from "../store/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const res = await fetch(UPCOMING_MOVIES_API_URL, API_OPTIONS);
    const data = await res.json();
    dispatch(addUpcomingMovies(data.results));
  };
};

export default useUpcomingMovies;
