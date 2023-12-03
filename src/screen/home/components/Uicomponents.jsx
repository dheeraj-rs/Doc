import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ColorLens,
  ViewSidebar,
  ArrowBack,
  ArrowForward,
  AspectRatio,
  TableChart,
  WebAsset,
  Chat,
  AutoAwesomeMosaic,
  RadioButtonChecked,
  Pages,
} from "@mui/icons-material";
import Theme from "../../popups/theme";
import { useDispatch, useSelector } from "react-redux";
import ChatBot from "../../popups/chat";
import { isPage } from "../../../redux/features/ScreenSlice";
import "../style/Uicomponents.css";

const MemoizedViewSidebar = React.memo(ViewSidebar);
const MemoizedArrowBack = React.memo(ArrowBack);

function Uicomponents({ toggleNavbar, toggleResizable, toggleUilist }) {
  const popup = useSelector((state) => state.screen.popup);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeColorPopup, setActiveColorPopup] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const navigateToPreviousPage = () => {
    navigate(-1);
  };

  const navigateToNextPage = () => {
    navigate(1);
  };

  const navigateTo = (path) => {
    navigate(path);
    setSelectedNavItem(path);
  };

  return (
    <section className="navbar-container">
      <div className="nav-controller">
        <MemoizedViewSidebar className="ViewSidebar" onClick={toggleUilist} />
        <span></span>
        <div className="nav-arrow-icon">
          <MemoizedArrowBack onClick={navigateToPreviousPage} />
          <ArrowForward onClick={navigateToNextPage} />
        </div>
      </div>
      <h1>UI Components</h1>
      <main className="nav-list">
        <div
          onClick={() => navigateTo("/table")}
          className={selectedNavItem === "/table" ? "selected-item" : ""}
        >
          <TableChart />
          <a>Table</a>
        </div>
        <div
          onClick={() => navigateTo("/navbar")}
          className={selectedNavItem === "/navbar" ? "selected-item" : ""}
        >
          <WebAsset />
          <a>Navbar</a>
        </div>
        <div
          onClick={() => navigateTo("/button")}
          className={selectedNavItem === "/button" ? "selected-item" : ""}
        >
          <RadioButtonChecked />
          <a>Buttons</a>
        </div>
        <div
          onClick={() => navigateTo("/form")}
          className={selectedNavItem === "/form" ? "selected-item" : ""}
        >
          <Pages />
          <a>Form</a>
        </div>
      </main>
      {activeColorPopup && <Theme />}
      {chatOpen && !popup && <ChatBot />}
      <footer className="footer-navbar">
        <div className="custombackground">
          <Chat
            onClick={() => {
              dispatch(isPage()), setChatOpen(!chatOpen);
            }}
          />
        </div>
        <div
          className="resizable-btn"
          onClick={() => setActiveColorPopup(!activeColorPopup)}
        >
          <ColorLens />
        </div>

        <div className="resizable-btn">
          <AutoAwesomeMosaic onClick={toggleNavbar} />
        </div>
        <div className="resizable-btn">
          <AspectRatio onClick={toggleResizable} />
        </div>
      </footer>
    </section>
  );
}

export default Uicomponents;
