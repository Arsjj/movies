function PersonalInfo({ data }) {
  return (
    <>
      <h2>{data?.name}</h2>
      {data?.birthday ? (
        <span className="birthInfo">
          Born: {data?.birthday}
          {data?.place_of_birth? (
            <span> in {data?.place_of_birth}</span>
          ) : null}
        </span>
      ) : null}
      {data?.homepage ? <a href={data?.homepage}>Homepage</a> : null}
    </>
  );
}

export default PersonalInfo;
