import Dropdown from "@/Components/Dropdown";
import ImageUpload from "@/Components/ImageUpload ";
import Input from "@/Components/Input";
import Radio from "@/Components/Radio";
import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const bg = ["O+ve", "O-ve", "A+ve", "A-ve", "B+ve", "B-ve", "AB+ve", "AB-ve"];
const State = ["maharashtra", "goa", "gujrat"];
const Country = ["India", "UK", "US"];
const Specialist = ["doctor1", "doctor2", "doctor3"];

const Patient = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [bloodGroup, setBloodGroup] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [district, setDistrict] = useState();
  const [city, setCity] = useState();
  const [pincode, setPinCode] = useState();
  const [file, setFile] = useState();
  const [address, setAddress] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();
  const [accesskey, setAccesskey] = useState();
  const [active, setActive] = useState();

  const AddData = () => {
    alert("hello")
    const newData = {
      fname: fname, lname, gender, dob, email, mobile, aadhar, bloodGroup, country, state, district, city, pincode, address, file, userName, password, cpassword, active
    }
    console.log("newData", newData)
  }
  return (
    <>
      <Container>
        <Card className="p-3">
          <Card.Header className="fw-bold fs-4 text-center">
            Patient Registration
          </Card.Header>
          <Row className="pt-3">
            <Col md={4}>
              <Input
                label="First Name"
                type="string"
                placeholder="enter your first name here"
                value={fname}
                setValue={setFName}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Last Name"
                type="string"
                placeholder="enter your last name here"
                value={lname}
                setValue={setLName}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Date of Birth"
                type="date"
                placeholder="enter your dob here"
                value={dob}
                setValue={setDob}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Email"
                type="email"
                placeholder="enter your email here"
                value={email}
                setValue={setEmail}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Mobile No."
                type="number"
                placeholder="enter your mob no here"
                value={mobile}
                setValue={setMobile}
              />
            </Col>
            <Col md={4}>
              <Radio
                label="Gender"
                label1="Male"
                label2="Female"
                name="gender"
                value1="male"
                value2="female"
                setValue={setGender}
                checked1={gender === "male"}
                checked2={gender === "female"}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Aadhar No."
                type="number"
                placeholder="enter your aadhar no here"
                value={aadhar}
                setValue={setAadhar}
              />
            </Col>

            <Col md={4}>
              <Dropdown
                data={bg}
                label="Blood Group"
                option="Select your blood group"
                value={bloodGroup}
                setValue={setBloodGroup}
              />
            </Col>
            <Col md={4}>
              <Dropdown
                data={Country}
                label="Country"
                option="Select your country"
                value={country}
                setValue={setCountry}
              />
            </Col>
            <Col md={4}>
              <Dropdown
                data={State}
                label="State"
                option="Select your state"
                value={state}
                setValue={setState}
              />
            </Col>
            <Col md={4}>
              <Input
                label="District"
                type="string"
                placeholder="enter your district name here"
                value={district}
                setValue={setDistrict}
              />
            </Col>
            <Col md={4}>
              <Input
                label="City"
                type="string"
                placeholder="enter your city name here"
                value={city}
                setValue={setCity}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Pincode"
                type="number"
                placeholder="enter your pincode here"
                value={pincode}
                setValue={setPinCode}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Access Key"
                type="string"
                placeholder="enter your access key here"
                value={accesskey}
                setValue={setAccesskey}
              />
            </Col>
            
            <Col md={4}>
              <ImageUpload
                label="Photo_1"
                setValue={setFile}
              />
            </Col>
            <Col md={12}>
              <Input
                label="Address"
                as="textarea"
                placeholder="enter your address here"
                value={address}
                setValue={setAddress}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Username"
                type="text"
                placeholder="enter your username here"
                value={userName}
                setValue={setUserName}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Password"
                type="password"
                placeholder="enter your password here"
                value={password}
                setValue={setPassword}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Confirm Password"
                type="password"
                placeholder="enter your confirm password here"
                value={cpassword}
                setValue={setCPassword}
              />
            </Col>
            <Col md={4}>
              <Radio
                label="Status"
                label1="Active"
                label2="Inactive"
                name="status"
                value1="active"
                value2="inactive"
                setValue={setActive}
                checked1={active === "active"}
                checked2={active === "inactive"}
              />
            </Col>
          </Row>
          <Card.Footer >
            <Button color="primary" onClick={AddData}>Submit</Button>
          </Card.Footer>
        </Card>

      </Container>
    </>
  );
};

export default Patient;

