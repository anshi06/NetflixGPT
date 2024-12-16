import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config?.lang);
  
  return (
    <div className="pt-[7%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 bg-opacity-70">
        <input
          className="p-2 m-3 col-span-9 rounded-sm"
          type="text"
          placeholder={lang[languageKey].gptSearchPlaceHolder}
        />
        <button className="my-3 mr-3 col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
