import React, { useEffect } from "react";
import { loginCheck } from "../api/user-api";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLogin = await loginCheck();
      console.log(isLogin, "isLogin");
      if (!isLogin) {
        alert("로그인이 필요한 페이지입니다.");
        navigate("/login");
      } else {
        // 로그인 성공 시 필요한 추가 로직을 여기에 작성합니다.
      }
    };

    checkLoginStatus();
  }, [navigate]);

  return (
    <>
      <div className="text-[32px] font-bold text-center">
        블로그페이지(로그인유저만)
      </div>
    </>
  );
};

export default Blog;
