import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Motoview from '../ViewData/MotoView';
import MotoSlice from '../ViewData/SliceView.jsx/MotoSlice';
import AppleSlice from '../ViewData/SliceView.jsx/AppleSlice';
import IqooSlice from '../ViewData/SliceView.jsx/IqooSlice';
import NothingSlice from '../ViewData/SliceView.jsx/NothingSlice';
import VivoSlice from '../ViewData/SliceView.jsx/VivoSlice';
import SamsungSlice from '../ViewData/SliceView.jsx/SamsungSlice';
import PixelSlice from '../ViewData/SliceView.jsx/PixelSlice';
import RelmeSlice from '../ViewData/SliceView.jsx/RelmeSlice';

function ContaintNav() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Main Dashbord</Navbar.Brand>
        </Container>
      </Navbar>
      <AppleSlice/>
      <IqooSlice/>
      <MotoSlice/>
      <NothingSlice/>
      <SamsungSlice/>
      <PixelSlice/>
      <RelmeSlice/>
      <VivoSlice/>
    </>
  );
}

export default ContaintNav;