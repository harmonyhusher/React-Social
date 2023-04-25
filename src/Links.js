import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Spotify from "./Components/Spotify/Spotify";
import Users from "./Components/UsersFunc/Users";
import ChatPage from "./pages/Chat/ChatPage";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "./Redux/HooksTypes";
import { useEffect } from "react"
import { useLocation } from "react-router-dom";

const Links = () => {
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const currentRoute = useLocation().pathname;

  useEffect(() => {
    if (!isAuth && currentRoute !== "/login") {
      navigate("/login");
    } else if (isAuth && currentRoute === "/login") {
      navigate("/profile");
    }
  }, [isAuth, navigate, currentRoute]);

  // Render your component here

  return (
    <Routes>
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/profile/*" element={<Profile />} />
      <Route path="/login/" element={<Login />} />
      <Route path="/music/" element={<Spotify />} />
      <Route path="/users2/" element={<Users />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
};

export default Links;
