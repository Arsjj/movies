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
    >
      <img src={imgUrl + img} alt={title} />
      {isHovered && (
        <>
          <div
            className="hover"
            style={{
              left: isHovered && index * 225 - 5 + index * 2.5,
            }}
            ids={id}
          >
            <img src={imgUrl + img} id={id} alt={title} />
            <div className="itemInfo" id={id}>
              <div className="icons" id={id}>
                <i className="bx bx-play"></i>
                <i className="bx bx-add-to-queue"></i>
                <i className="bx bx-like"></i>
                <i className="bx bx-dislike"></i>
              </div>
              <div className="itemInfoTop" id={id}>
                <span id={id} onClick={(e) => getMovie(e.target.id)}>
                  {title}
                </span>
              </div>
              <div className="description" id={id}>
                {overview}
              </div>
              <div className="genre"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
