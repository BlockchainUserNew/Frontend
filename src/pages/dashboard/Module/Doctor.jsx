import Dropdown from "@/Components/Dropdown";
import ImageUpload from "@/Components/ImageUpload ";
import Input from "@/Components/Input";
import Radio from "@/Components/Radio";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const bg = ["O+ve", "O-ve", "A+ve", "A-ve", "B+ve", "B-ve", "AB+ve", "AB-ve"];
const State = ["maharashtra", "goa", "gujrat"];
const Country = ["India", "UK", "US"];

const DoctorRegistration = () => {
    const [fname, setFName] = useState("");
    const [mname, setMName] = useState("");
    const [lname, setLName] = useState("");
    const [specialist, setSpecialist] = useState("");
    const [gender, setGender] = useState();
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [practicingIn, setPracticingIn] = useState("");
    const [hospital, setHospital] = useState("");
    const [mobile, setMobile] = useState("");
    const [file, setFile] = useState();
    const [state, setState] = useState();
    const [district, setDistrict] = useState();
    const [taluka, setTaluka] = useState();
    const [city, setCity] = useState();
    const [GST, setGST] = useState();
    const [address, setAddress] = useState();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCPassword] = useState();
    const [active, setActive] = useState();
    const navigate = useNavigate()
    const AddData = () => {
        const newData = {
            fname, mname, lname, specialist, gender, email, code, practicingIn, hospital, mobile, file, state, district, taluka, city, GST, address, userName, password, cpassword, active, userType: "Doctor"
        }
        console.log("newData", newData);

        axios
            .post("http://localhost:8080/doctor/add", newData)
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
        setSpecialist("")
        setGender("");
        setEmail("");
        setCode("");
        setPracticingIn("");
        setHospital("");
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
        setCPassword("");
        setActive("");
    }
    return (
        <>
            <Container>
                <Card className="p-3 my-5">
                    <Card.Header className="fw-bold fs-4 text-center">
                        Doctor Registration
                    </Card.Header>
                    <Row className="pt-3">
                        <Col md={4}>
                            <Input
                                label="First Name"
                                type="string"
                                placeholder="enter your first name here"
                                value={fname}
                                setValue={setFName}
                                required={true}
                            />
                        </Col>
                        <Col md={4}>
                            <Input
                                label="Middle Name"
                                type="string"
                                placeholder="enter your middle name here"
                                value={mname}
                                setValue={setMName}
                                required={true}
                            />
                        </Col>
                        <Col md={4}>
                            <Input
                                label="Last Name"
                                type="string"
                                placeholder="enter your last name here"
                                value={lname}
                                setValue={setLName}
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
                                required={true}
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
                            <Dropdown
                                data={Country}
                                label="Practicing In"
                                option="Select your option"
                                value={practicingIn}
                                setValue={setPracticingIn}
                                required={true}
                            />
                        </Col>
                        <Col md={4}>
                            <Input
                                label="Clinic / Hospital Name"
                                type="string"
                                placeholder="enter your clinic/hospital name"
                                value={hospital}
                                setValue={setHospital}
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
                        {/* <Col md={4}>
              <Dropdown
                data={Country}
                label="Country"
                option="Select your country"
                value={country}
                setValue={setCountry}
              />
            </Col> */}
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
                        <Col md={4}>
                            <Input
                                label="Pasword"
                                type="password"
                                placeholder="enter your password here"
                                value={password}
                                setValue={setPassword}
                                required={true}
                            />
                        </Col>
                        <Col md={4}>
                            <Input
                                label="Confirm Pasword"
                                type="password"
                                placeholder="enter your confirm password here"
                                value={cpassword}
                                setValue={setCPassword}
                                required={true}
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
                                required={true}
                            />
                        </Col>
                        <Col md={4}>
                            {/* <ImageUpload
                                label="Photograph"
                                setValue={setFile}
                                required={true}
                            /> */}
                        </Col>
                       
                    </Row>
                    <Card.Footer >
                        <Button color="primary" className="bg-primary" onClick={AddData}>Submit</Button>
                    </Card.Footer>
                </Card>

            </Container>
        </>
    );
};

export default DoctorRegistration;
