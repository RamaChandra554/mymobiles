import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { VivoData } from '../Data/VivoData';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';

function VivoView() {
  return (
   <Container fluid>
      <Row className='p-0'>
        <Sidenav/>

        <ZviewData
          data={VivoData}
          linkTo={`/vivo`}
        />

      </Row>
   </Container>
  )
}

export default VivoView

