export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "api_key=210df5155329bef70be1615bd2091852";


export const popularUrl = `/movie/popular?${API_KEY}&language=en-US&page=1`;
export const nowPlayingUrl = `/movie/now_playing?${API_KEY}&language=en-US&page=1`;
export const discoverUrl = `/discover/movie?${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=&with_genres=37&with_watch_monetization_types=flatrate`;


export const movieGenresUrl = `/genre/movie/list?${API_KEY}&language=en-US`;
export const tvGenresUrl = `/genre/tv/list?${API_KEY}&language=en-US`;


export const imgUrl = "https://image.tmdb.org/t/p/w500";
export const originalImgUrl = "https://image.tmdb.org/t/p/original";
export const noImgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLICBu_i2rNNd8l9Zz-DUNSwFXR9xAzCutg&usqp=CAU"
export const youtubeUrl = "https://www.youtube.com/embed/";


