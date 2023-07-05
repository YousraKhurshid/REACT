import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='navbar'>
        <Link id='logo' style={{ fontFamily: 'PT serif', fontWeight: 'bold', fontSize : '25px' }} className = 'nav-link' to="/">Accerories & Fashion Dame</Link>
        <Link id='logopic' className = 'nav-link border border-light rounded-circle img-fluid' to="/"> <img style={{width:'7vw', height:'15%'}} className="picture rounded-circle" src="src\images\Monogram.jpg" alt="Your picture" /> </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
             <Link className='nav-link' to="/">Home </Link>
             <Link className='nav-link' to="/products"> Products</Link>
             <Link className='ms-4 btn btn-success' to="/login"> Login </Link>
             <Link className='ms-4 btn btn-dark' to="/signup"> Signup </Link>
             
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
