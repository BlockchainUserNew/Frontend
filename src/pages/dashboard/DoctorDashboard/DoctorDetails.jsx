import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const PatientDetails = () => {
  const [doctorData, setDoctorData] = useState([])
  const location = useLocation()

  useEffect(() => {
    axios.post("http://localhost:8080/doctor/email", { email: localStorage.getItem("email") }).then((res) => {
      console.log("res details doctor...==>.", res.data)
      setDoctorData(res.data)

    }).catch((err) => {
      console.log(err);
    })
  }, [])
  console.log("doctorData", doctorData);
  localStorage.setItem("doctor_name", `${doctorData.fname} ${doctorData.mname} ${doctorData.lname}`)
  // useEffect(() => {
  //   setPatientData(location?.state?.data)
  //   console.log("location==>", location?.state)
  // }, [location])
  // console.log("patientData", PatientData)
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
                    <td>{doctorData.fname}</td>
                  </tr>
                  <tr>
                    <th>Last Name</th>
                    <td>{doctorData.lname}</td>
                  </tr>
                  <tr>
                    <th>UserName</th>
                    <td>{doctorData.userName}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>{doctorData.gender}</td>
                  </tr>
                  <tr>
                    <th>Code</th>
                    <td>{doctorData.code}</td>
                  </tr>
                  <tr>
                    <th>Mobile</th>
                    <td>{doctorData.mobile}</td>
                  </tr>
                  <tr>
                    <th>Hospital</th>
                    <td>{doctorData.hospital}</td>
                  </tr>

                  <tr>
                    <th>PracticingIn</th>
                    <td>{doctorData.practicingIn}</td>
                  </tr>
                  <tr>
                    <th>Specialist</th>
                    <td>{doctorData.specialist}</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>{doctorData.address}</td>
                  </tr>
                  <tr>
                    <th>State</th>
                    <td>{doctorData.state}</td>
                  </tr>
                </thead>

              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PatientDetails