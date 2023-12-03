import React from "react";
import "./Table1.css";
import { SampleData } from "../../../data/SampleData";

const Table1 = () => {
  return (
    <div className="table-container">
      <h2 className="table-heading">Product List</h2>
      <div className="table-scroll">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>PRICE</th>
              <th>MRP</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {SampleData.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>${item.priceMRP}</td>
                <td>
                  <div className="table-actions">
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table1;
