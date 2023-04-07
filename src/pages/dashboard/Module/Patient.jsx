import Dropdown from "@/Components/Dropdown";
import ImageUpload from "@/Components/ImageUpload ";
import Input from "@/Components/Input";
import Radio from "@/Components/Radio";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const bg = ["O+ve", "O-ve", "A+ve", "A-ve", "B+ve", "B-ve", "AB+ve", "AB-ve"];
const State = ["maharashtra", "goa", "gujrat"];
const Country = ["India", "UK", "US"];

const PatientRegistration = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [aadhar, setAadhar] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPinCode] = useState();
  const [address, setAddress] = useState("");
  const [file, setFile] = useState();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //const [cpassword, setCPassword] = useState("");
  const [accesskey, setAccesskey] = useState("");
  const [history, setHistory] = useState("")
  const [active, setActive] = useState();
  const navigate = useNavigate()
  const AddData = (e) => {
    e.preventDefault();
    // const newData = {
    //   fname: fname, lname: lname, gender: gender, dob: dob, email: email, mobile: mobile, aadhar: aadhar, bloodGroup: bloodGroup, country: country, state: state, district: district, city: city, pincode: pincode, address: address,
    //   // file: file,
    //   userName: userName, password: password, cpassword: cpassword, active: active, userType: "Patient", accesskey: function () {
    //     const timestamp = Date.now();
    //     const str = new Date(timestamp).toISOString();
    //     const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").slice(0, 16);
    //     return cleanStr; // Output: "20230321T115229976Z"
    //   },
    // }

    let accesskey = () => {
      const timestamp = Date.now();
      const str = new Date(timestamp).toISOString();
      const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "");
      return cleanStr;
    };
    const formData = new FormData();
    formData.append("fname", fname)
    formData.append("lname", lname)
    formData.append("gender", gender)
    formData.append("dob", dob)
    formData.append("email", email)
    formData.append("mobile", mobile)
    formData.append("aadhar", aadhar)
    formData.append("bloodGroup", bloodGroup)
    formData.append("state", state)
    formData.append("district", district)
    formData.append("city", city)
    formData.append("pincode", pincode)
    formData.append("address", address)
    formData.append("userName", userName)
    formData.append("password", password)
    // formData.append("cpassword", cpassword)
    formData.append("userType", "Patient")
    formData.append("active", active)
    formData.append("country", country)
    formData.append("history", history)
    formData.append("accesskey", accesskey())
    formData.append("file", file)
    axios
      .post("http://localhost:8080/patient/add", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((resp) => {
        console.log(resp.data, "hiiii");
        alert("Registration Successful");

      })
      .catch((err) => {
        console.log(err);
        alert("Registration failed");
      });

    setFName("");
    setLName("");
    setGender("");
    setDob("");
    setEmail("");
    setMobile();
    setAadhar();
    setBloodGroup();
    setCountry("");
    setState("");
    setDistrict("");
    setCity("");
    setPinCode();
    setAddress("");
    setFile();
    setUserName("");
    setPassword("");
    //setCPassword("");
    setActive("");
    setHistory("")
    navigate("/sign-in")

  }
  // const checkValid = fname.isValid && lname.isValid && gender.isValid && dob.isValid && email.isValid && mobile.isValid && aadhar.isValid && bloodGroup.isValid && country.isValid && state.isValid && district.isValid && city.isValid && pincode.isValid && address.isValid && file.isValid && userName.isValid && password.isValid && cpassword.isValid && active.isValid;

  return (
    <>
      <Container fluid>
        <Row>
          <Navbar bg="dark" expand="lg">
            <Container>
              <Navbar.Brand className="text-white w-10" href="/"><img className="d-inline " src="https://www.seasiainfotech.com/assests/images/blockchain-banner.png" alt="" /> BlockChain</Navbar.Brand>
              <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">

                  {/* <Link to="/register/doctor" className="mx-1 btn btn-light">Doctor</Link>
                  <Link to="/register/laboratory" className="mx-1 btn btn-light">Laboratory</Link> */}
                  <Link to="/sign-in" className="btn btn-light mx-1">Sign In</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
      </Container>
      <Container>
        <Card className="p-3 my-5">
          <Card.Header className="fw-bold fs-4 text-center">
            Patient Registration
          </Card.Header>
          <Form onSubmit={AddData} >
            <Row className="pt-3">

              <Col md={4}>
                <Input
                  label="First Name"
                  type="string"
                  placeholder="enter your first name here"
                  value={fname}
                  setValue={setFName}
                  isRequired={true}
                  // regex="/^[A-Za-z\s]+$/"
                  ErrorMsg="Enter your first name here"
                />
              </Col>
              <Col md={4}>
                <Input
                  label="Last Name"
                  type="string"
                  placeholder="enter your last name here"
                  value={lname}
                  setValue={setLName}
                  isRequired={true}
                  // regex="/^[A-Za-z\s]+$/"
                  ErrorMsg="Enter your last name here"
                />
              </Col>
              <Col md={4}>
                <Input
                  label="Date of Birth"
                  type="date"
                  placeholder="enter your dob here"
                  value={dob}
                  setValue={setDob}
                  isRequired={true}
                  ErrorMsg="Enter your dob here"
                />
              </Col>
              <Col md={4}>
                <Input
                  label="Email"
                  type="email"
                  placeholder="enter your email here"
                  value={email}
                  setValue={setEmail}
                  isRequired={true}
                  // regex="/^[a-z0-9_\.]+@[a-z]{2,}.[a-z]{2,3}$/"
                  ErrorMsg="Enter your email here"
                />
              </Col>
              <Col md={4}>
                <Input
                  label="Mobile No."
                  type="number"
                  placeholder="enter your mob no here"
                  value={mobile}
                  setValue={setMobile}
                  isRequired={true}
                  // regex="/^[6-9]\d{9}$/"
                  ErrorMsg="Enter your mob no here"
                />
              </Col>
              <Col md={4}>
                <Input
                  label="Aadhar No."
                  type="number"
                  placeholder="enter your aadhar no here"
                  value={aadhar}
                  setValue={setAadhar}
                  isRequired={true}
                  // // regex='aadharRegex = /^\d{12}$/'
                  ErrorMsg="Enter your aadhar no here"
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
                  isRequired={true}
                />
              </Col>
              <Col md={4}>
                <Dropdown
                  data={bg}
                  label="Blood Group"
                  option="Select your blood group"
                  value={bloodGroup}
                  setValue={setBloodGroup}
                  isRequired={true}
                />
              </Col>
              <Col md={4}>
                <Dropdown
                  data={Country}
                  label="Country"
                  option="Select your country"
                  value={country}
                  setValue={setCountry}
                  isRequired={true}
                />
              </Col>
              <Col md={4}>
                <Dropdown
                  data={State}
                  label="State"
                  option="Select your state"
                  value={state}
                  setValue={setState}
                  isRequired={true}
                />
              </Col>
              <Col md={4}>
                <Input
                  label="District"
                  type="string"
                  placeholder="enter your district name here"
                  value={district}
                  setValue={setDistrict}
                  isRequired={true}
                  ErrorMsg="Enter your district here"
                />
              </Col>
              <Col md={4}>
                <Input
                  label="City"
                  type="string"
                  placeholder="enter your city name here"
                  value={city}
                  setValue={setCity}
                  isRequired={true}
                  ErrorMsg="Enter your city name here"
                />
              </Col>

              <Col md={12}>
                <Input
                  label="History"
                  as="textarea"
                  placeholder="enter your medical history"
                  value={history}
                  setValue={setHistory}
                  // regex="/^[a-zA-Z0-9\s,'-]*$/"
                />
              </Col>
              {/* <Col md={4}>
                <Input
                  label="Access Key"
                  type="number"
                  placeholder="enter your access key here"
                  value={accesskey}
                  setValue={setAccesskey}
                // isRequired={true}
                />
              </Col> */}
              <Col md={12}>
                <Input
                  label="Address"
                  as="textarea"
                  placeholder="enter your address here"
                  value={address}
                  setValue={setAddress}
                  isRequired={true}
                  // regex="/^[a-zA-Z0-9\s,'-]*$/"
                  ErrorMsg="Enter your address here"
                />
              </Col>
              <Col md={4}>
                <Input
                  label="Pincode"
                  type="number"
                  placeholder="enter your pincode here"
                  value={pincode}
                  setValue={setPinCode}
                  isRequired={true}
                  // regex="/^[1-9][0-9]{5}$/"
                  ErrorMsg="Enter your pincode here"
                />
              </Col>
              <Col md={4}>
                <Input
                  label="Username"
                  type="text"
                  placeholder="enter your username here"
                  value={userName}
                  setValue={setUserName}
                  isRequired={true}
                  // regex="/^[a-zA-Z0-9_-]{3,16}$/"
                  ErrorMsg="Enter your username here"
                />
              </Col>
              <Col md={4}>
                <ImageUpload
                  label="Photo"
                  setValue={setFile}
                />
                {/* <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} /> */}
              </Col>
              <Col md={4}>
                <Input
                  label="Password"
                  type="password"
                  placeholder="enter your password here"
                  value={password}
                  setValue={setPassword}
                  isRequired={true}
                  // regex="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/"
                  ErrorMsg="Enter your password here"
                />
              </Col>
              {/* <Col md={4}>
                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder="enter your confirm password here"
                  value={cpassword}
                  setValue={setCPassword}
                  isRequired={true}
                  // regex="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/"
                  ErrorMsg="Enter your conform password here"
                />
              </Col> */}
              <Col md={4}>
                <Radio
                  label="Status"
                  label1="Active"
                  label2="Inactive"
                  name="active"
                  value1="active"
                  value2="inactive"
                  setValue={setActive}
                  checked1={active === "active"}
                  checked2={active === "inactive"}
                  isRequired={true}
                />
              </Col>

            </Row>
            <Card.Footer >
              <Button className="bg-primary" type="submit"
              // disabled={!checkValid}
              >Submit</Button>
            </Card.Footer>
          </Form>
        </Card>

      </Container>
    </>
  );
};

export default PatientRegistration;

