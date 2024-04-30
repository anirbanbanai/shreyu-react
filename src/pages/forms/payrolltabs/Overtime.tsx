
import { Example3 } from "../../../components/Modal";
import Table from "../../../components/Table";
import { TableData6 as data } from "../../tables/data";
const columns = [
  {
    Header: "Name",
    accessor: "name",
    sort: true,
  },
  {
    Header: "Rate",
    accessor: "rate",
    sort: true,
  }
];

const Overtime = () => {
  return (
    <div>
      <div className="d-flex justify-content-end">
        <Example3 />
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

export default Overtime;
