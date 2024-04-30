import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="warning"
        className="rounded-pill "
        onClick={handleShow}
        style={{ backgroundColor: "#fd7e14" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 100 100"
        >
          <rect x="20" y="40" width="60" height="20" fill="white" />
          <rect x="40" y="20" width="20" height="60" fill="white" />
        </svg>
        <span className="text-white">Add Selary</span>
      </Button>

      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Staff Salary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="row p-3">
            <Form.Group
              className=" mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Select Stuff</Form.Label>

              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select a Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Net Salary</Form.Label>
              <Form.Control type="text" placeholder="salary" autoFocus />
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <h3 className="text-warning">Earnings</h3>
              <Form.Label>Besic</Form.Label>
              <Form.Control type="text" placeholder="salary" autoFocus />
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <h3 className="text-warning">Deduction</h3>
              <Form.Label>TDS</Form.Label>
              <Form.Control type="text" placeholder="deduction" autoFocus />
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>DA(40%)</Form.Label>
              <Form.Control type="text" placeholder="da" autoFocus />
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>ESI</Form.Label>
              <Form.Control type="text" placeholder="esi" autoFocus />
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>HRA(15%)</Form.Label>
              <Form.Control type="text" placeholder="hra" autoFocus />
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>PF</Form.Label>
              <Form.Control type="text" placeholder="pf" autoFocus />
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Conveyance</Form.Label>
              <Form.Control type="text" placeholder="conveyance" autoFocus />
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Leave</Form.Label>
              <Form.Control type="text" placeholder="" autoFocus />
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Allowance</Form.Label>
              <Form.Control type="text" placeholder="allowance" autoFocus />
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Prof.text</Form.Label>
              <Form.Control type="text" placeholder="text" autoFocus />
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Medical Allowance</Form.Label>
              <Form.Control
                type="text"
                placeholder="medical allowance"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Labour Welfare</Form.Label>
              <Form.Control type="text" placeholder="" autoFocus />
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Others</Form.Label>
              <Form.Control type="text" placeholder="" autoFocus />
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Others</Form.Label>
              <Form.Control type="text" placeholder="" autoFocus />
            </Form.Group>
            <h4 className="text-warning col-md-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="25"
                height="25"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="#f0c014"
                  stroke="#000000"
                  stroke-width="2"
                />
                <line
                  x1="7"
                  y1="12"
                  x2="17"
                  y2="12"
                  stroke="#000000"
                  stroke-width="2"
                />
                <line
                  x1="12"
                  y1="7"
                  x2="12"
                  y2="17"
                  stroke="#000000"
                  stroke-width="2"
                />
              </svg>
              <span className="m-1">Add More</span>
            </h4>
            <h4 className="text-warning col-md-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="25"
                height="25"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="#f0c014"
                  stroke="#000000"
                  stroke-width="2"
                />
                <line
                  x1="7"
                  y1="12"
                  x2="17"
                  y2="12"
                  stroke="#000000"
                  stroke-width="2"
                />
                <line
                  x1="12"
                  y1="7"
                  x2="12"
                  y2="17"
                  stroke="#000000"
                  stroke-width="2"
                />
              </svg>
              <span className="m-1">Add More</span>
            </h4>
          </Form>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-center align-items-center">
          <Button
            variant="warning"
            size="lg"
            className="rounded-pill"
            onClick={handleClose}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Example22() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
        <span     onClick={handleShow} className="text-white">Edit Aditions</span>

      <Modal show={show} size="xl" onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>Edit Aditions</h3>
        </Modal.Header>
        <Modal.Body>
          <Form className=" p-3">
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="name.." autoFocus />
            </Form.Group>
            <Form.Group
              className=" mb-3 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Category <span className="text-danger">*</span>
              </Form.Label>

              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>
                  Select a Category <span className="text-danger">*</span>
                </option>
                <option value="1">Monthly Remoneration</option>
                <option value="2">Aditional Remoneration</option>
              </select>
            </Form.Group>
            <Form.Group
              className=" mb-3 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Unit Calculation <span className="text-danger">*</span>
              </Form.Label>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </Form.Group>
            <Form.Group
              className=" mb-3 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Unit Amount <span className="text-danger">*</span>
              </Form.Label>

              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Assignee</Form.Label>

              <div className="d-flex g-2">
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">No Assign</label>
                </div>
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">All Employee</label>
                </div>
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">Select Employee</label>
                </div>
              </div>

              <Form.Control type="text" placeholder="" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-center align-items-center">
          <Button
            variant="warning"
            size="lg"
            className="rounded-pill"
            onClick={handleClose}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function Example2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="warning"
        className="rounded-pill "
        onClick={handleShow}
        style={{ backgroundColor: "#fd7e14" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 100 100"
        >
          <rect x="20" y="40" width="60" height="20" fill="white" />
          <rect x="40" y="20" width="20" height="60" fill="white" />
        </svg>
        <span className="text-white">Add Aditions</span>
      </Button>

      <Modal show={show} size="xl" onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>Add Aditions</h3>
        </Modal.Header>
        <Modal.Body>
          <Form className=" p-3">
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="name.." autoFocus />
            </Form.Group>
            <Form.Group
              className=" mb-3 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Category <span className="text-danger">*</span>
              </Form.Label>

              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>
                  Select a Category <span className="text-danger">*</span>
                </option>
                <option value="1">Monthly Remoneration</option>
                <option value="2">Aditional Remoneration</option>
              </select>
            </Form.Group>
            <Form.Group
              className=" mb-3 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Unit Calculation <span className="text-danger">*</span>
              </Form.Label>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </Form.Group>
            <Form.Group
              className=" mb-3 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Unit Amount <span className="text-danger">*</span>
              </Form.Label>

              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Assignee</Form.Label>

              <div className="d-flex g-2">
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">No Assign</label>
                </div>
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">All Employee</label>
                </div>
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">Select Employee</label>
                </div>
              </div>

              <Form.Control type="text" placeholder="" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-center align-items-center">
          <Button
            variant="warning"
            size="lg"
            className="rounded-pill"
            onClick={handleClose}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Example33() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     
        <span onClick={handleShow} className="text-white">Edit Overtime</span>

      <Modal show={show} size="xl" onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>Edit Overtimes</h3>
        </Modal.Header>
        <Modal.Body>
          <Form className=" p-3">
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>
                Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="name.." autoFocus />
            </Form.Group>

            <Form.Group
              className=" mb-3 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Rate Type <span className="text-danger">*</span>
              </Form.Label>

              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>
                  Select a Category <span className="text-danger">*</span>
                </option>
                <option value="1">Monthly Remoneration</option>
                <option value="2">Aditional Remoneration</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>
                Rate <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="name.." autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-center align-items-center">
          <Button
            variant="warning"
            size="lg"
            className="rounded-pill"
            onClick={handleClose}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function Example3() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="warning"
        className="rounded-pill "
        onClick={handleShow}
        style={{ backgroundColor: "#fd7e14" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 100 100"
        >
          <rect x="20" y="40" width="60" height="20" fill="white" />
          <rect x="40" y="20" width="20" height="60" fill="white" />
        </svg>
        <span className="text-white">Add Overtime</span>
      </Button>

      <Modal show={show} size="xl" onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>Add Overtimes</h3>
        </Modal.Header>
        <Modal.Body>
          <Form className=" p-3">
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>
                Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="name.." autoFocus />
            </Form.Group>

            <Form.Group
              className=" mb-3 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Rate Type <span className="text-danger">*</span>
              </Form.Label>

              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>
                  Select a Category <span className="text-danger">*</span>
                </option>
                <option value="1">Monthly Remoneration</option>
                <option value="2">Aditional Remoneration</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>
                Rate <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="name.." autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-center align-items-center">
          <Button
            variant="warning"
            size="lg"
            className="rounded-pill"
            onClick={handleClose}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function Example44() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     
        <span    onClick={handleShow} className="text-white">Edit Deduction</span>
      <Modal show={show} size="xl" onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>Edit Aditions</h3>
        </Modal.Header>
        <Modal.Body>
          <Form className=" p-3">
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>
                Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="name.." autoFocus />
            </Form.Group>

            <Form.Group
              className=" mb-3 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Unit Calculation <span className="text-danger">*</span>
              </Form.Label>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </Form.Group>
            <Form.Group
              className=" mb-3 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Unit Amount <span className="text-danger">*</span>
              </Form.Label>

              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Assignee</Form.Label>

              <div className="d-flex g-2">
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">No Assign</label>
                </div>
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">All Employee</label>
                </div>
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">Select Employee</label>
                </div>
              </div>

              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>---</option>
                <option value="1">Monthly Remoneration</option>
                <option value="2">Aditional Remoneration</option>
              </select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-center align-items-center">
          <Button
            variant="warning"
            size="lg"
            className="rounded-pill"
            onClick={handleClose}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function Example4() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="warning"
        className="rounded-pill "
        onClick={handleShow}
        style={{ backgroundColor: "#fd7e14" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 100 100"
        >
          <rect x="20" y="40" width="60" height="20" fill="white" />
          <rect x="40" y="20" width="20" height="60" fill="white" />
        </svg>
        <span className="text-white">Add Deduction</span>
      </Button>
      <Modal show={show} size="xl" onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>Add Aditions</h3>
        </Modal.Header>
        <Modal.Body>
          <Form className=" p-3">
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>
                Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="name.." autoFocus />
            </Form.Group>

            <Form.Group
              className=" mb-3 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Unit Calculation <span className="text-danger">*</span>
              </Form.Label>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </Form.Group>
            <Form.Group
              className=" mb-3 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Unit Amount <span className="text-danger">*</span>
              </Form.Label>

              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Assignee</Form.Label>

              <div className="d-flex g-2">
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">No Assign</label>
                </div>
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">All Employee</label>
                </div>
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">Select Employee</label>
                </div>
              </div>

              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>---</option>
                <option value="1">Monthly Remoneration</option>
                <option value="2">Aditional Remoneration</option>
              </select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-center align-items-center">
          <Button
            variant="warning"
            size="lg"
            className="rounded-pill"
            onClick={handleClose}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function Example5() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="warning"
        className="rounded-pill "
        onClick={handleShow}
        style={{ backgroundColor: "#fd7e14" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 100 100"
        >
          <rect x="20" y="40" width="60" height="20" fill="white" />
          <rect x="40" y="20" width="20" height="60" fill="white" />
        </svg>
        <span className="text-white">Add Deduction</span>
      </Button>
      <Modal show={show} size="xl" onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>Add Aditions</h3>
        </Modal.Header>
        <Modal.Body>
          <Form className=" p-3">
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>
                Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="name.." autoFocus />
            </Form.Group>

            <Form.Group
              className=" mb-3 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Unit Calculation <span className="text-danger">*</span>
              </Form.Label>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </Form.Group>
            <Form.Group
              className=" mb-3 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Unit Amount <span className="text-danger">*</span>
              </Form.Label>

              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Assignee</Form.Label>

              <div className="d-flex g-2">
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">No Assign</label>
                </div>
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">All Employee</label>
                </div>
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label">Select Employee</label>
                </div>
              </div>

              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>---</option>
                <option value="1">Monthly Remoneration</option>
                <option value="2">Aditional Remoneration</option>
              </select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-center align-items-center">
          <Button
            variant="warning"
            size="lg"
            className="rounded-pill"
            onClick={handleClose}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { Example, Example2,Example22, Example3,Example33, Example4, Example44 ,Example5};
