import React from "react";
import "./Table4.css";
import { ListData } from "../../../data/SampleData";

const Table4 = () => {
  return (
    <div className="overflow-x-auto h-96">
      <table className="table table-pin-rows">
        {ListData.map((group) => (
          <React.Fragment key={group.letter}>
            <thead>
              <tr>
                <th>{group.letter}</th>
              </tr>
            </thead>
            <tbody>
              {group.names.map((name, index) => (
                <tr key={index}>
                  <td>{name}</td>
                </tr>
              ))}
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
};

export default Table4;
