export const NETFLIX_LOGO =
  "https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460";

export const USER_LOGO =
  "data:image/png;base64,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";

export const BACK_IMG =
  "https://cdn-images-1.medium.com/v2/resize:fit:1024/1*5lyavS59mazOFnb55Z6znQ.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const NOWPLAYING_MOVIE_API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1&language=";

export const POPULAR_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/popular?page=2&language=";

export const TOP_RATED_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?&page=1&language=";

export const UPCOMING_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/upcoming?page=1&language=";

export const MOVIE_VIDEO_URL = "https://api.themoviedb.org/3/movie/";

export const YOUTUBE_VIDEO_URL = "https://www.youtube.com/embed/";

export const MOVIE_POSTER_URL = "https://image.tmdb.org/t/p/w500";

export const MOVIE_SEARCH_API = "https://api.themoviedb.org/3/search/movie?page=1&query=";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
];

export const openAIKey = process.env.REACT_APP_OPENAI_KEY;
