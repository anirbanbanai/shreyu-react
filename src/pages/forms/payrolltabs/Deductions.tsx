import React from "react";
import { Example4 } from "../../../components/Modal";
import Table from "../../../components/Table";
import { Deduction as data } from "../../tables/data";

const columns = [
  {
    Header: "Name",
    accessor: "name",
    sort: true,
  },
  {
    Header: "Unit Amount",
    accessor: "unit_amount",
    sort: true,
  }
];

const Deductions = () => {
  return (
    <div>
      <div className="d-flex justify-content-end">
        <Example4 />
      </div>

      <Table
        columns={columns}
        data={data}
        pageSize={5}
        isSortable={true}
        pagination={true}
        isSearchable={true}
      />
    </div>
  );
};

export default Deductions;
