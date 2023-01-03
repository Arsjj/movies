import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Loader from "../../Components/Loader";
import useFetch from "../../hooks/useFetch";
import { imgUrl, noImgUrl, API_KEY } from "../../Url_s";

import "./index.scss";

function Search() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [response, , loading, dofetch] = useFetch(
    `/search/multi?${API_KEY}&language=en-US&query=${id}&page=1&include_adult=false`
  );

  useEffect(() => {
    dofetch();
  }, [id]);

  return (
    <div className="results">
      {loading? <Loader/>: (
        <>
          <h3>{response?.results.length ? "Search results" : "No results"}</h3>
          <div className="mediaBlock">
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
                  <div className="imgDiv">
                    <img
                      height="150px"
                      width="250px"
                      src={
                        result.backdrop_path ||
                        result.profile_path ||
                        result.poster_path
                          ? imgUrl +
                            (result.media_type === "person"
                              ? result?.profile_path
                              : result.backdrop_path || result.poster_path)
                          : noImgUrl
                      }
                      alt={result?.name}
                    />
                  </div>

                  <>
                    <div className="infoDiv">
                      <span>{result?.title || result?.name}</span>{" "}
                      <span className="mediaType">
                        {result?.media_type[0].toUpperCase() +
                          result?.media_type.slice(1)}
                      </span>
                    </div>
                  </>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
