import { Container , Navbar , Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoPersonAddOutline } from "react-icons/io5";
import { GrView } from "react-icons/gr";



const NavigationBar = () => {
    return (
        <>
       <StyledNavbar fixed="top" className="mb-4">
        <Container>
            <Navbar.Brand as={NavLink} to="/">Client of Nodejs API </Navbar.Brand>
            <Nav className="flex-grow-1 justify-content-end">
                <Nav.Link as={NavLink} to="/create" className="fw-bold"> <IoPersonAddOutline /> Create User</Nav.Link>
                <Nav.Link as={NavLink} to="/users" className="fw-bold"> <GrView /> Show Users</Nav.Link>
            </Nav>
        </Container>
      </StyledNavbar>
    </>
    );
};

export default NavigationBar;

const StyledNavbar = styled(Navbar)`
  background-color: #20d4f4; 
`;
