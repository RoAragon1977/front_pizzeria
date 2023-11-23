import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

import { NavLink } from 'react-router-dom';

const CustonNavbar = () => {
  return (
    <>
    <Navbar bg="primary" data-bs-theme='dark'>
      <Container className='justify-content-center'>
        <Nav>
          <NavLink to={'/'} className="nav-link mr-3">Inicio</NavLink>
          <NavLink to={'/administation'} className="nav-link mr-3">Administración</NavLink>
          <NavLink to={'/signup'} className="nav-link mr-3">Registrate</NavLink>
          <NavLink to={'/aboutUs'} className="nav-link mr-3">Nosotros</NavLink>
        </Nav>
      </Container>
    </Navbar>
  </>
  )
}

export default CustonNavbar