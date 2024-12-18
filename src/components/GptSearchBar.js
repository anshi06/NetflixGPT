import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openAI";
import { API_OPTIONS, MOVIE_SEARCH_API } from "../utils/constants";
import { addGptMovieResult } from "../store/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);

  const searchMoviesTmdb = async (movieName) => {
    const data = await fetch(MOVIE_SEARCH_API + movieName, API_OPTIONS);
    const json = await data.json();
    return json?.results;
  };

  const handleGptSearch = async () => {
    //Make an api call to openAI and get movie results.
    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Exaple Result: Gaddar, Sholey, Don, Heorine, 3 Idiots and Please understand laguage code" +
      languageKey +
      "and give results in english";
    const gptResults = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: gptQuery }],
    });

    if (!gptResults.choices[0]) {
      //Error Handling
    }

    const gptMovies = gptResults.choices[0]?.message.content.split(",");

    const promiseArr = gptMovies.map((movie) => searchMoviesTmdb(movie));

    const tmdbResults = await Promise.all(promiseArr);

    dispatch(addGptMovieResult({ movieNames: gptMovies, movies: tmdbResults }));
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12 bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-2 m-3 col-span-9 rounded-sm"
          type="text"
          placeholder={lang[languageKey].gptSearchPlaceHolder}
          ref={searchText}
        />
        <button
          className="my-3 mr-3 col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearch}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
