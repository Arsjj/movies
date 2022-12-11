import CreaditDataItem from "./CreditItem";
import "./index.scss";

function Credits({ creditsData }) {
  return (
    <ul className="creditsContainer">
        {creditsData?.cast
          .sort(
            (a, b) =>
              Number((b?.first_air_date || b?.release_date || "").slice(0, 4)) -
              Number((a?.release_date || a?.first_air_date || "").slice(0, 4))
          )
          .map((item) => {
            return <CreaditDataItem key={item?.credit_id} item={item} />;
          })}
    </ul>
  );
}

export default Credits;
