import React from "react";
import PropTypes from "prop-types";
import {
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

const ClientInput = ({
  id,
  label,
  type,
  grouptext,
  addontype,
  error,
  mandatory,
  ...rest
}) => {
  return (
    <FormGroup className="form-group">
      <Row>
        <Col lg={3} className="text-lg-right">
          <Label className="mb-0" htmlFor={id}>
            {label}
          </Label>
        </Col>
        <Col lg={7}>
          {type === "inputgroup" ? (
            <InputGroup size="m">
              <InputGroupAddon addonType={addontype}>
                <InputGroupText
                  style={{ borderLeft: mandatory ? "#FE6A6D 5px solid" : "" }}
                >
                  {grouptext}
                </InputGroupText>
              </InputGroupAddon>
              <Input bsSize="m" id={id} type={type} {...rest} />
            </InputGroup>
          ) : (
            <Input bsSize="m" id={id} type={type} {...rest} />
          )}
          {error}
        </Col>
      </Row>
      <br />
    </FormGroup>
  );
};

ClientInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  error: PropTypes.bool,
  mandatory: PropTypes.bool,
};

ClientInput.defaultProps = { type: "text", error: false };

export default ClientInput;
