// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Card, Col, Container, Row, Table } from 'react-bootstrap'
// import { useLocation } from 'react-router-dom'

// const ViewPatient = () => {
//   const [PatientData, setPatientData] = useState([])
//   const location = useLocation()
//   // useEffect(() => {
//   //   window.location.reload()
//   // }, [])
//   useEffect(() => {
//     setPatientData(location?.state?.data)
//     console.log("location==>", location?.state)

//   }, [])
//   console.log("patientData", PatientData)
//   return (
//     <>
//       <Container>
//         <Row>
//           <Col>
//             <Card className='p-3'>
//               <Table bordered >
//                 <thead>
//                   <tr>
//                     <th> First Name</th>
//                     <td>{PatientData?.fname}</td>
//                   </tr>
//                   <tr>
//                     <th>Last Name</th>
//                     <td>{PatientData?.lname}</td>
//                   </tr>
//                   <tr>
//                     <th>UserName</th>
//                     <td>{PatientData?.userName}</td>
//                   </tr>
//                   <tr>
//                     <th>Gender</th>
//                     <td>{PatientData?.gender}</td>
//                   </tr>
//                   <tr>
//                     <th>DOB</th>
//                     <td>{PatientData?.dob?.slice(0, 10)}</td>
//                   </tr>
//                   <tr>
//                     <th>Mobile</th>
//                     <td>{PatientData?.mobile}</td>
//                   </tr>
//                   <tr>
//                     <th>Blood Group</th>
//                     <td>{PatientData?.bloodGroup}</td>
//                   </tr>
//                   <tr>
//                     <th>Address</th>
//                     <td>{PatientData?.address}</td>
//                   </tr>
//                   <tr>
//                     <th>PinCode</th>
//                     <td>{PatientData?.pincode}</td>
//                   </tr>
//                   <tr>
//                     <th>State</th>
//                     <td>{PatientData?.state}</td>
//                   </tr>

//                   <tr>
//                     <th>Country</th>
//                     <td>{PatientData?.country}</td>
//                   </tr>
//                 </thead>

//               </Table>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   )
// }

// export default ViewPatient