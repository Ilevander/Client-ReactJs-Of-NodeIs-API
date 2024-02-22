import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";;

const UserCard = ({ user }) => {
  return (
    <StyledCard>
      <Card.Body>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        {user.city && user.country && (
          <p>
            {user.city} - {user.country}
          </p>
        )}
        <Button variant="secondary" as={NavLink} to={`/update/${user.id}`} className="me-2">
        <FaEdit /> Edit User
        </Button>
        <Button variant="primary" as={NavLink} to={`/get/${user.id}`}>
        <GrOverview /> View User
        </Button>
      </Card.Body>
    </StyledCard>
  );
};

export default UserCard;

const StyledCard = styled(Card)`
  background-color: #f8f9fa; /* Set the background color */
  border: 1px solid #ced4da; /* Add a border */
  border-radius: 10px; /* Add border radius for rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a box shadow */
  margin-bottom: 20px; /* Add some margin between cards */
`;
