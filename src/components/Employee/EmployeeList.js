import React, { createRef } from "react";
import { CardHeader } from "reactstrap";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BootstrapTable from "react-bootstrap-table-next";
import { getPaginationArray } from "../../common/utils";
import { employeeList } from "../../data/employeeList";

const EmployeeList = (props) => {
  const options = {
    custom: true,
    sizePerPage: 2,
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
  return (
    <Card className="mb-3">
      <CardHeader>
        <div class="align-items-center row">
          <div class="col">
            <h5 class="mb-0">Employee list</h5>
          </div>
          <div class="text-right col-auto">
            <div class="form-inline">
              <button type="button" class="btn btn-falcon-default btn-sm">
                New
              </button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="p-0">
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
                    data={employeeList}
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
      </CardBody>
    </Card>
  );
};

export default EmployeeList;
