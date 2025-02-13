import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MotorData } from "../Data/MotoData";
import ZviewData from "./ZviewData";
import Sidenav from '../Components/Sidenav';


function Motoview() {
  return (
    <Container fluid>
    <Row className="p-0">
      <Sidenav/>

      <ZviewData
        data={MotorData}
        linkTo={'/moto/'}
      />

    </Row>
  </Container>
  );
}

export default Motoview;
