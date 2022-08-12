
import { Button, Container, Nav, Navbar as NavbarBS} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { Basket2 } from "react-bootstrap-icons"

export const Navbar = () => {
    return (
        <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">                    
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                </Nav>
                <Button className="btn-secondary">
                    <Basket2 size={20}/>
                </Button>
            </Container>
        </NavbarBS>
    )
}