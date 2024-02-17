import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ReadUsers = () => {
    const getAllUsers = 'http://localhost:4000/v1/user/all';
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await axios.get(getAllUsers);
            console.log(res.data);
            setUsers(res.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const renderedUsers = users.map(user => (
        <Row className='justify-content-center' key={user.id}>
            <Col lg={4}>
                <Card>
                    <Card.Body>
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    ));

    return (
        <Container>
            <h3 className="text-center">Users</h3>
            <Row className="justify-content-md-center">
                {renderedUsers}
            </Row>
        </Container>
    );
}

export default ReadUsers;
