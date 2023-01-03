import { useState } from "react";
import { imgUrl } from "../../../../Url_s";
import Slider from "./ImageSlider";
import "./index.scss";

function Pictures({ data }) {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const onShow = (id) => {
    setShow(true);
    setIndex(id);
  };

  const onClose = () => {
    setShow(false);
  };

  return (
    <div className="imagesContainer">
      {data?.profiles.map((item, id) => {
        return (
          <img
            width="200px"
            height="300px"
            src={imgUrl + item?.file_path}
            alt={item?.name}
            key={item?.file_path}
            onClick={() => onShow(id)}
          />
        );
      })}
      {show ? (
        <Slider
          data={data}
          onClose={onClose}
          index={index}
          setIndex={setIndex}
        />
      ) : null}
    </div>
  );
}

export default Pictures;
