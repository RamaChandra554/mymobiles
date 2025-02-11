import React from 'react';
import { iqooData } from '../Data/IqooData';
import { AppleData } from '../Data/AppleData';
import { NewMotoData } from '../Data/NewMotoData';
import { NothingData } from '../Data/NotingData';
import { OnePlusData } from '../Data/OnePluseData';
import { PixelData } from '../Data/PixelData';
import { SamsungData } from '../Data/SamsungData';
import { RealmeData } from '../Data/RealmeData';
import { VivoData } from '../Data/VivoData';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Sidenav from '../Components/Sidenav';

function ProductDetails() {
    const { id } = useParams();
    let Details = iqooData.find((e) => e.id == (id));

    return (
        <Container fluid>
            <Row className='p-0'>
                <Sidenav/>

                <Col xs={8} sm={9} md={10} lg={10}>
                <h3>ProductDetails</h3>
                    <Row className='border align-items-center p-2' >
                        <Col sm={6} className='mb-2'>
                            <img src={Details.url} alt='' />
                        </Col>
                        <Col sm={6}>
                            <p>Name: {Details.name}</p>
                            <p>Rating: {Details.rating} of {Details.reviews} Reviews</p>
                            <p><b>{Details.price}</b> / {Details.originalPrice} <b>{Details.discount}% off</b></p>
                            <p>Ram:{Details.ram} / Storage:{Details.storage}</p>
                            <p>Cameras: {Details.rearCamera} front: {Details.frontCamera}</p>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails
