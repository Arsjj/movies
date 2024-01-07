import { useNavigate } from "react-router-dom";

import useMediaType from "../../../hooks/useMediaType";
import { PlayBtn } from "../../buttons";
import { imgUrl } from "../../../Url_s";

import "./index.scss";

function Info({ data, onClose, type }) {
  const navigate = useNavigate();
  const movie = useMediaType("movie");
  const home = useMediaType("home");

  const play = (id) => {
    navigate(movie || home ? `/watch/movie/${id}` : `/watch/tv/${id}`);
  };

  return (
    <div>
      <div
        className="backDrop"
        onClick={() => {
          onClose();
        }}
      ></div>
      <>
        <div className="moreInfo">
          <div className="top">
            <img
              className="poster"
              src={imgUrl + data?.backdrop_path}
              alt={data?.name}
            />
            <div className="action">
              <div onClick={() => play(data.id)}>
                <PlayBtn />
              </div>
              <div className="like">+</div>
              <div className="like">
                <i class="bx bx-like"></i>
              </div>
            </div>
          </div>
          <div className="itemInfo">
            <div className="left">
              <h4>{data?.title || data?.name}</h4>
              <span className="vote">{data?.vote_average}</span>
              <span>
                {movie || type
                  ? data?.release_date.slice(0, 4)
                  : data?.first_air_date.slice(0, 4) +
                    "-" +
                    data?.last_air_date.slice(0, 4)}
              </span>

              <span>
                {movie || type ? (
                  <span className="runtime">{data?.runtime} min</span>
                ) : null}
              </span>
              <span className="hd">HD</span>
              <div>{data?.origin_countr}</div>
              <div>
                {movie || type
                  ? ""
                  : data?.number_of_seasons +
                    " " +
                    "seasons" +
                    " " +
                    data?.number_of_episodes +
                    " " +
                    "episodes"}
              </div>
              <div>
                <a href={data?.homepage}>Homepage</a>
              </div>
            </div>
            <div className="right">
              <div>
                <span className="genre">Genres:</span>
                <span className="nameList">
                  {data?.genres.map((genre) => {
                    return <span key={genre.name}>{genre.name}</span>;
                  })}
                </span>
              </div>
              <div>
                {data?.credits.cast.length ? (
                  <>
                    <span className="genre">Cast:</span>
                    <span>
                      {data?.credits.cast
                        .slice(0, 10)
                        .map((credit, id, arr) => {
                          return (
                            <span
                              className="nameSpan"
                              key={credit.name}
                              id={credit.id}
                              onClick={(e) =>
                                navigate(`/person/${e.target.id}`)
                              }
                            >
                              {id === arr.length - 1
                                ? credit.name
                                : `${credit.name},`}
                            </span>
                          );
                        })}
                    </span>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Info;
