import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Featured from "../../Components/Feaatured";

function InfoPage() {
  const [data, setData] = useState();

  const params = useParams();
  const current = params.id;

  let url = "";
  const location = useLocation();
  if (location.pathname.includes("movie")) {
    url = `https://api.themoviedb.org/3/movie/ ${current}?api_key=210df5155329bef70be1615bd2091852&append_to_response=videos,images,credits`;
  } else {
    url = `https://api.themoviedb.org/3/tv/ ${current}?api_key=210df5155329bef70be1615bd2091852&append_to_response=videos,images,credits`;
  }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div>
      <Featured res={data} />x
    </div>
  );
}

export default InfoPage;
