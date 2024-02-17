import React, { useState } from "react";
import { Col, Container, Row , Form, Button } from "react-bootstrap";
import axios from "axios";

const CreateUser = () => {
     const createUserEndpoint = 'http://localhost:4000/v1/user/create';

     const [name,setName] = useState("");
     const [email,setEmail] = useState("");
     const [city,setCity] = useState("");
     const [country,setCountry] = useState("");
     
     const submitForm = async (event) => {
        event.preventDefault();

        const payload = {
            name,
            email,
            city,
            country,
        };

        try{
            const res = await axios.post(`${createUserEndpoint}`,payload);
            //Optional changing operator 
            if(res?.data?.status === 'OK')
                {
                  setName("");
                  setEmail("");
                  setCity("");
                  setCountry("");
                }
                else  
                    {

                    }
        }
        catch(err){

        }
     }
      return (
          <Container className="mb-5"> 
              <Row className="justify-content-center">
                 <Col lg={6}>
                    <Form>
                            <Form.Group className="mb-3">
                            <Form.Label> Name </Form.Label> 
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                onChange={(elName) => setName(elName.target.value)}
                            />
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label> Email </Form.Label> 
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                onChange={(fieldElement) => setEmail(fieldElement.target.value)}
                            />
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label> City </Form.Label> 
                            <Form.Control
                                type="text"
                                placeholder="City"
                                onChange={(fieldElement) => setCity(fieldElement.target.value)}
                            />
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label> Country </Form.Label> 
                            <Form.Control
                                type="text"
                                placeholder="Country"
                                onChange={(fieldElement) => setCountry(fieldElement.target.value)}
                            />
                            </Form.Group>
                                <Button variant="primary" type="submit" onClick={submitForm}>
                                    Add User
                                </Button>
                    </Form>
                 </Col>
              </Row>
          </Container>
      );
};

export default CreateUser;