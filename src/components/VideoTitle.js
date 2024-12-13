const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-24 absolute bg-gradient-to-r from-black text-white w-screen aspect-video pt-[20%]">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex ">
        <button className="bg-white text-black p-4 px-12 text-lg font-bold rounded hover:opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-700 text-white p-4 px-12 text-lg font-bold rounded mx-4">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
