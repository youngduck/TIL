import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRouter from "./UserRouter";

import Header from "../components/ui/Header";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import KakaoLogin from "../pages/KakaoLogin";
import Signup from "../pages/Signup";
import Blog from "../pages/Blog";
import Admin from "../pages/Admin";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="w-[1000px] mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/login/oauth2/callback/kakao" element={<KakaoLogin />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/blog" element={<Blog />} />
          <Route element={<UserRouter />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
