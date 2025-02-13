import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { OnePlusData } from '../Data/OnePluseData';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';

function OnePluseView() {
  return (
    <Container fluid>
      <Row>
        <Sidenav />

        <ZviewData
          data={OnePlusData}
          linkTo={`/onepluse/`}
        />
      </Row>
    </Container>
  )
}

export default OnePluseView

