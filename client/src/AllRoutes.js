import React from "react";
import { Route, Routes } from "react-router-dom";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import Questions from "./Pages/Questions/Questions";
import Tags from "./Pages/Tags/Tags";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Users from "./Pages/Users/Users";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route path="/Questions/:id" element={<DisplayQuestion />} />
      <Route path="/Tags" element={<Tags />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Users/:id" element={<UserProfile />} />
    </Routes>
  );
};

export default AllRoutes;
