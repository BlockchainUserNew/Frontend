import React from "react";
import { Form } from "react-bootstrap";

const Radio = ({
  label,
  label1,
  label2,
  name,
  value1,
  value2,
  setValue,
  checked1,
  checked2,
  isRequired
}) => {
  const changeHandle = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label className="d-block">
          {label} <span className="text-danger">*</span>
        </Form.Label>
        <Form.Check
          inline
          label={label1}
          name={name}
          type="radio"
          value={value1}
          checked={checked1}
          onChange={changeHandle}
          required={isRequired}
        />
        <Form.Check
          inline
          label={label2}
          name={name}
          type="radio"
          value={value2}
          checked={checked2}
          onChange={changeHandle}
          required={isRequired}
        />
      </Form.Group>
    </>
  );
};

export default Radio;
