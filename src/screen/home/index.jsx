import React, { useMemo, useState } from "react";
import { Resizable } from "react-resizable";
import { Laptop, MobileScreenShare } from "@mui/icons-material";
import "../../styles/Componentviewer.css";
import ComponentLists from "./Uicomponents";
import ComponentNav from "./ComponentNav";
import SelectComponent from "../../routes/SelectComponent";

const ComponentViewer = () => {
  console.log("🚀  Render : ComponentViewer");

  const [isNavbarAuto, setNavbarAuto] = useState(false);
  const [isResizable, setResizable] = useState(false);
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(100);

  const toggleNavbar = () => {
    setNavbarAuto(!isNavbarAuto);
  };

  const toggleResizable = () => {
    setResizable(!isResizable);
  };

  const handleResize = (event, { size }) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  const handleScreenWidth = (screenWidth) => {
    setWidth(screenWidth);
  };

  const customResizeHandleStyle = useMemo(
    () => (
      <div
        className="resize-handle"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "20px",
          height: "100%",
          cursor: "ew-resize",
          backgroundColor: "black",
        }}
      />
    ),
    []
  );

  return (
    <div className="component-viewer-container">
      <div className={` ${isNavbarAuto ? "auto-list" : "manual-list"}`}>
        <ComponentLists
          toggleNavbar={toggleNavbar}
          toggleResizable={toggleResizable}
        />
      </div>

      <div className={`${isNavbarAuto ? "auto-screens" : "manual-screens"}`}>
        <div className="selectcomponent-nav">
          <ComponentNav />
        </div>
        <div className="selectcomponent-screen">
          {isResizable ? (
            <div className="resizable-container">
              <Resizable
                width={width}
                height={height}
                onResize={handleResize}
                draggableOpts={{ enableUserSelectHack: false }}
                handle={customResizeHandleStyle}
              >
                <div
                  style={{
                    width: `${width}px`,
                    maxWidth: "100%",
                    height: `100%`,
                    border: "1px solid black",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <SelectComponent />
                </div>
              </Resizable>
              <div className="footer-resize-value">
                <MobileScreenShare onClick={() => handleScreenWidth(320)} />
                <h1 className="screen-width-view">{`Width: ${width}px`}</h1>
                <Laptop onClick={() => handleScreenWidth(1440)} />
              </div>
            </div>
          ) : (
            <SelectComponent />
          )}
        </div>
      </div>
    </div>
  );
};

export default ComponentViewer;
