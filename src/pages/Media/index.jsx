import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import GenreList from "./Components/GenreList";
import MediaList from "./MediaLIst";
import Buttons from "./Components/Button";
import Loader from "../../Components/Loader";
import { movieGenresUrl, tvGenresUrl, BASE_URL, API_KEY } from "../../Url_s";

import useFetch from "../../hooks/useFetch";
import useMediaType from "../../hooks/useMediaType";

import "./index.scss";

function Media() {
  const [genreId, setGenreId] = useState("");
  const { pageId } = useParams();
  const movie = useMediaType("movie");
  const navigate = useNavigate();

  const url = movie
    ? BASE_URL +
      `/discover/movie?${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageId}&with_genres=${genreId}&with_watch_monetization_types=flatrate`
    : BASE_URL +
      `/discover/tv?${API_KEY}&sort_by=popularity.desc&page=${pageId}&timezone=America%2FNew_York&with_genres=${genreId}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;

  const genreUrl = movie ? movieGenresUrl : tvGenresUrl;

  const [data, error, loading, dofetch] = useFetch(url);
  const [genreData, , , fetchGenre] = useFetch(genreUrl);

  useEffect(() => {
    dofetch();
    fetchGenre();
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
            <GenreList onChange={onChange} data={genreData} mediaType={movie} />
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
