import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const LaboratoryDetails = () => {
  const [LabData, setLabData] = useState([])
  useEffect(() => {
    axios.post("http://localhost:8080/laboratory/email", { email: localStorage.getItem("email") }).then((res) => {
      console.log("res details laboratory...==>.", res.data)
      setLabData(res.data)

    }).catch((err) => {
      console.log(err);
    })
  }, [])
  //New Line of code added below
  localStorage.setItem("lab_name", LabData.lab)
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
                    <td>{LabData?.fname}</td>
                  </tr>
                  <tr>
                    <th>Last Name</th>
                    <td>{LabData?.lname}</td>
                  </tr>
                  <tr>
                    <th>UserName</th>
                    <td>{LabData?.userName}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>{LabData?.gender}</td>
                  </tr>
                  <tr>
                    <th>Specialist</th>
                    <td>{LabData?.specialist}</td>
                  </tr>
                  <tr>
                    <th>Lab</th>
                    <td>{LabData?.lab}</td>
                  </tr>
                  <tr>
                    <th>Mobile</th>
                    <td>{LabData?.mobile}</td>
                  </tr>
                  <tr>
                    <th>Code</th>
                    <td>{LabData?.code}</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>{LabData?.address}</td>
                  </tr>
                  <tr>
                    <th>GST</th>
                    <td>{LabData?.GST}</td>
                  </tr>
                  <tr>
                    <th>State</th>
                    <td>{LabData?.state}</td>
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

export default LaboratoryDetails