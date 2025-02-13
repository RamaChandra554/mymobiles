import React from 'react'
import { Row,Col, Offcanvas, Container } from 'react-bootstrap'
import ContaintNav from '../Components/ContaintNav'
import OffCanves from '../Components/OffCanvas'

const Dashbord = () => {
  return (
    <>
    <Container fluid >
    <Row>
       <OffCanves/>
       
        <Col className='col-sm-10 text-dark'>
        
        <ContaintNav/>        
        
        </Col>
    </Row>
    </Container>
    
        
    </>
  )
}

export default Dashbord
