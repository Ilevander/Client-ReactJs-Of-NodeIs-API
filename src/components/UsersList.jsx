import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Layout from "./Layout.jsx";

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const UserTitle = styled.h3`
  color: #333;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const StyledRow = styled(Row)`
  justify-content: center;
`;

const UsersList = () => {
  const getAllUsersEndpoint = 'http://localhost:4000/v1/user/all';
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(getAllUsersEndpoint);
      console.log(res.data);
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  const colors = ["#ff6347", "#4682b4", "#32cd32", "#ba55d3", "#ffa500"];

  const renderedUsers = users.map((user, index) => (
    <Col lg={4} key={user.id}>
      <StyledCard style={{ backgroundColor: colors[index % colors.length] }}>
        <Card.Body>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          {user.city && user.country && (
            <p>{user.city} - {user.country}</p>
          )}
        </Card.Body>
      </StyledCard>
    </Col>
  ));

  return (
    <Layout className="mt-5 mb-5">
      <UserTitle>Users</UserTitle>
      <StyledRow>
        {renderedUsers}
      </StyledRow>
    </Layout>
  );
}

export default UsersList;
