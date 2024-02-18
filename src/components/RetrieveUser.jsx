import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Col, Card } from "react-bootstrap";

const RetrieveUser = () => {
    const { userId } = useParams();
    const getUserEndpoint = `http://localhost:4000/v1/user/get/${userId}`;

    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        try {
            const { data: user } = await axios.get(getUserEndpoint);
            setUser(user);
        } catch (error) {
            setUser(null);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [userId]); 
    

    return (
        <Container className="mt-5 mb-5">
            {user ? (
                <>
                    <h3 className="text-center mb-3">{user.name}</h3>
                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>
                                {user.city && user.country && (
                                    <p>
                                        {user.city} - {user.country}
                                    </p>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </>
            ) : (
                <div className="text-center text-danger">User cannot be found</div>
            )}
        </Container>
    );
};

export default RetrieveUser;
