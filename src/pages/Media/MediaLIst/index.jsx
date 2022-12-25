import MovieItem from "./Item";
import "./index.scss";

function Mediist({ data }) {
  return (
      <ul className="ul">
        {data?.results?.map((data) => {
          return <MovieItem data={data} key={data.id} id={data.id} />;
        })}
      </ul>
  );
}

export default Mediist;
