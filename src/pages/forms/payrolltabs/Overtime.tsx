import React from "react";
import { Example3 } from "../../../components/Modal";
import { ActionButton2 } from "./ActionButton";
const TABLE_HEAD: string[] = ["Name", "Rate","Action"];
const TableData60 = [
  {
    name: "Normal day OT 1.5x",
    rate:"	Hourly 1.5",
  },
  {
    name: "Public holiday OT 3.0x",
    rate: "	Hourly 3",
  },
  {
    name: "Rest day OT 2.0x",
    rate: "	Hourly 2",
  },
];
const Overtime = () => {
  return (
    <div>
       <div className="d-flex  justify-content-end">
       <Example3/>
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
          {TableData60.map(({ name, rate }, index) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{rate}</td>
              <td>
              <ActionButton2/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Overtime;
