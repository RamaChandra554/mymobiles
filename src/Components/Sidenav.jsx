import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Sidenav = () => {
  return (
    <>
   <Col xs={4} sm={3} md={2} lg={2} className="bg-dark text-light" style={{ position: 'sticky', top: '0', height: '110vh' }}>
           <ul className='g-4' style={{ listStyle: 'none', lineHeight: '4', color:'white', padding: 2 }}>
             <Link to='/'><li>Home</li></Link>
             <Link to='/apple'><li>Apple</li></Link>
             <Link to='/iqoo'><li>Iqoo</li></Link>
             <Link to='/moto'><li>Moto</li></Link>
             <Link to='/nothing'><li>Nothing</li></Link>
             <Link to='/onepluse'><li>OnePluse</li></Link>
             <Link to='/pixel'><li>Pixel</li></Link>
             <Link to='/realme'><li>Realme</li></Link>
             <Link to='/samsung'><li>Samsung</li></Link>
             <Link to='/vivo'><li>Vivo</li></Link>
           </ul>
           <ul className='justify-content-end' style={{ listStyle: 'none', padding: 0 }}>
             <li><Link to='/'>Sign Out</Link></li>
           </ul>
         </Col>
      
    </>
  )
}

export default Sidenav