import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Sidenav from '../Components/Sidenav'
import MainDash from '../Modules/mainDash'
import ContaintNav from '../Components/ContaintNav'
const Dashbord = () => {
  return (
    <>
    <Row>
       
        <Sidenav/>
       
        <Col className='col-sm-10 text-dark'>
        <ContaintNav/>

        
        </Col>
    </Row>
    
        
    </>
  )
}

export default Dashbord
