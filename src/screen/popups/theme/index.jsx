import { useState } from "react";
import { ChromePicker } from "react-color";
import "./style/theme.css";

function Theme() {
  const [selectedColor, setSelectedColor] = useState("#012c14");

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    document.documentElement.style.setProperty("--bg-color-dark", color.hex);
  };

  return (
    <div className="color-picker">
      <div className="color-picker-box">
        <ChromePicker
          color={selectedColor}
          onChange={handleColorChange}
          className="custom-chrome-picker"
        />
      </div>
    </div>
  );
}

export default Theme;
