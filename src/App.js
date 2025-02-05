import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Dashbord from './Pages/Dashbord';
import { Footer, Header } from 'antd/es/layout/layout';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>

          <Route path='/' element={<Login/>} />
          <Route path='/signup'element={<Signup/>}/>
          <Route path = 'dashbord' element= {<Dashbord/>}/>
          
        </Routes>
      </Router>
    </div>
  )
}

export default App
