import { useEffect, useLayoutEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Loader from "../../Components/Loader";
import useFetch from "../../hooks/useFetch";
import "./index.scss";

const youtubeUrl = "https://www.youtube.com/embed/";

function Watch() {
  const params = useParams();
  const id = params.id;

  let url = useLocation().pathname.includes("movie")
    ? `https://api.themoviedb.org/3/movie/ ${id}?api_key=210df5155329bef70be1615bd2091852&append_to_response=videos,images`
    : `https://api.themoviedb.org/3/tv/ ${id}?api_key=210df5155329bef70be1615bd2091852&append_to_response=videos,images,credits`;

  const [data, error, loading, dofetch] = useFetch(url);

  useEffect(() => {
    dofetch();
  }, []);

  return (
    <div className="watchContainer">
      {/* <div className="back">
        <i className="bx bx-arrow-back"></i>
        Home
      </div> */}
      {loading ? (
        <Loader />
      ) : (
        <div className="watch">
          <iframe
            className="video"
            src={youtubeUrl + data?.videos?.results[0]?.key+"?autoplay=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Watch;
