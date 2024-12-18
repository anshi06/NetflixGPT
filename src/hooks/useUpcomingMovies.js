import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_MOVIES_API_URL } from "../utils/constants";
import { addUpcomingMovies } from "../store/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config?.lang);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  useEffect(() => {
    if(!upcomingMovies.length){
      getUpcomingMovies();
    }
  }, []);

  const getUpcomingMovies = async () => {
    const res = await fetch(
      UPCOMING_MOVIES_API_URL + `${languageKey == "en" ? "en-US" : languageKey}`,
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addUpcomingMovies(data.results));
  };
};

export default useUpcomingMovies;
