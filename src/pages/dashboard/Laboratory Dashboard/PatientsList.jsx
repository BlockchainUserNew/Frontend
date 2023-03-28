import ImageUpload from "@/Components/ImageUpload "
import Input from "@/Components/Input"
import axios from "axios"
import { useState } from "react"
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap"

const PatientList = () => {
  const [accesskey, setAccesskey] = useState("")
  const [PatientReport, setPatientReport] = useState([])
  const [file, setFile] = useState(null)
  const [patient_name, setPatientName] = useState("")
  const [lab_name, setLabName] = useState("")
  const [test_name, setTestName] = useState("")



  const showData = () => {
    let newData = { accesskey }
    console.log("access key", accesskey);
    axios.post("http://localhost:8080/labtest/view", newData).then((resp) => {
      console.log("resp.data => access", resp.data.test)
      setPatientReport(resp.data.test)
      resp.data.test.map((item, id) => {
        setLabName(item.lab_name)
        setPatientName(item.patient_name)
        setTestName(item.test_name)
      
      })
    }).catch((err) => {
      console.log(err);
    })
    setAccesskey("")
  }
  console.log("patient report", PatientReport);
        console.log("lab_name", lab_name);
        console.log("patient_name", patient_name);
        console.log("test_name", test_name);
  const fileUpload = () => {
    let data = PatientReport[0]
    let formData = new FormData();
    formData.append("data", data)
    formData.append("file", file)
    axios.post("http://localhost:8080/report/add", formData)
  }
  console.log("file", file);
  return (
    <>
      <Container>

        <Card className="p-3 mb-3">
          <Row>
            <Col md={10}>
              <Input
                label="Access Key"
                type="string"
                placeholder="enter access key here"
                value={accesskey}
                setValue={setAccesskey}
                isRequired={false}
              />
            </Col>
            <Col className="mt-3">
              <Button className="mt-3 text-dark" onClick={showData}>Show Data</Button>
            </Col>
          </Row>
        </Card>

      </Container>


      <Card className="p-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Patient Name</th>
              <th>Test Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              PatientReport.map((item, id) => {
                return (
                  <tr>
                    <td>{id + 1}</td>
                    <td>{item.patient_name}</td>
                    <td>{item.test_name}</td>

                    <td>
                      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                      <Button className="bg-primary" onClick={fileUpload}>Upload</Button>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </Table>
      </Card>
    </>
  )
}

export default PatientList