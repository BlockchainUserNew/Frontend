import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap'
import { Link, Navigate, useLocation } from 'react-router-dom'

const PatientDetails = () => {
  const [PatientData, setPatientData] = useState([])
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
                </thead>

              </Table>
              {
                localStorage.getItem("userType") === "Doctor" &&
                <Button className='w-25 bg-primary' ><Link to="/doctor/patient-info">Add Prescription</Link></Button>
              }
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PatientDetails