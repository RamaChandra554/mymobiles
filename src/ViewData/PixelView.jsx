import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { PixelData } from '../Data/PixelData';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';

function PixelView() {
  return (
    <Container fluid>
      <Row className='p-0'>
        <Sidenav />

        <ZviewData
          data={PixelData}
          linkTo={`/pixel/`}
        />
      </Row>
    </Container>
  )
}

export default PixelView

