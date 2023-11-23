import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Componentlist.css";
import {
  ColorLens,
  ViewSidebar,
  ArrowBack,
  ArrowForward,
  AspectRatio,
  TableChart,
  WebAsset,
} from "@mui/icons-material";
import Theme from "../popup-screens/theme";

const MemoizedViewSidebar = React.memo(ViewSidebar);
const MemoizedArrowBack = React.memo(ArrowBack);

function Uicomponents({ toggleNavbar, toggleResizable }) {
  console.log("🚀  Render : Uicomponents");

  const navigate = useNavigate();
  const [activeColorPopup, setActiveColorPopup] = useState(false);

  const navigateToPreviousPage = () => {
    navigate(-1);
  };

  const navigateToNextPage = () => {
    navigate(1);
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <section className="navbar-container">
      <div className="nav-controller">
        <MemoizedViewSidebar className="ViewSidebar" onClick={toggleNavbar} />
        <span></span>
        <div className="nav-arrow-icon">
          <MemoizedArrowBack onClick={navigateToPreviousPage} />
          <ArrowForward onClick={navigateToNextPage} />
        </div>
      </div>
      <h1>UI Components</h1>
      <main className="nav-list">
        <div onClick={() => navigateTo("/table")}>
          <TableChart style={{ backgroundColor: "transparent" }} />
          <a>Table</a>
        </div>
        <div onClick={() => navigateTo("/navbar")}>
          <WebAsset style={{ backgroundColor: "transparent" }} />
          <a>Navbar</a>
        </div>
      </main>
      {activeColorPopup && <Theme />}
      <footer className="footer-navbar">
        <div
          className="custombackground"
          onClick={() => setActiveColorPopup(!activeColorPopup)}
        >
          <ColorLens />
        </div>
        <div className="resizable-btn">
          <AspectRatio onClick={toggleResizable} />
        </div>
      </footer>
    </section>
  );
}

export default Uicomponents;
