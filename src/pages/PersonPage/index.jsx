import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Biography from "./Components/Biography";
import Credits from "./Components/Credits";
import Pictures from "./Components/Pictures";
import ProfilePicture from "./Components/ProfilePicture";
import InfoMenu from "./Components/InfoMenu/InfoMenu";
import PersonalInfo from "./Components/PersonalInfo";
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../Url_s";

import "./index.scss";

const menu = () => {
  return [
    { name: "Biography", id: 1, isOpen: false },
    { name: "Cast", id: 2, isOpen: true },
    { name: "Pictures", id: 3, isOpen: false },
  ];
};

function PersonPage() {
  const [info, setInfo] = useState(menu());
  const [biography, cast, pictures] = info;
  const { id } = useParams();

  const [personData, , , fetchPersonData] = useFetch(
    `/person/${id}?${API_KEY}&language=en-US`
  );
  const [creditsData, , , fetchCredits] = useFetch(
    `/person/${id}/combined_credits?${API_KEY}&language=en-US`
  );
  const [imagesData, , , fetchImages] = useFetch(
    `/person/${id}/images?${API_KEY}`
  );

  useEffect(() => {
    fetchPersonData();
    fetchCredits();
    fetchImages();
    setInfo(menu());
  }, []);

  const changeMenu = (id) => {
    setInfo(
      info.map((item) => {
        if (item.id === id) {
          item.isOpen = true;
        } else {
          item.isOpen = false;
        }
        return item;
      })
    );
  };

  return (
    <div className="personContainer">
      <div className="menu" style={{ position: "sticky" }}>
        <ProfilePicture data={imagesData} />
        <div className="personInfo">
          <PersonalInfo data={personData} />
          <InfoMenu changeMenu={changeMenu} info={info} />
          <div className="infoMenu">
            {biography.isOpen && <Biography data={personData} />}
            {cast.isOpen && <Credits creditsData={creditsData} />}
            {pictures.isOpen && <Pictures data={imagesData} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonPage;
