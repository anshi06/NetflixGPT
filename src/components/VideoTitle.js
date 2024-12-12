const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-2 w-10">Play</button>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
