import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMediaType from "../../../../hooks/useMediaType";
import "./index.scss";

const imgUrl = "https://image.tmdb.org/t/p/w500";

const MovieItem = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate()
  const movie = useMediaType('movie')
  

  return (
    <li className="li" id={data.id} >
      <div className="imgDiv"
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="img"
          width="245"
          height="140"
          src={imgUrl + data?.backdrop_path} 
          alt={data?.title || data?.name}
          id={data.id}
          onClick={() => {navigate(movie? `/movies/info/${data.id}`: `/series/info/${data.id}`)}}
        />
      </div>

      <div className="hovered" >
        <div className="title">
          <span>
            <span>{data?.title? data?.title.slice(0,15): data.name.slice(0,15)}</span>
            <span className="vote">{data.vote_average}</span>
          </span>
          <i className="bx bx-add-to-queue"></i>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;
