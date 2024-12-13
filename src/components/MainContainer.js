import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if(!movies) return null;

  const mainMovie = movies[Math.floor(Math.random() * 15)];

  if(!mainMovie) return null;
  
  const { title, overview, id } = mainMovie;

  return (
    <div className="">
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
