import React, { useState } from "react";
import Titel from "./components/Title";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";
import "./App.css";
import precious from "./components/img/precious.jpg";

export default function App() {
  // let like = false;
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  return (
    <div className="container text-center">
      <Titel text={" likePhotoApp"} />
      <Titel classes={"subtitle"} text={`Likes ${count}`} />
      <div
        className="card card-dark m-auto shadow-md"
        style={{ width: 300, cursor: "pointer" }}
      >
        <div className="card-header fx-xl">
          <AiFillSmile className="mr-1" />

          <small>my-precious </small>
        </div>
        <img
          src={precious}
          alt="img"
          style={{ height: "fit-content" }}
          onClick={toggleLike}
        />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment />{" "}
          {like ? (
            <AiFillHeart className="text-danger" onClick={toggleLike} />
          ) : (
            <AiOutlineHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
}
