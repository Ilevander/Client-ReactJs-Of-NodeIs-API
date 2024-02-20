import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import Layout from "../../components/layout/Layout.jsx";
import styled from "styled-components";
import { firstUpperCase } from '../../helpers/string.helpers.js';
import * as userService from '../../services/user.service.js';

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();

    const createUserPayload = {
      name,
      email,
      city,
      country,
    };

    try {
      const response = await userService.createUser(createUserPayload);

      if (response?.status) {
        const userName = response?.user?.name;

        toast.success(`User ${userName} has been created!`);  

        // Clear states
        setName("");
        setEmail("");
        setCity("");
        setCountry("");
      } else {
        toast.warn("An error has occurred.");
      }
    } catch (error) {
      const getErrorMessage = () => {
        const {
          data: {
            errors: { body },
          },
        } = error.response;

        const message = body[0]?.message;

        // Uppercase the first letter of the message
        return firstUpperCase(message);
      };

      toast.error(getErrorMessage());
    }
  };

  return (
    <Layout className="mb-5"> 
     <UserTitle>Create new user</UserTitle>
      <Row className="justify-content-center">
        <Col lg={6}>
          <StyledForm>
            <Form.Group className="mb-3">
              <Form.Label> Name </Form.Label> 
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Email </Form.Label> 
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> City </Form.Label> 
              <Form.Control
                type="text"
                placeholder="City"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Country </Form.Label> 
              <Form.Control
                type="text"
                placeholder="Country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              />
            </Form.Group>
            <StyledButton variant="warning" type="submit" onClick={submitForm}>
              Add User
            </StyledButton>
          </StyledForm>
        </Col>
      </Row>
    </Layout>
  );
};

export default CreateUser;

const UserTitle = styled.h3`
  color: #333;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const StyledForm = styled(Form)`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled(Button)`
  width: 100%;
`;
