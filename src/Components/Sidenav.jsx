import zIndex from '@mui/material/styles/zIndex';
import React, { useState } from 'react';
import { Col, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  
  return (
    <>
      
      <Col xs={4} sm={3} md={2} lg={2} className="bg-dark text-light " style={{ position: 'sticky', top: 0, height: '100vh' }}>
        <ul className='g-4 pb-4' style={{ listStyle: 'none', lineHeight: '2', color: 'white', padding: 10 }}>
          <Link to='/dashbord' style={{ textDecoration: 'none', color: 'white' }}><li>Home</li></Link>
          <Link to='/apple' style={{ textDecoration: 'none', color: 'white' }}><li>Apple</li></Link>
          <Link to='/iqoo' style={{ textDecoration: 'none', color: 'white' }}><li>Iqoo</li></Link>
          <Link to='/moto' style={{ textDecoration: 'none', color: 'white' }}><li>Moto</li></Link>
          <Link to='/nothing' style={{ textDecoration: 'none', color: 'white' }}><li>Nothing</li></Link>
          <Link to='/onepluse' style={{ textDecoration: 'none', color: 'white' }}><li>OnePluse</li></Link>
          <Link to='/pixel' style={{ textDecoration: 'none', color: 'white' }}><li>Pixel</li></Link>
          <Link to='/realme' style={{ textDecoration: 'none', color: 'white' }}><li>Realme</li></Link>
          <Link to='/samsung' style={{ textDecoration: 'none', color: 'white' }}><li>Samsung</li></Link>
          <Link to='/vivo' style={{ textDecoration: 'none', color: 'white' }}><li>Vivo</li></Link>
        </ul>
          <Link to='/' ><p>SignOut</p></Link>
      </Col>

      
    </>
  );
};

export default Sidenav;
