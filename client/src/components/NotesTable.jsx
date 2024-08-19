import React from "react";
import "../css/NotesTable.css";
import "../Data/notesData/ise.js";
import ise from "../Data/notesData/ise.js";

function NotesTable(data) {
  return (
    <>
      <div className="tableContainer table-wrapper">
        <h2>{ise[data.data.sem - 1].sem+" "+data.data.branch.toUpperCase()}</h2>
        <div className="tableDiv">
        <table className="f1-table">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Subjects Name</th>
              <th>Links</th>
              <th>Links</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {ise[data.data.sem - 1].subjects.map((sub, ind) => {
              return (
                <tr key={ind}>
                  <td>{ind+1}</td>
                  <td>{sub}</td>
                  <td><a href={ise[data.data.sem - 1].links[ind].syllabus} target='_blank'>Syllabus</a></td>
                  <td><a href={ise[data.data.sem - 1].links[ind].notes} target='_blank'>Notes</a> </td>
                  <td><a href={ise[data.data.sem - 1].links[ind].qps} target='_blank'>QPs</a> </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
}

export default NotesTable;
