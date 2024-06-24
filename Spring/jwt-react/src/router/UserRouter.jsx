import useCheckLogin from "../hooks/common/useCheckLogin";
import { Outlet, Navigate } from "react-router-dom";

const UserRouter = () => {
  const { userId } = useCheckLogin();
  if (!userId) {
    alert("로그인이필요한 페이지");
  }

  return userId ? <Outlet /> : <Navigate to="/login" />;
};

export default UserRouter;
