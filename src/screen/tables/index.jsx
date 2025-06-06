import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table1 from "../../components/table/table1";
import Table2 from "../../components/table/table2";
import Table3 from "../../components/table/table3";
import Table4 from "../../components/table/table4";
import { setTotalPage } from "../../redux/features/ScreenSlice";

function TableScreens() {
  const dispatch = useDispatch();
  const activescreen = useSelector((state) => state.screen.activescreen);

  const componentMap = {
    1: <Table1 key="table1" />,
    2: <Table2 key="table2" />,
    3: <Table3 key="table3" />,
    4: <Table4 key="table4" />,
    default: <Table1 key="table0" />,
  };

  useEffect(() => {
    dispatch(setTotalPage(Object.keys(componentMap).length - 1));
  }, []);

  const renderActiveScreen = useMemo(() => {
    return componentMap[activescreen] || componentMap.default;
  }, [activescreen]);

  return renderActiveScreen;
}

export default TableScreens;
