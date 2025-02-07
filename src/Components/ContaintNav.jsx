import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Motoview from '../ViewData/MotoView';

function ContaintNav() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Main Dashbord</Navbar.Brand>
      </Container>
    </Navbar>
     <Motoview/>
     </>
  );
}

export default ContaintNav;