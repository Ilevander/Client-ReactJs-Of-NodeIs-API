import { Container } from "react-bootstrap";
import UsersList from "./components/UsersList";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Container fluid className="mt-4 mt-3">
       <UsersList/>
    </Container>       
  );
}

export default App;
