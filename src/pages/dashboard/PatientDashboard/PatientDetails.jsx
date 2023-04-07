import Input from '@/Components/Input'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap'
import { Link, Navigate, useLocation } from 'react-router-dom'

const PatientDetails = () => {
  const [PatientData, setPatientData] = useState([])
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [patient_name, setPatientName] = useState("")
  const [lab_name, setLabName] = useState("")
  const [test_name, setTestName] = useState("")
  const [LabData, setLabData] = useState([])
  const [accesskey, setAccesskey] = useState("")
  const location = useLocation();
  console.log("locationData", location?.state?.data.fname);
  let newData = location?.state?.data
  console.log("newData...,,,...", newData);

  useEffect(() => {
    if (localStorage.getItem("userType") === "Patient") {
      axios.post("http://localhost:8080/patient/email", { email: localStorage.getItem("email") }).then((res) => {
        console.log("res details patient...==>.", res.data)
        setPatientData(res.data)
        localStorage.setItem("accesskey", res.data.accesskey)

      }).catch((err) => {
        console.log(err);
      })
    } else {
      setPatientData(newData)
    }
  }, [])

  useEffect(() => {
    axios.post("http://localhost:8080/laboratory/view").then((resp) => {
      console.log("resp in labdatA", resp)
      setLabData(resp.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  const LabDataFun = () => {
    let newData = { lab_name:lab_name, test_name:test_name, patient_name:patient_name, accesskey: PatientData.accesskey }
    console.log("newDatawithaccesskey=====>", newData)
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
  console.log("PatientData", PatientData);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className='p-3'>
              <Table bordered >
                <thead>
                  <tr>
                    <th> First Name</th>
                    <td>{PatientData?.fname}</td>
                  </tr>
                  <tr>
                    <th>Last Name</th>
                    <td>{PatientData?.lname}</td>
                  </tr>
                  <tr>
                    <th>UserName</th>
                    <td>{PatientData?.userName}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>{PatientData?.gender}</td>
                  </tr>
                  <tr>
                    <th>DOB</th>
                    <td>{PatientData?.dob?.slice(0, 10)}</td>
                  </tr>
                  <tr>
                    <th>Mobile</th>
                    <td>{PatientData?.mobile}</td>
                  </tr>
                  <tr>
                    <th>Blood Group</th>
                    <td>{PatientData?.bloodGroup}</td>
                  </tr>
                  {
                    !location?.state?.key &&
                    <tr>
                      <th>Acccess Key</th>
                      <td>{PatientData?.accesskey}</td>
                    </tr>
                  }
                  <tr>
                    <th>Address</th>
                    <td>{PatientData?.address}</td>
                  </tr>
                  <tr>
                    <th>PinCode</th>
                    <td>{PatientData?.pincode}</td>
                  </tr>
                  <tr>
                    <th>State</th>
                    <td>{PatientData?.state}</td>
                  </tr>

                  <tr>
                    <th>Country</th>
                    <td>{PatientData?.country}</td>
                  </tr>

                  {PatientData.history &&
                  <tr>
                  <th>History</th>
                    <td>{PatientData?.history}</td>
                  </tr>
                  }
                </thead>

              </Table>
              {
                localStorage.getItem("userType") === "Doctor" &&
                <div className='d-flex'>
                  <Button className='w-25 bg-primary mx-1 border-0' ><Link to="/doctor/prescription" state={{ accesskey: PatientData.accesskey }}>Add Prescription</Link></Button>
                  <Button className='w-25 bg-danger mx-1 border-0' onClick={handleShow1} >Send Test to Lab</Button>
                </div>
              }
            </Card>
          </Col>
        </Row>
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
      </Container>
    </>
  )
}

export default PatientDetails