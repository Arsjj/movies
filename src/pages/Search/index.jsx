import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./index.scss";

const imgUrl = "https://image.tmdb.org/t/p/original";

function Search() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [response, error, load, dofetch] = useFetch(
    `https://api.themoviedb.org/3/search/multi?api_key=210df5155329bef70be1615bd2091852&language=en-US&query=${id}&page=1&include_adult=false`,
    "GET"
  );

  useEffect(() => {
    dofetch();
  }, [id]);

  console.log(response, 46416974864864);

  return (
    <div className="results">
      <h3>Search results</h3>
      {response?.results.map((result) => {
        return (
          <div
            className="mediaContainer"
            key={result.id}
            onClick={() => {
              navigate(
                result.media_type === "movie"
                  ? `/movies/info/${result.id}`
                  : result?.media_type === "tv"
                  ? `/series/info/${result.id}`
                  : `/person/${result.id}`
              );
            }}
          >
            <img
              // width={result.media_type === "movie" ? "" : "320"}
              height="200"
              src={
                imgUrl +
                (result.media_type === "person"
                  ? result?.profile_path
                  : result.poster_path || result.backdrop_path)
              }
            />
            <div>
              <span>{result?.title || result?.name}</span>{" "}
              {/* <span>{result?.media_type}</span> */}
              <p>{result?.vote_average}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Search;
