import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import Layout from "./Layout.jsx";
import styled from "styled-components";

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

const CreateUser = () => {
  const createUserEndpoint = 'http://localhost:4000/v1/user/create';

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  
  const submitForm = async (event) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      city,
      country,
    };

    try {
      const res = await axios.post(createUserEndpoint, payload);
      if (res?.data?.status) {
        toast.success('The user has been successfully created');
        // Reset form fields
        setName("");
        setEmail("");
        setCity("");
        setCountry("");
      } else {
        toast.warn('An error has occurred.');
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error('An error has occurred.');
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
