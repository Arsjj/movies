import { Link } from "react-router-dom";

function PersonalInfo({data}) {
  return (
    <>
      <h2>{data?.name}</h2>
      <span>
        Born: {data?.birthday} in {data?.place_of_birth}
      </span>
      {data?.homepage? <a href={data?.homepage}>Homepage</a>: null}
    </>
  );
}

export default PersonalInfo;
