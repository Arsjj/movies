import { imgUrl } from "../../../../../Url_s";
import "./index.scss";

function Slider({ data, onClose, index, setIndex }) {
  const imgs = data?.profiles.map((item) => imgUrl + item?.file_path);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slider">
      <div className="slideBackDrop" onClick={() => onClose()}></div>
      <div className="slideshow">
        <button className="action-button left" onClick={prev}>
          👈
        </button>
        <img className="mainImg" src={imgs[index]} alt="" />
        <button className="action-button right" onClick={next}>
          👉
        </button>
      </div>
    </div>
  );
}

export default Slider;
