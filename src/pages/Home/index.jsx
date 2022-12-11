import Featured from "../../Components/Feaatured";
import List from "../../Components/List";
import { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { url, url2, url3 } from "../../Url_s";
import useFetch from "../../hooks/useFetch";
import "./index.scss";
import Loader from "../../Components/Loader";

const Home = () => {
  const [list1, setList1] = useState("");
  const [list2, setList2] = useState("");
  const [list3, setList3] = useState("");
  const [profile, setProfile] = useState();

  useLayoutEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setList1(data))
    .catch((err) => console.log("something e=went weong"));

    fetch(url2)
      .then((res) => res.json())
      .then((res) => setList2(res))
      .catch((err) => console.log(err));

    fetch(url3)
      .then((res) => res.json())
      .then((res) => setList3(res))
      .catch(() => console.log("something e=went weong"));
  }, []);

  useLayoutEffect(() => {
    if (list3) {
      dofetch(list3.results[Math.round(Math.random() * 20)].id);
    }
  }, [list3]);

  async function dofetch(id) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/ ${id}?api_key=210df5155329bef70be1615bd2091852&append_to_response=videos,images,credits`
    );
    const data = await res.json();
    setProfile(data);
    window.scrollTo(0, 0);
  }

  return (
    <>
      {list1 ? (
        <div className="home">
          <Featured type={"movie"} res={profile} />
          <List res={list1} dofetch={dofetch} />
          <List res={list2} dofetch={dofetch} />
          <List res={list3} dofetch={dofetch} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
