import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Motoview from '../ViewData/MotoView';
import MotoSlice from '../ViewData/SliceView/MotoSlice';
import AppleSlice from '../ViewData/SliceView/AppleSlice';
import IqooSlice from '../ViewData/SliceView/IqooSlice';
import NothingSlice from '../ViewData/SliceView/NothingSlice';
import VivoSlice from '../ViewData/SliceView/VivoSlice';
import SamsungSlice from '../ViewData/SliceView/SamsungSlice';
import PixelSlice from '../ViewData/SliceView/PixelSlice';
import RelmeSlice from '../ViewData/SliceView/RelmeSlice';
import OnePulseSlice from '../ViewData/SliceView/OnePulseSlice';

function ContaintNav() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <>
          <Navbar.Brand href="#">Main Dashbord</Navbar.Brand>
        </>
      </Navbar>
      
      <AppleSlice />
      <IqooSlice />
      <MotoSlice />
      <NothingSlice />
      <SamsungSlice />
      <OnePulseSlice />
      <PixelSlice />
      <RelmeSlice />
      <VivoSlice />
    </>
  );
}

export default ContaintNav;