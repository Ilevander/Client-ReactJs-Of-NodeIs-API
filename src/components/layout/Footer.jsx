import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledContainer fixed="top" bg="dark" data-bs-theme="dark">
      <hr />
      <StyledRow className="mt-5 mb-5 justify-content-center">
        <Col md={{ span: 3, offset: 1 }}>
          <h4>User</h4>
          <StyledLink className="text-muted fw-bold" to="/create">
            Create A User
          </StyledLink>
        </Col>

        <Col md={{ span: 3, offset: 1 }}>
          <h4>About Us</h4>

          <StyledLink className="text-muted" to="/about">
            About Us
          </StyledLink>
        </Col>

        <Col md={{ span: 3 }}>
          <h4>Contact</h4>
          <StyledLink className="text-muted" to="/contact">
            Contact
          </StyledLink>
        </Col>
      </StyledRow>
    </StyledContainer>
  );
};

export default Footer;

const StyledContainer = styled(Container)`
  background-color: #343a40; /* Dark background color */
  padding: 20px;
  border-top: 1px solid #dee2e6; /* Light border on top */
`;

const StyledRow = styled(Row)`
  margin-bottom: 20px; /* Add space between rows */
`;

const StyledLink = styled(NavLink)`
  display: block; /* Make link occupy full width of container */
  text-decoration: none;
  color: #6c757d; /* Dark gray text color */
  transition: color 0.3s ease; /* Smooth color transition on hover */

  &:hover {
    color: #ffffff; /* White color on hover */
  }
`;
