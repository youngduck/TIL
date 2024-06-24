import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../api/user-api";
import { useNavigate } from "react-router-dom";
import { userStore } from "../store/userStore";

const Signin = () => {
  const { setUserData } = userStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await login(data.userId, data.userPw);
    console.log(response, "setUserData(response);");
    const { no, userId, authList } = response;
    setUserData({ no, userId, authList });
    navigate("/");
  };

  return (
    <>
      <div className="text-[32px] font-bold text-center">로그인</div>
      <form className="w-full h-[500px]" onSubmit={handleSubmit(onSubmit)}>
        <div>ID</div>
        <input
          className="w-full border-2 border-black h-[50px] mb-4"
          {...register("userId", { required: true })}
        />
        {errors.userId && <span className="text-red-600">ID써주세요~</span>}
        <div>PASSWORD</div>
        <input
          type="password"
          className="w-full border-2 border-black h-[50px] mb-4"
          {...register("userPw", { required: true })}
        />
        {errors.userPw && (
          <span className="text-red-600">비밀번호써주세요~</span>
        )}

        <input className="w-full text-white bg-black h-[50px]" type="submit" />
      </form>
      <div className="w-full text-black bg-yellow-500 h-[50px] text-center leading-[50px] mb-4">
        카카오 로그인
      </div>
      <div className="w-full text-black bg-gray-300 h-[50px] text-center leading-[50px] mb-4">
        구글 로그인
      </div>
      <div className="w-full text-black bg-green-600 h-[50px] text-center leading-[50px] mb-4">
        네이버 로그인
      </div>
    </>
  );
};

export default Signin;
