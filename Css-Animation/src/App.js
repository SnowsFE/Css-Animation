import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Main from "./main/Main";
import Css from "./Css/Css";
import Animations from "./Css/Animation";

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      "/animations/trans-effect": "Snoer | 트랜지션 & 트랜스폼",
      "/animations/keyframes": "Snoer | 키프레임",
      "/animations/loading": "Snoer | 로딩 애니메이션",
    };

    let title = pageTitles[location.pathname] || "Snoer Animation";
    document.title = title;
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router basename="/by-Snoer">
      <PageTitleUpdater />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/animations" element={<Animations />} />
        <Route path="/animations/*" element={<Css />} />
      </Routes>
    </Router>
  );
}

export default App;
