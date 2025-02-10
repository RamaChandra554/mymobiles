import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Motoview from '../ViewData/MotoView';
import MotoSlice from '../ViewData/SliceView.jsx/MotoSlice';
import AppleSlice from '../ViewData/SliceView.jsx/AppleSlice';
import IqooSlice from '../ViewData/SliceView.jsx/IqooSlice';
import NothingSlice from '../ViewData/SliceView.jsx/NothingSlice';

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
    </>
  );
}

export default ContaintNav;