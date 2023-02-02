import { useEffect, useState } from "react";
import Slider from "./ImageSlider";
import { imgUrl } from "../../../../Url_s";

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
  
  const navbar = document.querySelector('.navbar')
  const main = document.querySelector('.main');

  useEffect(() => {
    navbar.style.position = show? "absolute": "fixed"
    main.style.display = show? "none": ""
  }, [show])


  

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
