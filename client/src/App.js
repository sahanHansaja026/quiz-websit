import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Add from "./pages/add";
import Login from "./pages/login";
import Signup from "./pages/register";
import Create from "./pages/create_card";
import Home from "./pages/home";
import Profile from "./pages/profile";
import QuizCard from "./pages/quizcard";
import NavBar from "./component/navbar";
import Quiz from "./pages/quiz";
import ScorePage from "./pages/score";
import CurdsPage from "./pages/curd";
import EditPost from "./pages/editquestion";
import QuestionDeatails from "./pages/questionDeatails";
import BarChart from "./pages/chart";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Search from "./pages/search";

const App = () => {
  const location = useLocation(); // This should work correctly now

  const noNavBarPaths = ["/", "/register"];

  return (
    <div className="container">
      {!noNavBarPaths.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add/:id" element={<Add />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/create" element={<Create />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chart" element={<BarChart />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/quiz/:card_id" element={<Quiz />} />
        <Route path="/curds/:id" element={<CurdsPage />} />
        <Route path="/score/:card_id" element={<ScorePage />} />
        <Route path="/post/:id" element={<QuizCard />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/getquestion/:id" element={<QuestionDeatails />} />
      </Routes>
    </div>
  );
};

export default App;
