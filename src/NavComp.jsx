import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './navcomp.css';
import { GiHamburgerMenu } from "react-icons/gi";

function NavComp() {
  const location = useLocation(); // Get the current location

  // Check if the current location is the homepage
  const isHomePage = location.pathname === '/';

  return (
    <>
    <Navbar collapseOnSelect expand="lg" className={isHomePage ? 'home-navbar' : ''}>
      <Container>
        <Navbar.Brand className='navbrand text-reset logo'>
        Recipe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className=''><GiHamburgerMenu className='navbar-toggle-icon bg-light p-1 rounded' /></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className='navlink mx-3 text-reset'>Home</NavLink>
            <NavLink to='/favourites' className='navlink mx-3 text-reset'>Favourites</NavLink>
            <NavLink to='/categories' className='navlink mx-3 text-reset'>Category</NavLink>
            <NavLink to='/search' className='navlink mx-3 text-reset'>Search</NavLink>
          </Nav>
          <Nav className='ms-auto'>
            <NavLink to='/login' className='navlink text-reset'>Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  )
}

export default NavComp;
