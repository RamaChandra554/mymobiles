import React from 'react'
import Row from 'react-bootstrap';
import { OnePlusData } from '../Data/OnePluseData';

function OnePluseView() {
  return (
    <Row className="p-0 ">
    {OnePlusData.map((e) => (
      <Col sm={6} md={4} lg={3} className="border p-0 m-0">
        <img src={e.url} alt="" />
        <p>{e.brand}</p>
        <p>{e.title}</p>
        <p><b>{e.actualPrice}</b> / {e.discount}%off</p>
        <p><strong>reating : </strong>{e.rating}</p>
        <p className="btn btn-outline-primary">Learn More</p>

      </Col>
    ))}
  </Row>
  )
}

export default OnePluseView

