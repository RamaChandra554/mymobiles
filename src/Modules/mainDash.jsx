import React from 'react'

const mainDash = () => {
  return (
    <div>
      <div className="col-2 bg-dark text-light" style={{height:'100vh'}}>
            <ul  style={{listStyle:'none',  lineHeight:'4',}}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Conntact</li>
            </ul>
            <ul className='justify-Content-end' style={{listStyle:'none',}}><li>signOut</li></ul>
        </div>
    </div>
  )
}

export default mainDash
