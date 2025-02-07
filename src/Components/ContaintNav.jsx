import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContaintNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Main Dashbord</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default ContaintNav;