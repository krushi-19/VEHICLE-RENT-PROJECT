import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from 'react-router-dom'; 
import { AboutUs_Route, Contactus_Route, ROUTE, RegistrationForm_Route, } from "../router/AppRouter";

export function NavigationBar() {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        // localStorage.removeItem('token'); // Remove the token from local storage
        navigate('/');
    };

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to={ROUTE.BASE}>
                    <Navbar.Brand>Vehicle Renting</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to={ROUTE.BASE}>
                            <Nav.Link style={{ fontSize: '25px' }}>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={RegistrationForm_Route}>
                            <Nav.Link style={{ fontSize: '50px' }}>Register</Nav.Link>
                        </LinkContainer>
                       
                        <LinkContainer to={AboutUs_Route}>
                            <Nav.Link style={{ fontSize: '50px' }}>About Us</Nav.Link>
                        </LinkContainer>
                       
                        <LinkContainer to={Contactus_Route}>
                            <Nav.Link style={{ fontSize: '25px' }}>Contact Us</Nav.Link>
                        </LinkContainer>
                        
                       
                    </Nav>
                    <Nav className="ml-auto">
                    <Nav.Link  href="http://localhost:3000/users/:id/edit" style={{ fontWeight: 'bold' }}>Users</Nav.Link>
                        <Nav.Link href="http://localhost:3000/login" style={{ fontWeight: 'bold' }}>Login</Nav.Link>
                       
                           
                      
                        <Nav.Link onClick={handleLogout} href="/" style={{ fontWeight: 'bold' }}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}