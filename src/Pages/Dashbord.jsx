import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Sidenav from '../Components/Sidenav'
import mainDash from '../Modules/mainDash'


const Dashbord = () => {
  return (
    <>
    <Row>
       
        <Sidenav/>
       
        <Col className='col-sm-10 text-light'>
        <h2>Dashbord</h2>
        </Col>
    </Row>
    
        
    </>
  )
}

export default Dashbord
