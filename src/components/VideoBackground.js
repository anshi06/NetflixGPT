import useTrailerVideo from "../hooks/useTrailerVideo";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useTrailerVideo(movieId);

  if (!movieId || !trailerVideo) return;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={YOUTUBE_VIDEO_URL + trailerVideo.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
