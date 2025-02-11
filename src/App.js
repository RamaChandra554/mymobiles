import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashbord from './Pages/Dashbord';
import { Footer, Header } from 'antd/es/layout/layout';
import MainDash from './Modules/MainDash';
import AppleView from './ViewData/AppleView';
import IqooView from './ViewData/IqooView';
import Motoview from './ViewData/MotoView';
import NotingView from './ViewData/NotingView';
import OnePluseView from './ViewData/OnePluseView';
import PixelView from './ViewData/PixelView';
import RealmeView from './ViewData/RealmeData';
import SamsungView from './ViewData/SamsungView';
import VivoView from './ViewData/VivoView';



const App = () => {
  return (
    <div>
      <Router>
        <Routes>

          <Route path='/' element={<Login/>} />
          <Route path='/signup'element={<Signup/>}/>
          <Route path = '/dashbord' element= {<Dashbord/>}/>
          <Route path = '/maindash' element = {<MainDash/>}/>
          <Route path='/apple' element= {<AppleView/>}/>
          <Route path='/iqoo' element = {<IqooView/>}/>
          <Route path='/moto' element = {<Motoview/>}/>
          <Route path='/nothing' element ={<NotingView/>}/>
          <Route path='/onepluse' element={<OnePluseView/>}/>
          <Route path='/pixel' element={<PixelView/>}/>
          <Route path='/realme' element ={<RealmeView/>}/>
          <Route path='/samsung' element={<SamsungView/>}/>
          <Route path='/vivo' element={<VivoView/>}/>
          
          
        </Routes>
      </Router>
    </div>
  )
}

export default App
