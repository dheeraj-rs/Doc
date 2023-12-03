import React from "react";
import "./Table3.css";
import { SampleData } from "../../../data/SampleData";

const Table3 = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {SampleData.map((profile) => (
            <tr key={profile.id}>
              <th>{profile.id}</th>
              <td>{profile.name}</td>
              <td>{profile.job}</td>
              <td>{profile.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table3;
