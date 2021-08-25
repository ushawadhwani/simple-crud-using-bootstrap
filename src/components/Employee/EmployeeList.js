import React, { createRef, useState } from "react";
import { CardHeader } from "reactstrap";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BootstrapTable from "react-bootstrap-table-next";
import { getPaginationArray } from "../../common/utils";
import { employeeList } from "../../data/employeeList";
import EmployeeModal from "./EmployeeModal";

const EmployeeList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [employeeData, setemployeeData] = useState(employeeList);
  const [selectedEmployee, setSelectedEmployee] = useState({});

  const openModalToEdit = (row) => {
    setSelectedEmployee(row);
    setIsOpen(!isOpen);
  };

  const removeFromList = (row) => {
    var newEmployeeArray = employeeData.filter(function (item) {
      return item !== row;
    });
    setemployeeData(newEmployeeArray);
  };
  const actionFormatter = (cell, row) => (
    <>
      <Button onClick={() => openModalToEdit(row)}>Edit</Button>
      <span style={{ marginLeft: 20 }}></span>
      {/* just the space between the buttons */}
      <Button onClick={() => removeFromList(row)}>Delete</Button>
    </>
  );
  const options = {
    custom: true,
    sizePerPage: 5,
    totalSize: employeeList.length,
  };
  const columns = [
    {
      dataField: "firstName",
      text: "First name",
      headerClasses: "border-0",
      classes: "border-0 py-2 align-middle  px-4",
      sort: true,
      headerStyle: (column, colIndex) => {
        return { paddingLeft: "35px", width: "250px" };
      },
    },
    {
      dataField: "lastName",
      headerClasses: "border-0",
      text: "Lat name",
      classes: "border-0 py-2 align-middle",
    },
    {
      dataField: "email",
      headerClasses: "border-0",
      text: "Email address",
      classes: "border-0 py-2 align-middle",
      sort: true,
    },
    {
      dataField: "primaryLanguage",
      headerClasses: "border-0",
      text: "Language",
      classes: "border-0 py-2 align-middle",
    },
    {
      dataField: "",
      headerClasses: "border-0",
      text: "",
      classes: "border-0 py-2 align-middle",
      formatter: actionFormatter,
      align: "right",
    },
  ];

  let table = createRef();
  const handleNextPage =
    ({ page, onPageChange }) =>
    () => {
      onPageChange(page + 1);
    };

  const handlePrevPage =
    ({ page, onPageChange }) =>
    () => {
      onPageChange(page - 1);
    };

  const filterTable = (searchValue) => {
    if (searchValue == "") {
      setemployeeData(employeeList);
    } else {
      var newEmployeeArray = employeeList.filter(function (item) {
        return (
          item.firstName.toLowerCase().indexOf(searchValue) > -1 ||
          item.lastName.toLowerCase().indexOf(searchValue) > -1 ||
          item.email.toLowerCase().indexOf(searchValue) > -1
        );
      });
      setemployeeData(newEmployeeArray);
    }
  };
  const saveDataInList = (data) => {
    var newData = [];
    if (data.id === 0) {
      newData.push(data);
      employeeData.forEach((item) => {
        newData.push(item);
      });
    } else {
      employeeData.forEach((item) => {
        if (data.id === item.id) {
          newData.push(data);
        } else {
          newData.push(item);
        }
      });
    }
    setemployeeData(newData);
  };
  return (
    <>
      <Row>
        <Col>
          <h4>Employee list</h4>
        </Col>
      </Row>
      <Card className="mb-3">
        <CardHeader>
          <Row>
            <Col>
              <Button onClick={() => setIsOpen(!isOpen)}>Add Employee</Button>
            </Col>
            <Col>
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) =>
                  filterTable(event.target.value.toLowerCase())
                }
              />
            </Col>
          </Row>
        </CardHeader>
        <CardBody className="p-0">
          {employeeData.length === 0 && (
            <Row>
              <Col className="align-center">No employees available</Col>
            </Row>
          )}
          {employeeData.length > 0 && (
            <PaginationProvider pagination={paginationFactory(options)}>
              {({ paginationProps, paginationTableProps }) => {
                const lastIndex =
                  paginationProps.page * paginationProps.sizePerPage;
                return (
                  <>
                    <div className="table-responsive">
                      <BootstrapTable
                        ref={table}
                        bootstrap4
                        keyField="email"
                        data={employeeData}
                        columns={columns}
                        bordered={false}
                        classes="table-dashboard table-striped table-sm fs--1 border-bottom border-200 mb-0 table-dashboard-th-nowrap"
                        rowClasses="btn-reveal-trigger border-top border-200"
                        headerClasses="bg-200 text-900 border-y border-200"
                        {...paginationTableProps}
                      />
                    </div>
                    <Row
                      noGutters
                      className="py-3 justify-content-end"
                      style={{ paddingRight: "20px" }}
                    >
                      <Col xs="auto">
                        <Button
                          color="falcon-default"
                          size="sm"
                          onClick={handlePrevPage(paginationProps)}
                          disabled={paginationProps.page === 1}
                        >
                          <FontAwesomeIcon icon="chevron-left" />
                        </Button>
                        {getPaginationArray(
                          paginationProps.totalSize,
                          paginationProps.sizePerPage
                        ).map((pageNo) => (
                          <Button
                            color={
                              paginationProps.page === pageNo
                                ? "falcon-primary"
                                : "falcon-default"
                            }
                            size="sm"
                            className="ml-2"
                            onClick={() => paginationProps.onPageChange(pageNo)}
                            key={pageNo}
                          >
                            {pageNo}
                          </Button>
                        ))}
                        <Button
                          color="falcon-default"
                          size="sm"
                          className="ml-2"
                          onClick={handleNextPage(paginationProps)}
                          disabled={lastIndex >= paginationProps.totalSize}
                        >
                          <FontAwesomeIcon icon="chevron-right" />
                        </Button>
                      </Col>
                    </Row>
                  </>
                );
              }}
            </PaginationProvider>
          )}
        </CardBody>
      </Card>
      <EmployeeModal
        selectedEmployee={selectedEmployee}
        collapseOne={isOpen}
        collapseOneOpen={() => {
          setIsOpen(!isOpen);
          setSelectedEmployee({});
        }}
        saveDataInList={saveDataInList}
      />
    </>
  );
};

export default EmployeeList;
