import React from 'react';
import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HostForm from './HostForm';


function Navigationbar() {
  return (
    <Router>
      <div>
        <Navbar expand="lg" className="custom-navbar">
          <Navbar.Brand>
            <Nav.Link as={Link} to={'/'} className="text-light px-3">PARTY PICASSO</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to={'/chat'} className="text-light px-3">Group Chat</Nav.Link>
              <Nav.Link as={Link} to={'/profile'} className="text-light px-3">Profile</Nav.Link>
              <Nav.Link as={Link} to={'/HostForm'} className="text-light px-3">HostForm</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/HostForm' element={<HostForm />} />
        </Routes>
      </div>
    </Router>
  );
}
function Home(){
  return <p>I'm home</p>
}
function Chat() {
  return <p>Chatting</p>
}
function Profile() {
  return <p>My Profile</p>
}


export default Navigationbar