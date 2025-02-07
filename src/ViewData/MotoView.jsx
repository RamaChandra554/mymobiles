import React from "react";
import { Row, Col } from "react-bootstrap";
import { MotorData } from "../Data/MotoData";

function Motoview() {
  return (
    <Row>
      {MotorData.map((e) => (
        <Col sm={6} md={4} lg={3} className="border p-0 m-0">
          <img src={e.url} alt="" />
          <p>{e.brand}</p>
          <p>{e.title}</p>
          <p><b>{e.actualPrice}</b> / {e.discount}%off</p>
          <p>{e.rating}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Motoview;
