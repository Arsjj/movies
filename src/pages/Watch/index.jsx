import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import Loader from "../../Components/Loader";
import useFetch from "../../hooks/useFetch";
import { youtubeUrl, API_KEY } from "../../Url_s";

import "./index.scss";



function Watch() {
  const params = useParams();
  const id = params.id;

  let url = useLocation().pathname.includes("movie")
    ? `/movie/ ${id}?${API_KEY}&append_to_response=videos`
    : `/tv/ ${id}?${API_KEY}&append_to_response=videos,images,credits`;

  const [data, , loading, dofetch] = useFetch(url);

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
            src={youtubeUrl + data?.videos?.results[0]?.key + "?autoplay=1"}
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
