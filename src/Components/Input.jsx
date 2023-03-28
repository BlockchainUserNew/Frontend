import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Input = ({ label, type, placeholder, value, setValue, as, isRequired, ErrorMsg = "This field is required", regex }) => {
  const [isValid, setIsValid] = useState(false);

  const changeHandle = (e) => {

    setValue(e.target.value)
    // if (isRequired == false) {
    //   if (e.target.value == "") {
    //     setValue({ value: e.target.value, isValid: true });
    //     setIsValid(true);
    //   } else if (e.target.value.match(regex)) {
    //     setValue({ value: e.target.value, isValid: true });
    //     setIsValid(true);
    //   } else {
    //     setValue({ value: e.target.value, isValid: false });
    //     setIsValid(false);
    //   }
    // } else {
    //   alert('hello2')
    //   if (e.target.value.match(regex)) {
    //     setValue({ value: e.target.value, isValid: true });
    //     setIsValid(true);
    //   } else {
    //     setValue({ value: e.target.value, isValid: false });
    //     setIsValid(false);
    //   }
    // }
  };
  return (
    <>
      <Form.Group className="mb-3">

        <Form.Label>
          {label}
          {isRequired ? <span className="text-danger">*</span> : ""}
        </Form.Label>

        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          setValue={setValue}
          as={as}
          onChange={changeHandle} 
          onMouseDown={(e) => setIsValid(true)}
          required={isRequired}
        />
      </Form.Group>
      {
        value?.length == 0 && isValid ? <div style={{ color: "red" }}>{ErrorMsg}</div> : ""
      }
    </>
  );
};

export default Input;
