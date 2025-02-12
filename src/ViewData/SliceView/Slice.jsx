import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

function Slice({ data, imgHeight = '240px', width = '22%', seeAllText = 'See All', linkTo }) {
  let MobSlice = data.slice(0, 4);

  return (
    <>
    <Col className='w-100' >
    <Row className="p-2 " style={{textDecoration:'none',gap:'10px'}}>
      <div className='d-flex '>
        {MobSlice.map((e, index) => (
          <div key={index} className="d-grid border p-2" style={{ width }}>
              <img src={e.url} style={{ height: imgHeight, maxWidth: '100%', margin:'autos' }} alt={e.name} />
              <p>{e.name}</p>
              <p>{e.title}</p>
              <p><b>{e.price || e.originalPrice}</b> / {e.discount}% off</p>
            </div>
          ))}
        <Link to={linkTo} className="btn btn-dark align-items-center" style={{ margin:'auto'  }}>
          {seeAllText}
        </Link>
          </div>
      </Row>
      </Col>
    </>
  );
}

export default Slice;
