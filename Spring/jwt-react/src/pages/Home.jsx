import React from "react";
import api from "../api/axiosInstance";

const Home = () => {
  const abc = async () => {
    const data = await fetch("http://localhost:8084/test");
    const responseData = data.json();

    console.log(responseData, "responseData");
  };
  const abc2 = async () => {
    console.log(api.defaults.headers);
  };

  const abc3 = async () => {
    api.defaults.headers["Authorization"] = `Bearer 으아아`;

    api.headers.Authorization = `Bearer zzzz`;
  };

  return (
    <div>
      <div className="text-[32px] font-bold text-center">
        홈페이지(모든유저접근 가능)
      </div>

      <button className="m-6" onClick={abc}>
        test api
      </button>
      <button className="m-6" onClick={abc2}>
        axios객체 조회
      </button>
      <button className="m-6" onClick={abc3}>
        authorizatoin값 부여
      </button>
    </div>
  );
};

export default Home;
