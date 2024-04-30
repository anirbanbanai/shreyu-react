import React from "react";
import { Example2 } from "../../../components/Modal";
import { ActionButton } from "./ActionButton";
const TABLE_HEAD: string[] = ["Name", "Category", "Unit Amount", "Action"];
const TableData60 = [
  {
    name: "Leave balance amount",
    category: "Monthly remuneration",
    unit_Amount: 4,
  },
  {
    name: "Arrears of salary",
    category: "	Additional remuneration",
    unit_Amount: 9,
  },
  {
    name: "AGratuity",
    category: "Additional remuneration",
    unit_Amount: 19,
  },
];
const Aditions = () => {
  return (
    <div>
       <div className="d-flex  justify-content-end">
       <Example2/>
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
          {TableData60.map(({ name, category, unit_Amount }, index) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{category}</td>
              <td>{unit_Amount}</td>
              <td>
               
                
                 <ActionButton/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default Aditions;
