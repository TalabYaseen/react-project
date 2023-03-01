
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import Profile from './pages/profile';
import EditProfile from './pages/EditProfile';
import Chat from './pages/Chat';
import Groups from './pages/groups';
import ProfileFrinds from './pages/ProfileFrinds';
import SingleGroup from './pages/singleGroup';
import FindFriends from './pages/FindFriends';
import Elseprofile from './pages/Elseprofile';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';


function App() {
  
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/Register" element={<Register/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/profile" element={<Profile/>}/>
            <Route  path="/Elseprofile/:id" element={<Elseprofile/>}/>
            <Route exact path="/Chat" element={<Chat/>}/>
            <Route exact path="/Groups" element={<Groups/>}/>
            <Route exact path="/SingleGroup" element={<SingleGroup/>}/>
            <Route exact path="/findfriends" element={<FindFriends/>}/>
            <Route exact path="/EditProfile" element={<EditProfile/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
