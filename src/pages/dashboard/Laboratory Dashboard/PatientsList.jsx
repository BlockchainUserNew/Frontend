import ImageUpload from "@/Components/ImageUpload "
import Input from "@/Components/Input"
import axios from "axios"
import { useState } from "react"
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap"

const PatientList = () => {
  const [accesskey, setAccesskey] = useState("")
  const [PatientReport, setPatientReport] = useState([])
  const [file, setFile] = useState(null)
  // const [patient_name, setPatientName] = useState("")
  // const [lab_name, setLabName] = useState("")
  // const [test_name, setTestName] = useState("")



  const showData = () => {
    //New Line of code added below as lab_name is added in newData
    let newData = { accesskey, lab_name: localStorage.getItem("lab_name") }
    console.log("access key", accesskey);
    axios.post("http://localhost:8080/labtest/view", newData).then((resp) => {
      console.log("resp.data => access", resp.data)
      setPatientReport(resp.data)
      // resp.data.map((item, id) => {
      //   setLabName(item.lab_name)
      //   setPatientName(item.patient_name)
      //   setTestName(item.test_name)

      // })
    }).catch((err) => {
      console.log(err);
    })
    setAccesskey("")
  }
  console.log("patient report", PatientReport);
  // console.log("lab_name", lab_name);
  // console.log("patient_name", patient_name);
  // console.log("test_name", test_name);

  const fileUpload = (test_name, patient_name, accesskey) => {
    // let data = PatientReport[0]
    let date = () => {
      const timestamp = Date.now();
      const cleanStr = new Date(timestamp).toISOString().slice(0, 10);
      // const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").slice(0, 8);
      return cleanStr;
      
    };

    let formData = new FormData();
    // formData.append("data", data)
    // formData.append("file", file)
    formData.append("patient_name", patient_name);
    formData.append("test_name", test_name);
    formData.append("accesskey", accesskey);
    formData.append("date", date());
    formData.append("file", file);
    formData.append("lab_name", localStorage.getItem("lab_name"));
    // formData.append("accesskey", accessKey);
    // formData.append("lab_name", labName);
    axios.post("http://localhost:8080/report/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }
  
  // console.log("file", file);
  return (
    <>
      <Container>

        <Card className="p-3 mb-3">
          <Row>
            <Col md={10}>
              <Input
                label="Access Key"
                type="password"
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
                    </td>
                    <td>
                      <Button className="bg-primary" onClick={() =>
                        fileUpload(item.test_name, item.patient_name, item.accesskey)
                      }>Upload</Button>
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