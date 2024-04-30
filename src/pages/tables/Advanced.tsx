import React from "react";
import { Row, Col, Card } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";

//dummy data
import { Employee as data, expandableRecords } from "./data";
import { Example } from "../../components/Modal";
// import Example from "../../components/Modal";

const columns = [
  {
    Header: "Name",
    accessor: "name",
    sort: true,
  },
  {
    Header: "Employe ID",
    accessor: "employeeId",
    sort: true,
  },
  {
    Header: "Email",
    accessor: "email",
    sort: false,
  },
  {
    Header: "Join Date",
    accessor: "join_Date",
    sort: true,
  },
  {
    Header: "Role",
    accessor: "role",
    sort: false,
  },
  {
    Header: "Salary",
    accessor: "salary",
    sort: false,
  },
  {
    Header: "Payslip",
    accessor: "<h2>Ganerate</h2>",
    sort: false,
  },
  {
    Header: "Action",
    accessor: "<h2>Ganeruuate</h2>",
    sort: false,
  },
];

const sizePerPageList = [
  {
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: data.length,
  },
];

const Advanced = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Tables", path: "/features/tables/advanced" },
          {
            label: "Advanced Tables",
            path: "/features/tables/advanced",
            active: true,
          },
        ]}
        title={"Advanced Tables"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Pagination &amp; Sort</h4>
              <p className="text-muted fs-14 mb-4">
                A simple example of table with pagination and column sorting
              </p>

              <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          {/* todo my working area */}
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="header-title">Search</h4>
                  <p className="text-muted fs-14 mb-4">
                    A Table allowing search
                  </p>
                </div>
                <div>
                  <Example />
                </div>
              </div>

              <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              />
               
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Multiple Row Selection</h4>
              <p className="text-muted fs-14 mb-4">
                This table allowing selection of multiple rows
              </p>

              <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSelectable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Expand Row</h4>
              <p className="text-muted fs-14 mb-4">
                Expand row to see more additional details
              </p>

              <Table
                columns={columns}
                data={expandableRecords}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isExpandable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Advanced;
