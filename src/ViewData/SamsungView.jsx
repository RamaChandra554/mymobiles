import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { SamsungData } from '../Data/SamsungData';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';

function SamsungView() {
  return (
    <Container fluid>
      <Row className='p-0'>
        <Sidenav />

        <ZviewData
          data={SamsungData}
          linkTo={`/samsung`}
        />

      </Row>
    </Container>
  )
}

export default SamsungView

