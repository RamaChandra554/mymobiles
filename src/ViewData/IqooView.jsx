import React from 'react';
import { Row, Col } from 'react-bootstrap'; 
import { iqooData } from '../Data/IqooData';

function IqooView() {
  return (
    <Row className="p-0">
      {iqooData.map((e, index) => (
        <Col key={index} sm={6} md={4} lg={3} className="border p-0 m-0">
          <img src={e.url} alt="" />
          <p>{e.brand}</p>
          <p>{e.title}</p>
          <p><b>{e.actualPrice}</b> / {e.discount}% off</p>
          <p><strong>Rating: </strong>{e.rating}</p>
          <p className="btn btn-outline-primary">Learn More</p>
        </Col>
      ))}
    </Row>
  );
}

export default IqooView;
