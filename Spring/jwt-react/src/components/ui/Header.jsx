import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { userStore } from "../../store/userStore";
import { logout } from "../../api/user-api";

const Header = () => {
  const navigate = useNavigate();
  const isLogin = Boolean(Cookies.get("accessToken"));
  const { userState, setUserData } = userStore();

  const onLogout = () => {
    const boo = logout();
    if (boo) {
      setUserData({ no: null, userId: null, authList: null });
      navigate("/login");
    }
  };

  return (
    <div className="border-b-4 border-black flex mx-auto justify-between p-4 mb-4">
      <Link className="text-[20px]" to="/">
        HOME
      </Link>
      <div className="">
        <Link className="text-[20px] px-4" to="/admin">
          ADMIN
        </Link>
        <Link className="text-[20px] px-4" to="/blog">
          BLOG
        </Link>
        {isLogin ? (
          <div className="inline">
            <div className="inline text-[20px]">ID: {userState.userId}</div>
            <div
              onClick={onLogout}
              className="inline cursor-pointer text-[20px] px-4"
            >
              LOGOUT
            </div>
          </div>
        ) : (
          <>
            <Link className="text-[20px] px-4" to="/login">
              LOGIN
            </Link>
            <Link className="text-[20px] px-4" to="/signup">
              SIGNUP
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
