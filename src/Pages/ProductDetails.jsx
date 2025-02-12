import React from 'react';
import { iqooData } from '../Data/IqooData';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sidenav from '../Components/Sidenav';

function ProductDetails() {
    const { id } = useParams();
    let Details = iqooData.find((e) => e.id == id);

    return (
        <Container fluid>
            <Row className='p-0'>
                {/* Sidebar */}
                <Sidenav/>

                <Col xs={8} sm={9} md={10} lg={10}>
                    <h3>Product Details</h3>
                    <Row className='border align-items-center p-2'>
                        <Col xs={12} sm={6} md={6} lg={6} className='mb-2'>
                            <img src={Details.url} style={{ height: 'auto', width:'80%', maxWidth: '100%' }} alt={Details.name} />
                        </Col>

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
                            <p><strong>Operating System:</strong> {Details.operatingSystem}</p>
                            <p><strong>NFC:</strong> {Details.nfc ? 'Yes' : 'No'} / <strong>USB Type-C:</strong> {Details.usbTypeC ? 'Yes' : 'No'} / <strong>OTG Compatible:</strong> {Details.otgCompatible ? 'Yes' : 'No'}</p>
                            <p><strong>Offer:</strong> {Details.offer}</p>
                            <br />
                            <p><strong style={{ color: 'blue' }}>Price: ₹{Details.price}</strong> <span style={{ textDecoration: 'line-through', color: 'red' }}>₹{Details.originalPrice}</span> <strong>{Details.discount}% off</strong></p>
                            <p className='btn btn-primary'>Add to cart</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetails;
