import { Container } from "react-bootstrap";
import { Route , BrowserRouter , Routes  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import UsersList from "./components/UsersList";
import CreateUser from "./components/CreateUser";


const App = () => {
  return (
    <>
      <ToastContainer />
      <Container fluid className="mt-4 mt-3">
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<UsersList/>} />
                <Route path="/create" element={<CreateUser/>} />
              </Routes>
          </BrowserRouter>
      </Container> 
    </>
          
  );
}

export default App;


