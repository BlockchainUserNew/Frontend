import Input from '@/Components/Input'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Tabs, Tab, Table, Card, Col, Button } from 'react-bootstrap'
const PatientHistory = () => {
  const [prescriptionData, setPrescriptionData] = useState([])
  const [accesskey, setAccesskey] = useState("")

    const PrescriptionReport = () =>{
      alert("hello")
    axios.post("http://localhost:8080/doctorprescription/view", { accesskey }).then((res) => {
      console.log("res prescription...==>.", res.data.prescription)
      setPrescriptionData(res.data.prescription)

    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <Container>
      <Row>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Prescription Report">
            <Container>
              <Card className='p-3'>
                <Row>
                  <Col md={9}>
                    <Input value={accesskey} setValue={setAccesskey} placeholder="Enter accesskey here" />
                  </Col>
                  <Col className='mt-4 '>
                    <Button className='bg-primary' onClick={PrescriptionReport}>View Prescription</Button>
                  </Col>
                </Row>
              </Card>
              <Row>
                <Card className='p-3'>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Sr No</th>
                        <th>Doctor Name</th>
                        <th>Tablet Name</th>
                        <th>Doses</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        prescriptionData.map((item, index) => {
                          return (
                            <>
                              <tr>
                                <td>{index+1}</td>
                                <td>{item.doctor_name}</td>
                                <td>{item.tablet_name}</td>
                                <td>{item.dosage}</td>
                              </tr>
                            </>
                          )
                        })
                      }

                    </tbody>
                  </Table>
                </Card>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="profile" title="Test Report">
            Test Report
          </Tab>
        </Tabs>

      </Row>
    </Container>
  )
}

export default PatientHistory