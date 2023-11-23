import React from "react";
import { Route, Routes } from "react-router-dom";
import TableScreens from "../screen/table-screens/";
import NavbarScreens from "../screen/navbar-screens";

function SelectComponent() {
  return (
    <Routes>
      <Route  path="/table" element={<TableScreens />} />
      <Route path="/navbar" element={<NavbarScreens />} />
    </Routes>
  );
}

export default SelectComponent;
