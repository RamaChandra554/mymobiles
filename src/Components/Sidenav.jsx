import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Sidenav = () => {
  return (
    <>
    <Col className="col-2 bg-dark text-light" style={{height:'100vh'}}>
            <ul  style={{listStyle:'none',  lineHeight:'4',}}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Conntact</li>
            </ul>
            <ul className='justify-Content-end' style={{listStyle:'none',}}><li><Link to='/'>signOut</Link></li></ul>
        </Col>
      
    </>
  )
}

export default Sidenav