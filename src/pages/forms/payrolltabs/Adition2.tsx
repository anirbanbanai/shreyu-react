import { TableData60 as data } from "../../tables/data";
import { Example } from "../../../components/Modal";
import Table from "../../../components/Table";
const Adition2 = () => {
  const columns = [
    {
      Header: "Name",
      accessor: "name",
      sort: true,
    },
    {
      Header: "Category",
      accessor: "category",
      sort: true,
    },
    {
      Header: "Unit Amount",
      accessor: "unit_Amount",
      sort: false,
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-end">
        <Example />
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

export default Adition2;
