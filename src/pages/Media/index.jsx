import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import GenreList from "./Components/GenreList";

import MediaList from "./MediaLIst";
import Buttons from "./Components/Button";
import Loader from "../../Components/Loader";

import useFetch from "../../hooks/useFetch";
import useMediaType from "../../hooks/useMediaType";

import "./index.scss";

function Media() {
  const [genre, setGenre] = useState();
  const [genreId, setGenreId] = useState("");

  const { pageId } = useParams();

  const navigate = useNavigate();
  const movie = useMediaType("movie");

  const url = movie
    ? `https://api.themoviedb.org/3/discover/movie?api_key=210df5155329bef70be1615bd2091852&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageId}&with_genres=${genreId}&with_watch_monetization_types=flatrate`
    : `
  https://api.themoviedb.org/3/discover/tv?api_key=210df5155329bef70be1615bd2091852&language=en-US&sort_by=popularity.desc&page=${pageId}&timezone=America%2FNew_York&with_genres=${genreId}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;

  const genreUrl = movie
    ? "https://api.themoviedb.org/3/genre/movie/list?api_key=210df5155329bef70be1615bd2091852&language=en-US"
    : " https://api.themoviedb.org/3/genre/tv/list?api_key=210df5155329bef70be1615bd2091852&language=en-US";

  const [data, error, loading, dofetch] = useFetch(url);

  useEffect(() => {
    fetch(genreUrl)
      .then((res) => res.json())
      .then((res) => setGenre(res));
  }, []);

  useEffect(() => {
    dofetch();
  }, [pageId]);

  function toLowerCase(str) {
    return str[0].toLowerCase() + str.slice(1);
  }

  const onChange = (e) => {
    setGenreId(e.target.value);

    navigate(
      movie
        ? `/movies/${toLowerCase(e.target.title)}/${e.target?.id}/1`
        : `/series/${toLowerCase(e.target.title)}/${e.target?.id}/1`
    );
  };

  const toPage = (page) => {
    navigate(movie ? `/movies/${page}` : `/series/${page}`);
  };

  return (
    <>
      {data ? (
        <div className="movie">
          <div className="genreSelect">
            <GenreList onChange={onChange} data={genre} mediaType={movie} />
          </div>
          {loading || (
            <div className="movieList">
              <MediaList data={data} />
              <Buttons
                page={data?.page}
                toPage={toPage}
                pages={data?.total_pages}
              />
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Media;
