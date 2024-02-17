import { Container } from "react-bootstrap";
import { Route , BrowserRouter , Routes , Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import UsersList from "./components/UsersList";
import CreateUser from "./components/CreateUser";


const App = () => {
  return (
    <Container fluid className="mt-4 mt-3">
       <UsersList/>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<UsersList/>} />
               <Route path="/create" element={<CreateUser/>} />
            </Routes>
         </BrowserRouter>
    </Container>       
  );
}

export default App;


