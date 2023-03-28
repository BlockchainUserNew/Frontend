import Input from '@/Components/Input'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap'
import { GrAddCircle } from 'react-icons/gr';

const Prescription = () => {
    const [tablet_name, setTablet] = useState("")
    const [dosage, setDosage] = useState("")
    const [accesskey, setAccesskey] = useState("")
    const [doctor_name, setDoctor] = useState("")
    const [data, setData] = useState([])

    const addData = () => {
        const newData = { tablet_name, dosage, accesskey, 
            doctor_name:localStorage.getItem("doctor_name") }
        console.log("newData", newData)
        axios.post("http://localhost:8080/doctorprescription/add", newData).then((resp) => {
            console.log("resp", resp)
            setData(resp.data.datamsg)
            alert("Data added successfully")
        }).catch((err) => {
            console.log(err);
        })
        setDosage("")
        setAccesskey("")
        setTablet("")

        // axios.post("http://localhost:8080/doctorprescription/view", newData).then((resp) => {
        //     console.log("resp", resp)
        //     setData(resp.data.datamsg)
        //     alert("Data added successfully")
        // }).catch((err) => {
        //     console.log(err);
        // })
    }
    console.log("data", data)
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card className='p-3'>
                            <Row>
                                
                                <Col md={3}>
                                    <Input placeholder="tablet name" isRequired={false} value={tablet_name} setValue={setTablet} />
                                </Col>
                                <Col md={3}>
                                    <Input placeholder="dosage" value={dosage} isRequired={false} setValue={setDosage} />
                                </Col>
                                <Col md={3}>
                                    <Input placeholder="access key" value={accesskey} isRequired={false} setValue={setAccesskey} />
                                </Col>
                                <Col>
                                    <Button className='mt-4 bg-primary' onClick={addData}>Add <GrAddCircle className='d-inline ' /></Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='p-3 mt-3'>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Tablet Name</th>
                                        <th>Dosage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[data].map((item, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.tablet_name}</td>
                                                <td>{item.dosage}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Prescription