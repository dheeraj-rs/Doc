import React from "react";
import "./Table2.css";
import { SampleData } from "../../../data/SampleData";

const Table2 = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {SampleData.map((profile) => (
            <tr key={profile.id}>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={`/tailwind-css-component-profile-${profile.id}@56w.png`}
                        alt={`Avatar of ${profile.name}`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{profile.name}</div>
                    <div className="text-sm opacity-50">{profile.country}</div>
                  </div>
                </div>
              </td>
              <td>
                {profile.company}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {profile.jobTitle}
                </span>
              </td>
              <td>{profile.favoriteColor}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table2;
