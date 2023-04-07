import Dropdown from "@/Components/Dropdown";
import ImageUpload from "@/Components/ImageUpload ";
import Input from "@/Components/Input";
import Radio from "@/Components/Radio";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const bg = ["O+ve", "O-ve", "A+ve", "A-ve", "B+ve", "B-ve", "AB+ve", "AB-ve"];
const State = ["maharashtra", "goa", "gujrat"];
const Country = ["India", "UK", "US"];

const LaboratoryRegistration = () => {
  const [fname, setFName] = useState("");
  const [mname, setMName] = useState("");
  const [lname, setLName] = useState("");
  const [lab, setLab] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [gender, setGender] = useState();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState();
  const [district, setDistrict] = useState();
  const [taluka, setTaluka] = useState();
  const [city, setCity] = useState();
  const [GST, setGST] = useState();
  const [file, setFile] = useState();
  const [address, setAddress] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
 // const [cpassword, setCPassword] = useState();
  const [active, setActive] = useState();
  const navigate = useNavigate()
  const AddData = () => {

    // const newData = {
    //   fname, mname, lname, lab, specialist, gender, email, code, mobile, state, district, taluka, city, GST,
    //   //  file, 
    //    address, userName, password, cpassword, active, userType: "Laboratory"
    // }

    const formData = new FormData();
    formData.append("fname", fname)
    formData.append("mname", mname)
    formData.append("lname", lname)
    formData.append("gender", gender)
    formData.append("lab", lab)
    formData.append("email", email)
    formData.append("mobile", mobile)
    formData.append("specialist", specialist)
    formData.append("state", state)
    formData.append("district", district)
    formData.append("city", city)
    formData.append("code", code)
    formData.append("address", address)
    formData.append("userName", userName)
    formData.append("password", password)
    // formData.append("cpassword", cpassword)
    formData.append("userType", "Laboratory")
    formData.append("active", active)
    formData.append("GST", GST)
    formData.append("taluka", taluka)
    formData.append("file", file)

    axios
      .post("http://localhost:8080/laboratory/add", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((resp) => {
        console.log(resp);
        alert("Registration Successful");

      })
      .catch((err) => {
        console.log(err);
        alert("Registration failed");
      });

    setFName("");
    setMName("");
    setLName("");
    setLab("")
    setSpecialist("")
    setGender("");
    setEmail("");
    setCode("");
    setMobile("");
    setFile("");
    setState("");
    setDistrict("");
    setTaluka("");
    setCity("");
    setGST("");
    setAddress("");
    setUserName("");
    setPassword("");
    //setCPassword("");
    setActive("");
    navigate("/sign-in")
  }

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
            Laboratory Registration
          </Card.Header>
          <Row className="pt-3">
            <Col md={4}>
              <Input
                label="Owner First Name"
                type="string"
                placeholder="enter your first name here"
                value={fname}
                setValue={setFName}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Owner Middle Name"
                type="string"
                placeholder="enter your middle name here"
                value={mname}
                setValue={setMName}
                required={true}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Owner Last Name"
                type="string"
                placeholder="enter your last name here"
                value={lname}
                setValue={setLName}
                required={true}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Lab Name"
                type="string"
                placeholder="enter your lab name here"
                value={lab}
                setValue={setLab}
                required={true}
              />
            </Col>
            <Col md={4}>
              <Dropdown
                data={bg}
                label="Specialist In"
                option="Select your option"
                value={specialist}
                setValue={setSpecialist}
                required={true}
              />
            </Col>
            <Col md={4}>
              <Dropdown
                data={State}
                label="State"
                option="Select your state"
                value={state}
                setValue={setState}
                required={true}
              />
            </Col>
            <Col md={4}>
              <Dropdown
                data={Country}
                label="District"
                option="Select your District"
                value={district}
                setValue={setDistrict}
                required={true}
              />
            </Col>
            <Col md={4}>
              <Dropdown
                data={Country}
                label="Taluka"
                option="Select your taluka"
                value={taluka}
                setValue={setTaluka}
              />
            </Col>
            <Col md={4}>
              <Dropdown
                data={Country}
                label="City"
                option="Select your city"
                value={city}
                setValue={setCity}
                required={true}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Email"
                type="email"
                placeholder="enter your email here"
                value={email}
                setValue={setEmail}
                required={true}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Mobile No."
                type="number"
                placeholder="enter your mob no here"
                value={mobile}
                setValue={setMobile}
                required={true}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Code"
                type="string"
                placeholder="enter your code here"
                value={code}
                setValue={setCode}
                required={true}
              />
            </Col>
            
            <Col md={4}>
              <ImageUpload
                label="Photograph"
                setValue={setFile}
                //required={true}
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
                required={true}
              />
            </Col>
            <Col md={4}>
              <Input
                label="GST Number"
                type="number"
                placeholder="enter your GST here"
                value={GST}
                setValue={setGST}
                required={true}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Username"
                type="text"
                placeholder="enter your username here"
                value={userName}
                setValue={setUserName}
                required={true}
              />
            </Col>
            {/* <Col md={4}>
              <Dropdown
                data={Country}
                label="Country"
                option="Select your country"
                value={country}
                setValue={setCountry}
              />
            </Col> */}
            <Col md={4}>
              <Input
                label="Password"
                type="password"
                placeholder="enter your password here"
                value={password}
                setValue={setPassword}
                required={true}
              />
            </Col>
            {/* <Col md={4}>
              <Input
                label="Confirm Password"
                type="password"
                placeholder="enter your confirm password here"
                value={cpassword}
                setValue={setCPassword}
                required={true}
              />
            </Col> */}
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
                required={true}
              />
            </Col>
            <Col md={12}>
              <Input
                label="Address"
                as="textarea"
                placeholder="enter your address here"
                value={address}
                setValue={setAddress}
                required={true}
              />
            </Col>
            
          </Row>
          <Card.Footer >
            <Button className="text-dark bg-primary" onClick={AddData}>Submit</Button>
          </Card.Footer>
        </Card>

      </Container>
    </>
  );
};

export default LaboratoryRegistration;
