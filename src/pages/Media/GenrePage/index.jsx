import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import MediaList from "../MediaLIst";
import Buttons from "../Components/Button";
import Loader from "../../../Components/Loader";
import useFetch from "../../../hooks/useFetch";
import useMediaType from "../../../hooks/useMediaType";
import { API_KEY } from "../../../Url_s";

import "./index.scss";

function GenrePage() {
  const params = useParams();
  const { genre, id, page } = params;
  const navigate = useNavigate();
  const movie = useMediaType("movie");

  const toPage = (page) => {
    navigate(
      movie
        ? `/movies/${genre}/${id}/${page}`
        : `/series/${genre}/${id}/${page}`
    );
  };

  const url = movie
    ? `/discover/movie?${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}&with_watch_monetization_types=flatrate`
    : ` /discover/tv?${API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;

  const [data, , , dofetch] = useFetch(url);

  useEffect(() => {
    dofetch();
  }, [page]);

  function toUpperCase(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <div>
      <div className="mediaByGenre">
        <div className="mediaGenre">
          <h3>{toUpperCase(genre)}</h3>
        </div>
        {data ? (
          <div className="movieList">
            <MediaList data={data} />
            <Buttons
              page={data?.page}
              toPage={toPage}
              pages={data?.total_pages}
            />
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default GenrePage;
