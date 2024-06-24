import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signup } from "../api/user-api";

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const response = await signup(data);
    console.log(response);
    navigate("/login");
  };

  return (
    <div>
      <div className="text-[32px] font-bold text-center">회원가입</div>
      <form className="w-full h-[500px]" onSubmit={handleSubmit(onSubmit)}>
        <div>ID</div>
        <input
          className="w-full border-2 border-black h-[50px] mb-4"
          {...register("userId")}
        />
        <div>PASSWORD</div>
        <input
          type="password"
          className="w-full border-2 border-black h-[50px] mb-4"
          {...register("userPw", { required: true })}
        />
        <div>이름</div>
        <input
          className="w-full border-2 border-black h-[50px] mb-4"
          {...register("name", { required: true })}
        />
        <div>email</div>
        <input
          type="email"
          className="w-full border-2 border-black h-[50px] mb-4"
          {...register("email", { required: true })}
        />

        <input className="w-full text-white bg-black h-[50px]" type="submit" />
      </form>
    </div>
  );
};

export default Signup;
