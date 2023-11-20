import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <li>
        <Link to={"/products"}>go product</Link>
      </li>
      <h1>home!</h1>;
    </>
  );
};

export default Home;
