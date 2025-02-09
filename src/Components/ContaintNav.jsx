import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Motoview from '../ViewData/MotoView';
import MotoSlice from '../Modules/MotoSlice';

function ContaintNav() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Main Dashbord</Navbar.Brand>
        </Container>
      </Navbar>
      <MotoSlice />



      
    </>
  );
}

export default ContaintNav;