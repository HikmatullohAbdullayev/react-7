import React from "react";
// import style from "./home.module.css";
import {PostCard} from "../../components/card/post-card"
import { request } from "../../config/requset";

export const Home = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    try {
      const res = await request.get("/posts");
      setData(res.data);
    } catch (error) {
      // console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div className="container">
      {data.length> 0 ?data?.map((item) => (
        <PostCard refetch={getData} key={item.id} {...item} />
      )): "Loading..."}
    </div>
    </>
  );
};
