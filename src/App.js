import { Route , BrowserRouter , Routes  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import UsersList from "./components/UsersList";
import CreateUser from "./components/CreateUser";
import RetrieveUser from "./components/RetrieveUser";


const App = () => {
  return (
    <>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<UsersList/>} />
                <Route path="/create" element={<CreateUser/>} />
                <Route path="/get/:userId/" element={<RetrieveUser/>} />
              </Routes>
          </BrowserRouter>
    </>
          
  );
}

export default App;


