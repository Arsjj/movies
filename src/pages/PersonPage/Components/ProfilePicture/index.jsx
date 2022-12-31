import { imgUrl } from "../../../../Url_s";
import "./index.scss";

function ProfilePicture({ data }) {
  return (
    <div>
      <div className="profilePictureContainer">
          <img
            height="400px"
            width="280px"
            src={imgUrl + data?.profiles[0]?.file_path}
            alt={data?.name}
          />
          <div className="addToFavourite">
            <span>Add to Favourite</span>
            <box-icon name="heart" color="red" type="solid"></box-icon>
          </div>
      </div>
    </div>
  );
}

export default ProfilePicture;
