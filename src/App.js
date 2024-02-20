import { Route , BrowserRouter , Routes  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import UsersList from "./pages/user/UsersList.jsx";
import CreateUser from "./pages/user/CreateUser.jsx";
import RetrieveUser from "./pages/user/RetrieveUser.jsx";
import EditUser from "./pages/user/EditUser.jsx";
import RemoveUser from "./pages/user/RemoveUser.jsx";
import Contact from "./pages/static/Contact.jsx";
import About from "./pages/static/AboutUs.jsx";


const App = () => {
  return (
    <>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<UsersList/>} />
                <Route path="/create" element={<CreateUser/>} />
                <Route path="/get/:userId/" element={<RetrieveUser/>} />
                <Route path="/update/:userId/" element={<EditUser/>} />
                <Route path="/delete/:userId/" element={<RemoveUser/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/about" element={<About/>} />
              </Routes>
          </BrowserRouter>
    </>
          
  );
}

export default App;


