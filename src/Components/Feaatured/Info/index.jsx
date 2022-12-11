import { useNavigate } from "react-router-dom";
import { PlayBtn } from "../../buttons";
import useMediaType from "../../../hooks/useMediaType";
import "./index.scss";

const imgUrl = "https://image.tmdb.org/t/p/original";

function Info({ data, onClose, type }) {
  const navigate = useNavigate();
  const movie = useMediaType("movie");
  const home = useMediaType("home");

  console.log(type, 456);

  const play = (id) => {
    navigate(movie || home? `/watch/movie/${id}`: `/watch/tv/${id}`);
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
            <img className="poster" src={imgUrl + data?.backdrop_path} alt={data?.name} />
            <div className="action">
              <div onClick={() => play(data.id)}>
                <PlayBtn />
              </div>
              <div className="like">+</div>
              <div className="like">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAYNJREFUWEftl+tNAzEQhCedQCehEqASkkqASqAT6AQ00jma2/ixe06MheI/ke589pfZ3fF6h8nGbjIe/EugOwCvAPai9ieAZwDf0Qj0KkSYDwD8tYMwD1GoXiDCqDIWiiq9RVTqAWKYnmQzqsFQKWR65mbaCnQA8CK7HAHwGUP3Jc/D64c/WEJEFdJgSBgaDgVlDt27pVkmRoGsAgwRw5KGhiupFmKKANmKsgp0h4vkESBbUTZhu8NVAuLCjwVvSfLnqqdlATmfel9s4WSgViFbPbn4l3KD1ZUzyFYOrdazQD+tryth9iibW36VizUgfaegkbyr/b/smjcgkWwqhdSzpsghPZjdVXatpLaOzvOu6EOlarpklVUd/S+qTA30zGRHAzUP4NFAGi7to05uMBpIczHbb48EKnqPni8jgYreUwOyFZDm2obe0RScTdE1Vt7jBdqyqeebavNvQ1a7iXo2a81p3kRyvQ2heBvd0v3VgAjTvMVeqtlqKeN+fwNqSTWdQr/2lGUlUJpHFQAAAABJRU5ErkJggg==" />
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
                    data?.last_air_date.slice(0, 4)}
              </span>

              <span>
                {movie || type ? data?.runtime : null}
                <span className="runtime">min</span>{" "}
              </span>
              <span className="hd">HD</span>
              <div>{data?.origin_countr}</div>
              <div>
                {movie || type
                  ? ""
                  : data?.number_of_seasons +
                    "seasons" +
                    data?.number_of_episodes +
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
                <span className="genre">Cast:</span>
                <span>
                  {data?.credits.cast.slice(0, 10).map((credit, id) => {
                    return (
                      <span
                        className="nameSpan"
                        key={credit.name}
                        id={credit.id}
                        onClick={(e) => navigate(`/person/${e.target.id}`)}
                      >
                        {id > 8 ? credit.name : `${credit.name}` + ","}
                      </span>
                    );
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Info;
