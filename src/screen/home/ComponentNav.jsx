import React, { useState, useEffect, useCallback } from "react";
import { ArrowBack, ArrowForward, FileCopy, Code } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setActiveState } from "../../redux/features";
import "../../styles/ComponentNav.css";

const ComponentNav = () => {
  console.log("🚀  Render : ComponentNav");
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [isCopying, setIsCopying] = useState(false);
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);

  const totalpage = useSelector((state) => state.screen.totalpage);

  const handlePrevious = useCallback(() => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalpage));
  }, [totalpage]);

  const handleCopyCode = useCallback(() => {
    const codeToCopy = `HELLLO`;
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setIsCopying(true);
      setShowCopiedPopup(true);
      setTimeout(() => {
        setIsCopying(false);
        setShowCopiedPopup(false);
      }, 1000); // Adjust the delay as needed
    });
  }, [currentPage, totalpage]);

  useEffect(() => {
    dispatch(setActiveState(currentPage));
  }, [currentPage, dispatch]);

  return (
    <div className={`component-nav ${isCopying ? "copying" : ""}`}>
      <div className="nav-buttons">
        <button className="nav-button" onClick={handlePrevious}>
          <ArrowBack />
          Prev
        </button>
      </div>

      <div className="page-indicator">
        <span className="indicator-label">Page</span>
        <span className="indicator-number">
          {currentPage} / {totalpage}
        </span>
      </div>

      <div className="icon-container">
        <button className="icon-button">
          <FileCopy />
          <p>Style</p>
        </button>
        <button className="icon-button" onClick={handleCopyCode}>
          <Code />
          <p>Code</p>
          {showCopiedPopup && (
          <div className="copied-popup">Copied!</div>
        )}
        </button>
        
      </div>

      <button className="nav-button" onClick={handleNext}>
        Next
        <ArrowForward />
      </button>
    </div>
  );
};

export default ComponentNav;
