import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";



function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={< Login />}></Route>
    <Route path='/' element={< Register />}></Route>
    <Route path='/home' element={< Home />}></Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;