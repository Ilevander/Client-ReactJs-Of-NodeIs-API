import { Container , Navbar , Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    return (
        <>
       <Navbar fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand as={NavLink} to="/">Client of Nodejs API </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/create">Create User</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
    );
};

export default NavigationBar;