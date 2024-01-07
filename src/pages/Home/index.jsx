import { useState, useLayoutEffect, useEffect } from "react";

import Featured from "../../Components/Feaatured";
import List from "../../Components/List";
import Loader from "../../Components/Loader";
import useFetch from "../../hooks/useFetch";
import {
  popularUrl,
  nowPlayingUrl,
  discoverUrl,
  BASE_URL,
  API_KEY,
} from "../../Url_s";

import "./index.scss";

const Home = () => {
  const [profile, setProfile] = useState();

  const [list1, , , fetchList] = useFetch(popularUrl);
  const [list2, , , fetchList2] = useFetch(nowPlayingUrl);
  const [list3, , , fetchList3] = useFetch(discoverUrl);

  useLayoutEffect(() => {
    fetchList();
    fetchList2();
    fetchList3();
  }, []);

  useEffect(() => {
    if (list3) {
      getMovie(list3?.results[Math.round(Math.random() * 20)].id);
    }
  }, [list3]);

  async function getMovie(id) {
    const res = await fetch(
      `${BASE_URL}/movie/${id}?${API_KEY}&append_to_response=videos,images,credits`
    );
    const data = await res.json();
    setProfile(data);
    window.scrollTo(0, 0);
  }

  return (
    <>
      {list3 ? (
        <div className="home">
          <Featured type={"movie"} res={profile} />
          {list1 ? <List data={list1} getMovie={getMovie} /> : null}
          {list2 ? <List data={list2} getMovie={getMovie} /> : null}
          {list3 ? <List data={list3} getMovie={getMovie} /> : null}
        </div>
      ) : (
        <Loader />
      )
      }
    </>
  );
};

export default Home;
