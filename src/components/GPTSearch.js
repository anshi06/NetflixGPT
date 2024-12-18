import GptMoviesSuggestions from "./GptMoviesSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACK_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className="">
      <img className="w-full fixed -z-10 h-screen object-cover" alt="background-img" src={BACK_IMG} />
      <div className="">
        <GptSearchBar />
        <GptMoviesSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
