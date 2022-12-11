export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "api_key=210df5155329bef70be1615bd2091852";

export const url = BASE_URL + "/movie/popular?" + API_KEY + "&language=en-US&page=1";

export const url2 = BASE_URL + "/movie/now_playing?" + API_KEY + "&language=en-US&page=1";

export const url3 =
    BASE_URL +
    "/discover/movie?" +
    API_KEY +
    "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=&with_genres=37&with_watch_monetization_types=flatrate";

export const imgUrl = "https://image.tmdb.org/t/p/original";

