import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Info from "./Info";
import useMediaType from "../../hooks/useMediaType";
import { PlayBtn, InfoBtn } from "../buttons";
import "./index.scss";

const imgUrl = "https://image.tmdb.org/t/p/original";

function Featured({ res, type }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const movie = useMediaType('movie')
  const home = useMediaType('home')
  

  const onPlay = (id) => {
    navigate(movie || home? `/watch/movie/${id}`: `/watch/serie/${id}`);
  };

  const onClose = () => {
    setShow(false);
  };

  const onInfo = () => {
    setShow(true);
  };

  return (
    <div className="featured">
      <div className="cover"></div>
      <img width="100%" src={imgUrl + res?.backdrop_path} alt={res?.title} />
      <div className="info">
        <h1>{res?.title || res?.name}</h1>
        <span className="desc">{res?.overview}</span>
        <div className="btns">
          <PlayBtn onPlay={onPlay} id={res?.id} /> 
          <InfoBtn onInfo={onInfo}/>
        </div>
      </div>
      {show ? <Info data={res} onClose={onClose} type={type}/> : null}
    </div>
  );
}

export default Featured;
