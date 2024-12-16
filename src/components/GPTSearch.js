import GptMoviesSuggestions from "./GptMoviesSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACK_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <img className="w-full absolute -z-10" alt="background-img" src={BACK_IMG} />
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GPTSearch;
