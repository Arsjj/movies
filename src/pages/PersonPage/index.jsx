import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Biography from "./Components/Biography";
import Credits from "./Components/Credits";
import Pictures from "./Components/Pictures";
import ProfilePicture from "./Components/ProfilePicture";
import InfoMenu from "./Components/InfoMenu/InfoMenu";
import PersonalInfo from "./Components/PersonalInfo";

import useFetch from "../../hooks/useFetch";
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

  const persoUrl = `https://api.themoviedb.org/3/person/${id}?api_key=210df5155329bef70be1615bd2091852&language=en-US`;
  const creditsUrl = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=210df5155329bef70be1615bd2091852&language=en-US`;
  const imagesUrl = `https://api.themoviedb.org/3/person/${id}/images?api_key=210df5155329bef70be1615bd2091852`;

  const [personData, , , fetchPersonData] = useFetch(persoUrl);
  const [creditsData, , , fetchCredits] = useFetch(creditsUrl);
  const [imagesData, , , fetchImages] = useFetch(imagesUrl);

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
