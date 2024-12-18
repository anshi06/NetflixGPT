import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../store/moviesSlice";
import { useEffect } from "react";
import { MOVIE_VIDEO_URL, API_OPTIONS } from "../utils/constants";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useEffect(() => {
    if(!trailerVideo){
      getMovieVideos();
    }
  }, []);

  const getMovieVideos = async () => {
    const res = await fetch(MOVIE_VIDEO_URL + movieId + "/videos", API_OPTIONS);
    const data = await res.json();
    let trailer = data?.results.filter((video) => video.type === "Trailer");
    trailer = trailer.length > 0 ? trailer[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  return trailerVideo;
};

export default useTrailerVideo;
