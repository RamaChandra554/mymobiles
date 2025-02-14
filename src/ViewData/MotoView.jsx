import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MotorData } from "../Data/MotoData";
import ZviewData from "./ZviewData";
import Sidenav from '../Components/Sidenav';
import { NewMotoData } from "../Data/NewMotoData";


function Motoview() {
  return (
    <Container fluid>
    <Row className="p-0">
      <Sidenav/>

      <ZviewData
        data={NewMotoData}
        linkTo={'/moto/'}
      />

    </Row>
  </Container>
  );
}

export default Motoview;
