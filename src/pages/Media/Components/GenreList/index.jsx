import { useState } from "react";
import "./index.scss";

function GenreList({ data, onChange, mediaType }) {
  const [show, setShow] = useState(false);
  const onShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="select">
      <h3>{mediaType ? "Movies" : "Series"}</h3>
      <div>
        <div className="genreContainer" onClick={onShow}>
          <span>Genre</span>
          <i className="bx bx-chevron-down"></i>
        </div>
        {show ? (
          <div className="listContainer">
            {data
              ? data.genres.map((data) => {
                  return (
                    <div
                      className="list"
                      key={data.id}
                      id={data?.id}
                      title={data?.name}
                      onClick={(e) => {
                        onChange(e);
                      }}
                    >
                      {data?.name}
                    </div>
                  );
                })
              : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default GenreList;
