import Input from '@/Components/Input'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Tabs, Tab, Table, Card, Col, Button } from 'react-bootstrap'
import fileDownload from 'js-file-download'
const PatientHistory = ({ filename }) => {
  const [prescriptionData, setPrescriptionData] = useState([])
  const [LabData, setLabData] = useState([])
  const [accesskey, setAccesskey] = useState("")
  const [viewDate, setViewDate] = useState([])
  const [viewPrescriptionDate, setViewPrescriptionDate] = useState([])
  const [showpres, setShowPres] = useState(false)
  const [showrep, setShowRep] = useState(false)

  const PrescriptionReport = () => {
    alert("successful")
    axios.post("http://localhost:8080/doctorprescription/view", { accesskey }).then((res) => {
      console.log("res prescription...==>.", res.data.prescription)
      setPrescriptionData(res.data.prescription)
      setShowPres(true)

    }).catch((err) => {
      console.log(err);
    })
    setAccesskey("")
  }
  const LabReport = () => {
    alert("successful")
    axios.post("http://localhost:8080/report/view", { accesskey }).then((res) => {
      console.log("res prescription...==>.", res.data.reportdetail)
      setLabData(res.data.reportdetail)
      setShowRep(true)

    }).catch((err) => {
      console.log(err);
    })
    setAccesskey("")
  }

  const handleDownload = async (filename) => {
    try {
      const response = await axios.get(`http://localhost:8080/report/download/${LabData[0].file}`, {
        responseType: 'blob',
      });
      fileDownload(response.data, filename);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8080/report/date").then((res) => {
      console.log("res report date...==>.", res.data)
      setViewDate(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/doctorprescription/date").then((res) => {
      console.log("res prescription date...==>.", res.data)
      setViewPrescriptionDate(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Prescription Report">

              <Card className='p-3 mb-3'>
                <Row >
                  <Col md={9}>
                    <Input value={accesskey} type="password" setValue={setAccesskey} placeholder="Enter accesskey here" />
                  </Col>
                  <Col className='mt-4 '>
                    <Button className='bg-primary' onClick={PrescriptionReport}>View Prescription</Button>
                  </Col>
                </Row>
              </Card>
              {/* <Row> */}
              {showpres &&
                <Card className='p-3'>

                  <Table striped bordered hover>
                    {viewPrescriptionDate.map((prescriptionDate) => {
                      return (
                        <>
                          <thead>
                            <tr>
                              <td colSpan={6} className='text-center'>{prescriptionDate}</td>
                            </tr>
                            <tr>
                              {/* <th>Sr No</th> */}
                              {/* <th>Date (YYYY-MM-DD)</th> */}
                              <th>Doctor Name</th>
                              <th>Tablet Name</th>
                              <th>Doses</th>
                              <th>Remarks</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              prescriptionData.map((item, index) => {
                                if (prescriptionDate === item.date) {
                                  return (
                                    <>
                                      <tr>
                                        {/* <td>{index + 1}</td> */}
                                        {/* <td>{item.date}</td> */}
                                        <td>{item.doctor_name}</td>
                                        <td>{item.tablet_name}</td>
                                        <td>{item.dosage}</td>
                                        <td>{item.remark}</td>
                                      </tr>
                                    </>
                                  )
                                }
                              })
                            }

                          </tbody>
                        </>
                      )
                    })}
                  </Table>
                </Card>
              }
              {/* </Row> */}

            </Tab>
            <Tab eventKey="profile" title="Test Report">
              <Card className='p-3 mb-3'>
                <Row >
                  <Col md={9}>
                    <Input value={accesskey} setValue={setAccesskey} placeholder="Enter accesskey here" type="password" />
                  </Col>
                  <Col className='mt-4 '>
                    <Button className='bg-primary' onClick={LabReport}>View Report</Button>
                  </Col>
                </Row>
              </Card>
              {/* <Row> */}
              {showrep &&
                <Card className='p-3'>
                  <Table striped bordered hover>
                    {viewDate.map((reportDate) => {
                      return (
                        <>
                          <thead>
                            <tr>
                              <td colSpan={4} className='text-center'>{reportDate}</td>
                            </tr>
                            <tr>
                              {/* <th>Sr No</th> */}
                              {/* <th>Date (YYYY-MM-DD)</th> */}
                              <th>Lab Name</th>
                              <th>Test Name</th>
                              <th>File</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              LabData.map((item, index) => {
                                if (reportDate === item.date) {
                                  return (
                                    <>
                                      <tr>
                                        {/* <td>{index + 1}</td> */}
                                        {/* <td>{item.date}</td> */}
                                        <td>{item.lab_name}</td>
                                        <td>{item.test_name}</td>
                                        <td>
                                          <Button className='bg-primary' onClick={() => handleDownload(item.file)}>
                                            Download {item.file}
                                          </Button>
                                        </td>
                                      </tr>
                                    </>
                                  )
                                }
                              })
                            }

                          </tbody>
                        </>
                      )
                    })}


                  </Table>
                </Card>
              }
              {/* </Row> */}
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default PatientHistory