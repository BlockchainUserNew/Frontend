import Input from '@/Components/Input'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap'
import { GrAddCircle } from 'react-icons/gr';
import { useLocation } from 'react-router-dom';

const Prescription = () => {
    const [tablet_name, setTablet] = useState("")
    const [dosage, setDosage] = useState("")
    const [accesskey, setAccesskey] = useState("")
    const [remark, setRemark] = useState("")
    const [date, setDate] = useState("")
    const [data, setData] = useState([])
    const location = useLocation()
    let locationData = location?.state?.accesskey
    console.log("locationData", locationData);
    const addData = () => {

        let date = () => {
            const timestamp = Date.now();
            const cleanStr = new Date(timestamp).toISOString().slice(0, 10);
            // const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").slice(0, 8);
            return cleanStr;
        };


        const newData = {
            tablet_name: tablet_name, remark: remark ? remark : "No Remark", dosage: dosage, accesskey: locationData ? locationData : accesskey,
            doctor_name: localStorage.getItem("doctor_name"), date: date()
        }
        console.log("newData====>", newData)
        axios.post("http://localhost:8080/doctorprescription/add", newData).then((resp) => {
            console.log("resp....prescription>>", resp.data)
            setData(resp.data.datamsg)
            alert("Data added successfully")
        }).catch((err) => {
            console.log(err);
        })
        setDosage("")
        setAccesskey("")
        setTablet("")
        setRemark("")

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

                                <Col md={locationData ? 5 : 4}>
                                    <Input placeholder="tablet name" isRequired={false} value={tablet_name} setValue={setTablet} />
                                </Col>
                                <Col md={locationData ? 5 : 4}>
                                    <Input placeholder="dosage" value={dosage} isRequired={false} setValue={setDosage} />
                                </Col>
                                {
                                    !locationData &&
                                    <Col md={4}>
                                        <Input placeholder="access key" type="password" value={accesskey} isRequired={false} setValue={setAccesskey} />
                                    </Col>
                                }
                                <Col md={10}>
                                    <Input as="textarea" placeholder="remark / suggestions" value={remark} isRequired={false} setValue={setRemark} />
                                </Col>
                                <Col className='mt-2'>
                                    <Button className='mt-4 bg-primary' onClick={addData}>Add Data <GrAddCircle className='d-inline ' /></Button>
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