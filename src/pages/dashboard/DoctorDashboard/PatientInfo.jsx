import Dropdown from '@/Components/Dropdown'
import Input from '@/Components/Input'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const PatientsDetails = ["Virat Kohli", "Sachin Tendulkar", "Ramesh Powar", "MSD"]
const PatientInfo = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [accesskey, setAccesskey] = useState("")
    const [patient_name, setPatientName] = useState("")
    const [lab_name, setLabName] = useState("")
    const [test_name, setTestName] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [PatientData, setPatientData] = useState([])
    const [LabData, setLabData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.post("http://localhost:8080/patient/view").then((res) => {
            console.log("Res", res.data)
            setPatientData(res.data)

        }).catch((err) => {
            console.log(err);
        })
        axios.post("http://localhost:8080/laboratory/view").then((resp) => {
            console.log("resp in labdatA", resp)
            setLabData(resp.data)
        }).catch((err) => {
            console.log(err);
        })
        console.log("test_name", test_name);
        console.log("patient name", patient_name);
        console.log("lab name", lab_name);
    }, [])

    const AccessKeyValidation = () => {
        const newData = { accesskey }
        axios.post("http://localhost:8080/fetchuser/patient", newData).then((res) => {
            console.log("res of accesskey", res);
            console.log("accesskey", accesskey.toString())
            setShow(false)
            navigate("/patient/details", { state: { key: accesskey, data: res.data.user } })
        }).catch((err) => {
            console.log(err);
        })

        setAccesskey("")
    }
    const LabDataFun = () => {
        let newData = { lab_name, test_name, patient_name, accesskey }
        console.log("newData=====>", newData)
        axios.post("http://localhost:8080/labtest/add", newData).then((resp) => {
            console.log("resp.data", resp)
        }).catch((err) => {
            console.log(err);
        })
        setLabName("")
        setTestName("")
        setAccesskey("")
        setPatientName("")
        setShow1(false)
    }
    return (
        <>
            <Container>
                <Card className='p-3'>
                    <Row>
                        <Col md={3}>
                            <Input placeholder="Search patient" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Patient Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        PatientData.map((items, index) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{items.fname}</td>
                                                        <td>
                                                            <Button className='mx-1 bg-success border-0' onClick={handleShow}>View Details</Button>
                                                            <Button className='mx-1 bg-primary border-0 ' onClick={() => navigate("/doctor/prescription")}>Add Prescription</Button>
                                                            <Button className='mx-1 bg-danger border-0' onClick={handleShow1}>Send Report to Lab</Button>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Card>

                {/* Access key Modal starts here */}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Enter Patient's Access key</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Input type="text" placeholder="Access key" value={accesskey} setValue={setAccesskey} /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className=' bg-secondary' onClick={handleClose}>
                            Close
                        </Button>
                        <Button className=' bg-primary' onClick={AccessKeyValidation}>
                            View Details
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Access key Modal ends here */}

                {/* Lab report Modal starts here */}

                <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Enter Lab Test Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        {/* <Dropdown
                            data={LabData}
                            label="Lab Name"
                            option="Select your lab name"
                            value={lab_name}
                            setValue={setLabName}
                        /> */}
                        <Form.Group>
                            <Form.Label htmlFor="labName">Lab Name</Form.Label>
                            <Form.Select value={lab_name} onChange={(e) => setLabName(e.target.value)}>
                                <option >Open this select menu</option>
                                {
                                    LabData.map((item, index) => {
                                        console.log(item)
                                        return (
                                            <option value={item.lab}>{item.lab}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* <Input
                            label="Patient Name"
                            type="text"
                            placeholder="enter patient name here"
                            value={patient_name}
                            setValue={setPatientName}
                        /> */}
                        <Input
                            label="Test Name"
                            type="text"
                            placeholder="enter test name here"
                            value={test_name}
                            setValue={setTestName}
                        />
                        <Input
                            label="Access Key"
                            type="text"
                            placeholder="enter access key here"
                            value={accesskey}
                            setValue={setAccesskey}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className=' bg-secondary' onClick={handleClose1}>
                            Close
                        </Button>
                        <Button className=' bg-primary' onClick={LabDataFun}>
                            Send Report
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Lab report Modal ends here */}


            </Container>
        </>
    )
}

export default PatientInfo