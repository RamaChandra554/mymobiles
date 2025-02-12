import React, { useState } from 'react';
import { Row, Col, Container, Navbar, Nav, Collapse, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { iqooData } from '../Data/IqooData'; // Make sure iqooData is correctly imported

const Sidenav = () => {
  const { id } = useParams(); 
  let Details = iqooData.find((e) => e.id == id); // Assuming you have iqooData available

  // Sidebar toggle state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle function for the sidebar
  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);

  return (
    <Container fluid>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Navbar.Brand href="/">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" style={{ textDecoration: 'none' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/apple" style={{ textDecoration: 'none' }}>Apple</Nav.Link>
            <Nav.Link as={Link} to="/iqoo" style={{ textDecoration: 'none' }}>Iqoo</Nav.Link>
            <Nav.Link as={Link} to="/moto" style={{ textDecoration: 'none' }}>Moto</Nav.Link>
            <Nav.Link as={Link} to="/nothing" style={{ textDecoration: 'none' }}>Nothing</Nav.Link>
            <Nav.Link as={Link} to="/onepluse" style={{ textDecoration: 'none' }}>OnePluse</Nav.Link>
            <Nav.Link as={Link} to="/pixel" style={{ textDecoration: 'none' }}>Pixel</Nav.Link>
            <Nav.Link as={Link} to="/realme" style={{ textDecoration: 'none' }}>Realme</Nav.Link>
            <Nav.Link as={Link} to="/samsung" style={{ textDecoration: 'none' }}>Samsung</Nav.Link>
            <Nav.Link as={Link} to="/vivo" style={{ textDecoration: 'none' }}>Vivo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Sidebar Section */}
      <Row className='p-0'>
        <Col xs={12} sm={3} md={2} lg={2} className="bg-dark text-light">
          {/* Sidebar Toggle Button for Small Screens */}
          <Button 
            variant="dark" 
            className="d-md-none mt-3"
            onClick={handleSidebarToggle}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            {sidebarOpen ? 'Close' : 'Menu'}
          </Button>
          
          {/* Sidebar Content */}
          <Collapse in={sidebarOpen}>
            <div id="sidebar">
              <ul className='g-4' style={{ listStyle: 'none', lineHeight: '2', color: 'white', padding: 10 }}>
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><li>Home</li></Link>
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
            </div>
          </Collapse>
        </Col>

        {/* Product Details Section */}
        <Col xs={12} sm={9} md={10} lg={10} style={{ marginTop: '80px' }}>
          <h3>Product Details</h3>
          <Row className='border align-items-center p-2'>
            {/* Product Image */}
            <Col xs={12} sm={6} md={6} lg={6} className='mb-2'>
              <img src={Details.url} style={{ height: 'auto', maxWidth: '100%' }} alt={Details.name} />
            </Col>

            {/* Product Information */}
            <Col xs={12} sm={6} md={6} lg={6}>
              <p><strong>Name: {Details.name}</strong></p>
              <p><strong>Rating:</strong> {Details.rating} ({Details.reviews} Reviews)</p>
              <p><strong>RAM:</strong> {Details.ram} / <strong>Storage:</strong> {Details.storage}</p>
              <p><strong>Expandable Storage:</strong> {Details.expandableStorage}</p>
              <p><strong>Display Size:</strong> {Details.displaySize} / <strong>Resolution:</strong> {Details.displayResolution} ({Details.displayResolutionType}, {Details.displayType})</p>
              <p><strong>Rear Camera:</strong> {Details.rearCamera} / <strong>Front Camera:</strong> {Details.frontCamera}</p>
              <p><strong>Rear Camera Features:</strong> {Details.rearCameraFeatures}</p>
              <p><strong>Front Camera Features:</strong> {Details.frontCameraFeatures}</p>
              <p><strong>Battery:</strong> {Details.battery} / <strong>Charging:</strong> {Details.batteryCharging}</p>
              <p><strong>Processor:</strong> {Details.processor} / <strong>GPU:</strong> {Details.gpu}</p>
              <p><strong>Weight:</strong> {Details.weight} / <strong>Dimensions:</strong> {Details.dimensions}</p>
              <p><strong>Warranty:</strong> {Details.warranty}</p>
              <p><strong>Offer:</strong> {Details.offer}</p>
              <p><strong>Operating System:</strong> {Details.operatingSystem}</p>
              <p><strong>SIM Type:</strong> {Details.simType}</p>
              <p><strong>NFC:</strong> {Details.nfc ? 'Yes' : 'No'} / <strong>USB Type-C:</strong> {Details.usbTypeC ? 'Yes' : 'No'} / <strong>OTG Compatible:</strong> {Details.otgCompatible ? 'Yes' : 'No'}</p>
              <br />
              <p><strong style={{ color: 'blue' }}>Price: ₹{Details.price}</strong> <span style={{ textDecoration: 'line-through', color: 'red' }}>₹{Details.originalPrice}</span> <strong>{Details.discount}% off</strong></p>
              <p className='btn btn-outline-info'>Add to cart</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidenav;
