import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar1 from "../../components/navbar/navbar1";
import Navbar2 from "../../components/navbar/navbar2";
import { setTotalPage } from "../../redux/features";

const NavbarScreens = () => {
  console.log("🚀  Render : NavbarScreens");
  const dispatch = useDispatch();
  const activescreen = useSelector((state) => state.screen.activescreen);

  const componentMap = {
    1: <Navbar1 key="navbar1" />,
    2: <Navbar2 key="navbar2" />,
    2: <Navbar2 key="navbar2" />,
    default: <Navbar1 key="navbar0" />,
  };

  useEffect(() => {
    dispatch(setTotalPage(Object.keys(componentMap).length - 1));
  }, []);

  const renderActiveScreen = useMemo(() => {
    return componentMap[activescreen] || componentMap.default;
  }, [activescreen]);

  return renderActiveScreen;
};

export default NavbarScreens;
