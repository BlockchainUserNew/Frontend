import Dropdown from "@/Components/Dropdown";
import Input from "@/Components/Input";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

let UserTypes = ["Patient", "Doctor", "Laboratory"]
export function SignIn() {
  const navigate = useNavigate()
  const [userType, setUserType] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [newEmail, setNewEmail] = useState("")
  const loginData = (e) => {
    e.preventDefault();
    let newData = {
      userType, email, password
    }
    axios.post("http://localhost:8080/login", newData).then((res) => {
      console.log("res in login", res.data.user);
      if (res.status === 200 && userType === "Patient") {
        localStorage.setItem("userType", "Patient")
        localStorage.setItem("email", res.data.user.email)
        let newVal = res.data.user.email
        console.log("newVal", newVal);
        navigate("/patient/details")

        axios.post("http://localhost:8080/patient/email", { email: newData.email }).then((res) => {
          console.log("res details patient....", res)
        }).catch((err) => {
          console.log(err);
        })
      } else if (res.status === 200 && userType === "Doctor") {
        localStorage.setItem("userType", "Doctor")
        localStorage.setItem("email", res.data.user.email)
        navigate("/doctor/details")
        let newVal = res.data.user.email
        console.log("let newVal = res.data.user.email", newVal);
        axios.post("http://localhost:8080/doctor/email", { email: newData.email }).then((res) => {
          console.log("res details doctor....", res)
        }).catch((err) => {
          console.log(err);
        })

      } else if (res.status === 200 && userType === "Laboratory") {
        localStorage.setItem("userType", "Laboratory")
        localStorage.setItem("email", res.data.user.email)
        navigate("/laboratory/details")
        axios.post("http://localhost:8080/laboratory/email", { email: newData.email }).then((res) => {
          console.log("res details lab....", res)
        }).catch((err) => {
          console.log(err);
        })
      }
    }).catch((err) => {
      console.log(err);
    })
    // axios.post("http://localhost:8080/doctor/email", {email:newData.email}).then((res) => {
    //   console.log("res details doctor....", res)
    // }).catch((err) => {
    //   console.log(err);
    // })



    setUserType("");
    setEmail("");
    setPassword("");
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Navbar bg="dark" expand="lg">
            <Container>
              <Navbar.Brand className="text-white w-10" href="/"><img className="d-inline " src="https://www.seasiainfotech.com/assests/images/blockchain-banner.png" alt="" /> BlockChain</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"/>
              <Navbar.Collapse id="basic-navbar-nav">
                {/* <Nav className="ms-auto text-white text-center fs-4">Medical History Storage and Exchange</Nav> */}
                <Nav className="ms-auto">
               
                  
                  <Link to="/register/patient" className="btn btn-light m-1 ">Patient</Link>
                  <Link to="/register/doctor" className="m-1 btn btn-light">Doctor</Link>
                  <Link to="/register/laboratory" className="m-1 btn btn-light">Laboratory</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
      </Container>

      <Container
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="p-3 " style={{ background: "#f4f9f9" }}>
              <Card.Header className="fs-4 text-center"><strong>Login Page</strong></Card.Header>
              <Form onSubmit={loginData}>
                <Row>
                  <Col md={12}>
                    <Dropdown data={UserTypes} label="User Type"
                      option="Select user type here"
                      value={userType}
                      setValue={setUserType}
                      required={true} />
                  </Col>
                  <Col md={12}>
                    <Input
                      label="Email"
                      type="email"
                      placeholder="enter your email here"
                      value={email}
                      setValue={setEmail}
                      required={true}
                    />
                  </Col>
                  <Col md={12}>
                    <Input
                      label="Pasword"
                      type="password"
                      placeholder="enter your password here"
                      value={password}
                      setValue={setPassword}
                      required={true}
                    />
                  </Col>
                </Row>
                <Card.Footer>
                  <Row>
                    <Col className="text-center">
                      <Button variant="primary" className="text-dark text-center" type="submit">
                        Submit
                      </Button>

                    </Col>

                  </Row>
                  {/* <Row className="mt-3">

                    <Col>
                      <Button variant="primary" className="text-dark" onClick={() => navigate("/register/patient")}>
                        Patient Registration
                      </Button>
                    </Col>
                    <Col>
                      <Button variant="primary" className="text-dark" onClick={() => navigate("/register/doctor")}>
                        Doctor Registration
                      </Button>
                    </Col>
                    <Col>

                      <Button variant="primary" className="text-dark" onClick={() => navigate("/register/laboratory")}>
                        Laboratory Registration
                      </Button>
                    </Col>
                  </Row> */}

                </Card.Footer>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>



    </>
  );
}

export default SignIn;
