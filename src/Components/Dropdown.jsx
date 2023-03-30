import React from "react";
import { Form } from "react-bootstrap";

const Dropdown = ({ data, label, option, value, setValue, isRequired, classNames }) => {
  const changeHandle = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label className={`${classNames}`}>
          {label} <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control as="select" value={value} onChange={changeHandle} required={isRequired}>
          <option>{option}</option>
          {data.map((item, index) => {
            return (
              <>
                <option value={item} key={index} >
                  {item}
                </option>
              </>
            );
          })}
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          Please choose an option.
        </Form.Control.Feedback>
      </Form.Group>
      {/* <div style={{ color: "red" }}>{ErrorMsg}</div> */}
    </>
  );
};

export default Dropdown;
