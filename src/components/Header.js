import React from 'react';
import '../index.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="brand">
        Joe's Coffee Shop
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Inventory" id="nav-dropdown">
          <NavDropdown.Item href="/inventory">View Inventory</NavDropdown.Item>
          <NavDropdown.Item href="/add">Add Inventory</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/sales">Sales Report</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/sales"><strong>***This Navbar is just for show and doesnt do anything***</strong></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

export default Header;

