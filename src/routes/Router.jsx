import React from "react";
import { Route, Routes } from "react-router-dom";
import ComponentViewer from "../screen/home";

function Router() {
  return (
    <Routes>
      <Route path="/*" element={<ComponentViewer />} />
    </Routes>
  );
}

export default Router;
