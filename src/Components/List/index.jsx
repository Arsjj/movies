import { useRef, useState } from "react";
import ListItem from "./ListItem";
import "./index.scss";

function List({ data, getMovie }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  function handleClick(direction) {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 15) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  }


  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <div className="sliderArrow left" onClick={() => handleClick("left")}>
          <i className="bx bx-chevron-left"></i>
        </div>
        <div className="container" ref={listRef}>
          
          {data? data.results.map((item, id) => {
            return <ListItem getMovie={getMovie} index={id} key={item.id} id={item.id} img={item.backdrop_path} title= {item.title} overview = {item.overview}
            />;
          }): <p>Loading</p> }

        </div>
        <div className="sliderArrow right" onClick={() => handleClick("right")}>
          <i className="bx bx-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}

export default List;
