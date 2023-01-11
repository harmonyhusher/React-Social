import {Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Spotify from "./Components/Spotify/Spotify";
import Users from "./Components/UsersFunc/Users";
import React from "react";

const Links = () => {
  return (
    <Routes>
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/profile/*" element={<Profile />} />
      {/* <Route path="/users/" element={<UsersContainer />} /> */}
      <Route path="/login/" element={<Login />} />
      <Route path="/music/" element={<Spotify />} />
      <Route path="/users2/" element={<Users />} />
    </Routes>
  );
};

export default Links;
