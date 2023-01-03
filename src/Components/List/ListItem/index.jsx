import { useState } from "react";
import { imgUrl } from "../../../Url_s";
import "./index.scss";


function ListItem({ index, img, title, overview, id, getMovie }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        left: isHovered && index * 225 - 50 + index * 2.5,
      }}
    >
      <img src={imgUrl + img} alt="" />
      {isHovered && (
        <>
          <div
            className="hover"
            style={{
              left: isHovered && index * 225 - 5 + index * 2.5,
            }}
            onClick={(e) => getMovie(e.target.id)}
            ids={id}
          >
            <img src={imgUrl + img} id={id} alt="" />
            <div className="itemInfo" id={id}>
              <div className="icons" id={id}>
                <i className="bx bx-play"></i>
                <i className="bx bx-add-to-queue"></i>
                <i className="bx bx-like"></i>
                <i className="bx bx-dislike"></i>
              </div>
              <div className="itemInfoTop" id={id}>
                <span>{title}</span>
                <span className="limit"></span>
                <span></span>
              </div>
              <div className="description" id={id}>{overview.slice(0, 95) + "..."}</div>
              <div className="genre"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
