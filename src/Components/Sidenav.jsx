import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Sidenav = () => {
  return (
    <>
    <Col className="col-2 bg-dark text-light" style={{height:'100vh', position:'sticky', top:'0'}}>
            <ul  style={{listStyle:'none',  lineHeight:'4',}}>
                <li>Home</li>
                <Link to='/'><li>Apple</li></Link>
                <li>Iqoo</li>
                <li>Moto</li>
                <li>Nothing</li>
                <li>OnePluse</li>
                <li>Pixel</li>
                <li>Realme</li>
                <li>Samsung</li>
                <li>Vivo</li>
            </ul>
            <ul className='justify-Content-end' style={{listStyle:'none',}}><li><Link to='/'>signOut</Link></li></ul>
        </Col>
      
    </>
  )
}

export default Sidenav