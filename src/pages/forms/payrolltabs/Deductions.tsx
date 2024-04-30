import React from "react";
import { Example4 } from "../../../components/Modal";
import {  ActionButton3 } from "./ActionButton";
const TABLE_HEAD: string[] = ["Name", "Unit Amount","Action"];
const TableData60 = [
  {
    name: "Absent amount",
    unit_amount:52,
  },
  {
    name: "Advance",
    unit_amount: 33,
  },
  {
    name: "Unpaid leave",
    unit_amount: 40,
  },
];
const Deductions = () => {
  return (
    <div>
       <div className="d-flex  justify-content-end">
       <Example4/>
       </div>
      <table className="table">
        <thead className="table-head">
          <tr>
            {TABLE_HEAD?.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-rows">
          {TableData60.map(({ name, unit_amount }, index) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{unit_amount}</td>
              <td>
              <ActionButton3/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Deductions;
