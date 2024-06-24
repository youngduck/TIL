import api from "./axiosInstance";
import Cookies from "js-cookie";

//ANCHOR - 로그인
export const login = async (userId, userPw) => {
  const response = await api.post(
    `/login?username=${userId}&password=${userPw}`
  );
  const { status, headers } = response;
  const accessToken = headers.authorization.replace("Bearer ", "");

  if (status === 200) {
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    Cookies.set("accessToken", accessToken);
    const data = loginCheck();

    alert("로그인 성공");
    return data;
  }
};

//ANCHOR - 로그인 체크 (해석)
// 1. 쿠키에 jwt있는지확인
// 2. jwt로 사용자 정보 요청
export const loginCheck = async () => {
  const accessToken = Cookies.get("accessToken");
  // 토큰 미존재
  if (!accessToken) {
    console.log("쿠키에 accessToken 없음");
    // logoutSetting() -> headers의 onLogout로직 까지 추가해주어야 완전한 로직인데 리팩토링필요
    return;
  }
  //토큰 존재
  let response;
  api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  try {
    response = await api.get(`/users/info`);
  } catch (error) {
    console.log(`error:${error}`);
    return;
  }

  // 인증실패
  if (response.data === "UNAUTHORIZED" || response.status === 401) {
    console.log("accessTOken으로 사용자 인증정보 요청실패");
    return;
  }

  // 인증성공
  console.log("accessTOken으로 사용자 인증정보 요청성공");
  const data = loginSetting(response, accessToken);
  return data;
};

//ANCHOR - 로그인 세팅
const loginSetting = async (userData, accessToken) => {
  //userData전역변수에 저장하는 로직 블라블라블라
  const { no, userId, authList } = userData.data;
  console.log(no, userId, authList);

  api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  Cookies.set("accessToken", accessToken);

  return userData.data;
};

//ANCHOR - 로그아웃
export const logout = () => {
  const check = window.confirm("로그아웃 하시겠습니까?");

  if (check) {
    api.defaults.headers.common.Authorization = undefined;
    Cookies.remove("accessToken");
    return true;
  }
  return false;
  //userData전역변수값 초기화
};

//ANCHOR - 회원가입
export const signup = async (data) => {
  console.log(data, "data");
  const response = await api.post(`/users`, {
    userId: data.userId,
    userPw: data.userPw,
    name: data.name,
    email: data.email,
  });

  const { status } = response;

  if (status === 200) {
    alert("회원가입 성공");
    console.log("회원가입성공");
  }
};
