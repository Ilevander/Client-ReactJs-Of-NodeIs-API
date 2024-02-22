import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { FaTiktok } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
  return (
    <StyledFooter bg="dark" data-bs-theme="dark" className="mt-5"> {/* Add margin-bottom */}
      <Container>
        <hr />
        <Row className="mt-5 mb-5 justify-content-center">
          <Col md={{ span: 3, offset: 1 }}>
            <h4>User</h4>
            <StyledNavLinkBlue className="fw-bold" to="/create">
              Create A User
            </StyledNavLinkBlue>
          </Col>

          <Col md={{ span: 3, offset: 1 }}>
            <h4>About Us</h4>
            <StyledNavLinkBlue to="/about">
              About Us
            </StyledNavLinkBlue>
          </Col>

          <Col md={{ span: 3 }}>
            <h4>Contact</h4>
            <StyledNavLinkBlue to="/contact">
              Contact
            </StyledNavLinkBlue>
          </Col>
        </Row>

        {/* Additional content */}
        <Row className="mt-5 justify-content-center">
          <Col md={{ span: 6 }}>
            <h4><BsLinkedin /> <ImInstagram /> <FaTiktok /> <IoLogoYoutube />
 </h4>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <p className="text-center">© 2024 Ilyass EL AMRI. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: #20d4f4; 
  padding: 20px;
  border-top: 1px solid #dee2e6;
`;

const StyledNavLinkBlue = styled(NavLink)`
  color: blue; 
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;
