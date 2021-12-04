import { NavLink, Route, Routes } from "react-router-dom";

import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Elections from "./pages/Elections";
import Participate from "./pages/Participate";
import CreateElection from "./sections/CreateElection";
import TopNavigationBar from "./statics/TopNavigationBar";
import BottomNavigationBar from "./statics/BottomNavigationBar";

import { useSelector } from "react-redux";

const MainPage = () => {
  const darkTheme = useSelector((state) => state.status.darkTheme);

  return (
    <main
      className={`${darkTheme ? "dark_theme" : "light_theme"}`}
      id="main_main"
    >
      <TopNavigationBar darkTheme={darkTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/elections" element={<Elections />} />
        <Route path="/elections/create" element={<CreateElection />} />
        <Route path="/participate" element={<Participate />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>

      <BottomNavigationBar NavLink={NavLink} />
    </main>
  );
};

export default MainPage;
