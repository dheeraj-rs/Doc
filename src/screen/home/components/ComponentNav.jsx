import React, { useState, useEffect, useCallback } from "react";
import { ArrowBack, ArrowForward, FileCopy, Code } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setActiveState } from "../../../redux/features/ScreenSlice";
import {
  Form1code,
  Form1codestyle,
  Table1Style,
  Table1code,
  Table2Style,
  Table2code,
} from "../../../data/CopyingCode";
import "../style/ComponentNav.css";

const ComponentNav = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [isCopying, setIsCopying] = useState(false);
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);
  const totalpage = useSelector((state) => state.screen.totalpage);

  const pageStylesAndCodes = [
     {style:Form1codestyle,code:Form1code},
    { style: Table1Style, code: Table1code },
    { style: Table2Style, code: Table2code },
  ];

  const handleNavigation = useCallback(
    (newPage) => {
      setCurrentPage((prevPage) => Math.max(1, Math.min(newPage, totalpage)));
    },
    [totalpage]
  );

  const handleCopy = useCallback(
    (type) => {
      const { style, code } = pageStylesAndCodes[currentPage - 1];
      navigator.clipboard
        .writeText(type === "style" ? style : code)
        .then(() => {
          setIsCopying(true);
          setShowCopiedPopup(true);
          setTimeout(() => {
            setIsCopying(false);
            setShowCopiedPopup(false);
          }, 1000);
        });
    },
    [pageStylesAndCodes, currentPage]
  );

  useEffect(() => {
    dispatch(setActiveState(currentPage));
  }, [currentPage, dispatch]);

  return (
    <div className={`component-nav ${isCopying ? "copying" : ""}`}>
      <div className="nav-buttons">
        <button
          className="nav-button"
          onClick={() => handleNavigation(currentPage - 1)}
        >
          <ArrowBack />
          Prev
        </button>
      </div>

      <div className="page-indicator">
        <span className="indicator-label">Page</span>
        <span className="indicator-number">{`${currentPage} / ${totalpage}`}</span>
      </div>

      <div className="icon-container">
        {showCopiedPopup && <div className="copied-popup">Copied!</div>}
        <button className="icon-button" onClick={() => handleCopy("style")}>
          <FileCopy />
          <p>Style</p>
        </button>
        <button className="icon-button" onClick={() => handleCopy("code")}>
          <Code />
          <p>Code</p>
        </button>
      </div>

      <button
        className="nav-button"
        onClick={() => handleNavigation(currentPage + 1)}
      >
        Next
        <ArrowForward />
      </button>
    </div>
  );
};

export default ComponentNav;
