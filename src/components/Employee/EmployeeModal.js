import React, { useEffect, useState } from "react";
import {
  ModalFooter,
  Modal,
  ModalBody,
  Form,
  Button,
  Col,
  Row,
  CardHeader,
} from "reactstrap";
import ClientInput from "../../common/ClientInput";
import { validateEmail } from "../../common/utils";

const EmployeeModal = ({
  collapseOne,
  collapseOneOpen,
  selectedEmployee,
  saveDataInList,
}) => {
  const toggle = () => {
    collapseOneOpen(!collapseOne);
  };

  const [error, setError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState(0);

  const [email, setEmail] = useState("");

  useEffect(() => {
    setError(false);
    setId(selectedEmployee.id);
    setFirstName(selectedEmployee.firstName);
    setLastName(selectedEmployee.lastName);
    setEmail(selectedEmployee.email);
  }, [selectedEmployee]);

  const handlePostCall = async () => {
    setError(false);
    var data = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    saveDataInList(data);
    toggle();
  };

  const validateInput = () => {
    let isValid = true;
    if (!firstName || !lastName || !email) {
      isValid = false;
    } else if (email && !validateEmail(email)) {
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    setError(false);
    e.preventDefault();
    const isValid = validateInput();
    if (isValid) {
      handlePostCall();
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Modal isOpen={collapseOne} size="lg" scrollable={true}>
        <CardHeader>
          <Row>
            <Col>Save Employee</Col>
            <Col></Col>
          </Row>
        </CardHeader>

        <ModalBody className="bg-light">
          <Form>
            <ClientInput
              id="firsName"
              label="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />

            <ClientInput
              id="lastName"
              label="Last Name"
              value={lastName}
              onChange={({ target }) => setLastName(target.value)}
            />
            <ClientInput
              id="email"
              label="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </Form>
        </ModalBody>
        <ModalFooter className="justify-content-between bg-light">
          <Button
            color="secondary"
            size="sm"
            className="shadow"
            onClick={toggle}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            size="sm"
            className="shadow"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EmployeeModal;
