import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import MediaList from "../MediaLIst";
import Buttons from "../Components/Button";
import useMediaType from "../../../hooks/useMediaType";
import Loader from "../../../Components/Loader";
import "./index.scss";

function GenrePage() {
  const params = useParams();
  const { genre, id, page } = params;
  const navigate = useNavigate();
  const movie = useMediaType("movie");
  
  const toPage = (page) => {
    navigate(movie? `/movies/${genre}/${id}/${page}`: `/series/${genre}/${id}/${page}`);
  };

  const url = movie
    ? `https://api.themoviedb.org/3/discover/movie?api_key=210df5155329bef70be1615bd2091852&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}&with_watch_monetization_types=flatrate`
    : ` https://api.themoviedb.org/3/discover/tv?api_key=210df5155329bef70be1615bd2091852&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
    
    const [data,  , , dofetch] = useFetch(url);
    console.log(data, 478)

  useEffect(() => {
    dofetch();
  }, [page]);

  function toUpperCase(str){
    return str[0].toUpperCase() + str.slice(1)
  }

  return (
    <div>
      <div className="movie">
        <div className="genre">
          <h3>{toUpperCase(genre)}</h3>
        </div>
        {data?<div className="movieList">
          <MediaList data={data} />
          <Buttons page={data?.page} toPage={toPage} pages={data?.total_pages}/>
        </div>: <Loader />}
      </div>
    </div>
  );
}

export default GenrePage;
