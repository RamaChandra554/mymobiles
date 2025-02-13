import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { AppleData } from '../Data/AppleData';
import { Link } from 'react-router-dom';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';

function AppleView() {
  return (
    <Container fluid>
    <Row className="p-0">
      <Sidenav/>

      <ZviewData
        data={AppleData}
        linkTo={'/apple/'}
      />

    </Row>
  </Container>

  )
}

export default AppleView

