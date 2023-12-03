import React, { useState } from "react";
import "../style/nameinput.css";

const NameInput = ({ showName }) => {
  const [name1, setName1] = useState("");

  const handleNameChange = (e) => {
    setName1(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showName(name1);
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <input
        type="text"
        autoComplete="off"
        value={name1}
        onChange={handleNameChange}
      />
      <label>
        <span>E</span>
        <span>n</span>
        <span>t</span>
        <span>e</span>
        <span>r</span>
        <span>Y</span>
        <span>o</span>
        <span>u</span>
        <span>r</span>
        <span>N</span>
        <span>a</span>
        <span>m</span>
        <span>e</span>
      </label>
    </form>
  );
};

export default NameInput;
