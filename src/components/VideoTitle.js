const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-24 absolute bg-gradient-to-r from-black text-white pt-[20%] overflow-hidden w-full aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 w-1/3">
        {overview ||
          "Apologies, but the overview for this movie is currently unavailable. We’re working to provide you with the most accurate and detailed information soon. In the meantime, feel free to explore other sections or check back later for updates. Thank you for your patience and understanding."}
      </p>
      <div className="flex">
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
