import "./NavbarContainer.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarContainer = () => {
    return (
        <Navbar id="navbar" expand="lg" className="bg-body-warning">
            <Container>
                <Navbar.Brand href="#home" className="text-danger logo">Hamburgueria</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="text-danger">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-danger">Menu</Nav.Link>
                        <Nav.Link href="#link" className="text-danger">Location</Nav.Link>
                        <Nav.Link href="#link" className="text-danger">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarContainer