import { useNavigate } from "react-router-dom";
import { imgUrl, noImgUrl } from "../../../../../Url_s";
import "./index.scss";




function CreaditDataItem({ item }) {
  const navigate = useNavigate();

  const onMedia = () => {
    navigate(
      item.media_type === "movie"
        ? `/movies/info/${item.id}`
        : `/series/info/${item.id}`
    );
  };

  return (
    <li className="creditItem" onClick={() => onMedia()}>
      <div className="mediaImage">
        <img
          width="100px"
          height="150px"
          src={item?.poster_path? imgUrl + item?.poster_path: noImgUrl}
          alt={item?.title}
        />
        <h4 className="mediaType">
          {item?.media_type.slice(0, 1).toUpperCase() +
            item?.media_type.slice(1)}
        </h4>
      </div>
      <div className="creditInfo">
        <span className="creditTitle">
          {item?.title?.slice(0, 15) || item.name.slice(0, 15)}
        </span>
        <span>Character: {item?.character.slice(0, 25)}</span>
      </div>
    </li>
  );
}

export default CreaditDataItem;
