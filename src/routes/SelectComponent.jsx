import { Route, Routes } from "react-router-dom";
import TableScreens from "../screen/tables";
import NavbarScreens from "../screen/navbars";
import SecretScreen from "../screen/secrets";
import ButtonScreens from "../screen/buttons";
import Form1 from "../components/form/form1";

function SelectComponent() {
  return (
    <Routes>
      <Route path="/table" element={<TableScreens />} />
      <Route path="/navbar" element={<NavbarScreens />} />
      <Route path="/secret" element={<SecretScreen />} />
      <Route path="/button" element={<ButtonScreens />} />
      <Route path="/form" element={<Form1 />} />
    </Routes>
  );
}

export default SelectComponent;
