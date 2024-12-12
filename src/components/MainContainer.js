import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if(!movies) return null;

  const mainMovie = movies[Math.floor(Math.random() * 15)];

  if(!mainMovie) return null;
  
  const { title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
