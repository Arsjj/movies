import { useNavigate } from "react-router-dom";
import useMediaType from "../../../../hooks/useMediaType";
import { imgUrl, noImgUrl } from "../../../../Url_s";
import "./index.scss";


const MovieItem = ({ data }) => {
  const navigate = useNavigate()
  const movie = useMediaType('movie')
  

  return (
    <li className="mediaLi" id={data.id} >
      <div className="imgDiv"
      >
        <img
          className="img"
          width="245"
          height="140"
          src={data?.backdrop_path? imgUrl + data?.backdrop_path: noImgUrl} 
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
