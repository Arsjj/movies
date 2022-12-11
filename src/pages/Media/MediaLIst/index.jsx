import MovieItem from "./Item";
import "./index.scss";

function Mediist({ data }) {
  return (
    <div>
      <ul className="ul">
        {data?.results?.map((data) => {
          return <MovieItem data={data} key={data.id} id={data.id} />;
        })}
      </ul>
    </div>
  );
}

export default Mediist;
