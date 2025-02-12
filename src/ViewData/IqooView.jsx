import React from 'react';
import { Row, Col,Container } from 'react-bootstrap'; 
import { iqooData } from '../Data/IqooData';
import { Link } from 'react-router-dom';
import Sidenav from '../Components/Sidenav';

function IqooView() {
  return (
    <Container fluid>
    <Row className="p-0">
    <Sidenav/>

      <Col xs={8} sm={9} md={10} lg={10}>
        <Row className="p-2 " style={{textDecoration:'none'}}>
          {iqooData.map((e, index) => (
            <Col xs={12} sm={6} md={4} lg={3}  key={index} className="mb-4">
              <div className="border p-2" style={{}}>
                <img src={e.url} style={{ height: '200px', maxWidth:'100%' }} alt={e.title} />
                <p>{e.name}</p>
                <p>{e.title}</p>
                <p><b>{e.price}</b> / {e.discount}% off</p>
                <p><strong>Rating:</strong> {e.rating}</p>
                <Link to={`/iqoo/${e.id}`} ><p className="btn btn-outline-primary btn-sm">Learn More</p></Link>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </Container>
  

  );
}

export default IqooView;
