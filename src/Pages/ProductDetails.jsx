import React from 'react';
import { Alert } from "react-bootstrap";
import Sidenav from '../Components/Sidenav';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ZAllData } from '../Data/ZAllData';
import Navbrand from '../Components/Navbrand';





function ProductDetails() {
    const { id } = useParams();
    let Details = ZAllData.find((e) => e.id === id);

    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState("");
    console.log("Product Details:", Details);


    useEffect(() => {
        try {
            const storedItems = localStorage.getItem('cartItem');
            if (storedItems) {
                setCart(JSON.parse(storedItems));
            }
        } catch (error) {
            console.error("Error loading cart items from localStorage", error);
        }
    }, []);

    const addCart = () => {
        const product = {
            name: Details.name,
            ram: Details.ram,
            originalPrice: Details.originalPrice,
            price: Details.price,
            url: Details.url,
            rating: Details.rating,
            id: Details.id
        };

        const storedCart = localStorage.getItem("cartItem");
        let cart = storedCart ? JSON.parse(storedCart) : [];

        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1; 
        } else {
            cart.push({ ...product, quantity: 1 }); 
        }

        setCart(cart);
        localStorage.setItem("cartItem", JSON.stringify(cart));

        setMessage(`${Details.name} added to cart!`);

        setTimeout(() => setMessage(""), 3000);


        // Add product to cart
        // const updatedCart = [...cart, product];
        // setCart(updatedCart);
        // localStorage.setItem('cartItem', JSON.stringify(updatedCart));

        // alert(`${Details.name} added to cart!`);



    };
    if (!Details) {
        return (
            <Container fluid>
                <Row className='p-0'>
                    <Sidenav />
                    <Col xs={8} sm={9} md={10} lg={10}>
                        <div className='bg-dark text-light d-flex justify-content-between'>
                            {/* <h3>Product Details</h3> */}

                            <Link to='/cart'><p>Cart</p></Link>
                        </div>
                        <Row className='border align-items-center p-2'>
                            <Col>
                                <p>Product not found!</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }


    return (
        <Container fluid>
            <Row className='p-0'>
                <Sidenav />

                <Col xs={8} sm={9} md={10} lg={10}>
                    <div className='bg-dark text-light d-flex justifyContent-between'>
                        {/* <h3>Product Details</h3>  */}
                        <Navbrand/>
                        <Link to='/cart'><p style={{margin:'4px 0 2px 100px'}}>Cart</p></Link></div>
                        
                        {message && (
                        <Alert variant="success" className="position-fixed top-0 end-0 m-3">
                            {message}
                        </Alert>
                    )}

                    <Row className='border align-items-center p-2'>
                        <Col xs={12} sm={6} md={4} lg={4} className='mb-2'>
                            <img src={Details.url} style={{ height: 'auto', justifyContent: 'between', width: '80%', maxWidth: '100%' }} alt={Details.name} />
                        </Col>

                        <Col xs={12} sm={6} md={8} lg={8}>
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
                            <button className='btn btn-info' onClick={addCart}>Add to cart</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetails;




// import React from 'react';
// import Sidenav from '../Components/Sidenav';

// import { Row, Col, Container } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { ZAllData } from '../Data/ZAllData';




// function ProductDetails() {
//     const { id } = useParams();
//     let Details = ZAllData.find((e) => e.id == id);

//     const [cart, setCart] =useState([]);

//         React.useEffect(() => {
//             try {
//                 const storedItems = localStorage.getItem('cartItem');
//                 if (storedItems) {
//                     setCart(JSON.parse(storedItems));
//                 }
//             } catch (error) {
//                 console.error("Error loading cart items from localStorage", error);
//             }
//         }, []);
    
//         const addCart = () => {
//             const product = {
//                 name: Details.name,
//                 price: Details.price,
//                 url: Details.url,
//                 rating: Details.rating,
//                 id: Details.id
//             };
    
//             // Add product to cart
//             const updatedCart = [...cart, product];
//             setCart(updatedCart);
//             localStorage.setItem('cartItem', JSON.stringify(updatedCart));
    
//             alert(`${Details.name} added to cart!`);
//         };
//         if (!Details) {
//             return (
//                 <Container fluid>
//                     <Row className='p-0'>
//                         <Sidenav />
//                         <Col xs={8} sm={9} md={10} lg={10}>
//                             <div className='bg-dark text-light d-flex justify-content-between'>
//                                 <h3>Product Details</h3>
//                                 <Link to='/cart'><p>Cart</p></Link>
//                             </div>
//                             <Row className='border align-items-center p-2'>
//                                 <Col>
//                                     <p>Product not found!</p>
//                                 </Col>
//                             </Row>
//                         </Col>
//                     </Row>
//                 </Container>
//             );
//         }
    

//     // const addCart =() =>{
//     //     const ProductData = document.querySelectorAll('p');
//     //     let singleData = Array.from(ProductData).map((i)=>i.innerText)
//     //     setCart(singleData)
//     //     alert ('item Add to Cart Successfully')
//     // };
//     // localStorage.setItem('cartItem',cart)

//     return (
//         <Container fluid>
//             <Row className='p-0'>
//                 <Sidenav/>

//                 <Col xs={8} sm={9} md={10} lg={10}>
//                     <div className='bg-dark text-light d-flex justifyContent-between align-items-center'>
//                         <h3>Product Details</h3> 
//                     <Link to='/cart'><p style={{marginLeft:'100px'}}>Cart</p></Link></div>
//                     <Row className='border align-items-center p-2'>
//                         <Col xs={12} sm={6} md={4} lg={4} className='mb-2'>
//                             <img src={Details.url} style={{ height: 'auto', justifyContent:'between', width:'80%', maxWidth: '100%' }} alt={Details.name} />
//                         </Col>

//                         <Col xs={12} sm={6} md={8} lg={8}>
//                             <p><strong>Name: {Details.name}</strong></p>
//                             <p><strong>Rating:</strong> {Details.rating} ({Details.reviews} Reviews)</p>
//                             <p><strong>RAM:</strong> {Details.ram} / <strong>Storage:</strong> {Details.storage}</p>
//                             <p><strong>Expandable Storage:</strong> {Details.expandableStorage}</p>
//                             <p><strong>Display Size:</strong> {Details.displaySize} / <strong>Resolution:</strong> {Details.displayResolution} ({Details.displayResolutionType}, {Details.displayType})</p>
//                             <p><strong>Rear Camera:</strong> {Details.rearCamera} / <strong>Front Camera:</strong> {Details.frontCamera}</p>
//                             <p><strong>Rear Camera Features:</strong> {Details.rearCameraFeatures}</p>
//                             <p><strong>Front Camera Features:</strong> {Details.frontCameraFeatures}</p>
//                             <p><strong>Battery:</strong> {Details.battery} / <strong>Charging:</strong> {Details.batteryCharging}</p>
//                             <p><strong>Processor:</strong> {Details.processor} / <strong>GPU:</strong> {Details.gpu}</p>
//                             <p><strong>Weight:</strong> {Details.weight} / <strong>Dimensions:</strong> {Details.dimensions}</p>
//                             <p><strong>Warranty:</strong> {Details.warranty}</p>
//                             <p><strong>Operating System:</strong> {Details.operatingSystem}</p>
//                             <p><strong>NFC:</strong> {Details.nfc ? 'Yes' : 'No'} / <strong>USB Type-C:</strong> {Details.usbTypeC ? 'Yes' : 'No'} / <strong>OTG Compatible:</strong> {Details.otgCompatible ? 'Yes' : 'No'}</p>
//                             <p><strong>Offer:</strong> {Details.offer}</p>
//                             <br />
//                             <p><strong style={{ color:'blue' }}>Price: ₹{Details.price}</strong> <span style={{ textDecoration: 'line-through', color:'red' }}>₹{Details.originalPrice}</span> <strong>{Details.discount}% off</strong></p>
//                             <button className='btn btn-primary'onClick={addCart}>Add to cart</button>
//                         </Col>
//                     </Row>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default ProductDetails;

