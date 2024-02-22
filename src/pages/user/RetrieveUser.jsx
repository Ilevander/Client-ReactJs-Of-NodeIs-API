import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Card, Row } from "react-bootstrap";
import styled from "styled-components";
import Layout from "../../components/layout/Layout.jsx";
import { FaHandsClapping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const RetrieveUser = () => {
  const { userId } = useParams();
  const getUserEndpoint = `http://localhost:4000/v1/user/get/${userId}`;

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      const { data: user } = await axios.get(getUserEndpoint);
      setUser(user);
    } catch (error) {
      setError("User cannot be found");
    }
  };

  useEffect(() => {
    fetchUser();// eslint-disable-next-line
  }, [userId]);

  return (
    <Layout className="mt-5 mb-5">
      {user ? (
        <>
          <StyledTitle> <FaHandsClapping /> Hello user <u>{user.name}</u></StyledTitle>
          <Row className="justify-content-center">
            <Col lg={4}>
              <StyledCard>
                <Card.Body>
                  <h4><FaRegUserCircle /> {user.name}</h4>
                  <p> <MdEmail /> {user.email}</p>
                  {user.city && user.country && (
                    <p>
                      <FaLocationDot /> {user.city} - {user.country}
                    </p>
                  )}
                </Card.Body>
              </StyledCard>
            </Col>
          </Row>
        </>
      ) : (
        <StyledErrorMessage>{error}</StyledErrorMessage>
      )}
    </Layout>
  );
};

export default RetrieveUser;

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #b5e7ee; 
  color: #333333;
  border-radius: 10px;
`;

const StyledTitle = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const StyledErrorMessage = styled.div`
  text-align: center;
  color: #ff0000;
`;