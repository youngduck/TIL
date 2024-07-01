import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
// import { userStore } from "../store/userStore";

const KakaoLogin = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  console.log(searchParams, "searchParams");
  const code = searchParams.get("code");

  //   인가코드 백으로 보내는 코드
  useEffect(() => {
    const kakaoLogin = async () => {
      const url = `${process.env.REACT_APP_REDIRECT_URL}?code=${code}`;

      await axios({
        method: "GET",
        url: url,
        headers: {
          "Content-Type": "application/json;charset=utf-8", //json형태로 데이터를 보내겠다는뜻
        },
      }).then((res) => {
        //백에서 완료후 우리사이트 전용 토큰 넘겨주는게 성공했다면
        console.log(res, "res데이터");
        //로그인이 성공하면 이동할 페이지
        alert("카카오로그인성공");
        navigate("/");
      });
    };
    kakaoLogin();
  }, []);

  return (
    <div className="notice">
      <p>로그인 중입니다.</p>
      <p>잠시만 기다려주세요.</p>
    </div>
  );
};

export default KakaoLogin;

// import React from "react";

// const KakaoLogin = () => {
//   return (
//     <div className="notice">
//       <p>로그인 중입니다.</p>
//       <p>잠시만 기다려주세요.</p>
//     </div>
//   );
// };

// export default KakaoLogin;
