import {Container, Row, Col, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import React from "react";
import US from 'country-flag-icons/react/3x2/US';
import PL from 'country-flag-icons/react/3x2/PL';
import ES from 'country-flag-icons/react/3x2/ES';

interface NavbarProps {
    lng: string;
    i18n: any;
}

const Navbar = (props: NavbarProps) => {
    const handleLanguageChange = (language: string) => {
        props.i18n.changeLanguage(language);
    };

    return (
        <>
            <NavbarBs className="bg-dark text-light">
                <Container>
                    <Row className="w-100 align-items-center">
                        <Col style={{fontSize: '13px'}}>
                            Browser Language: {props.lng}
                        </Col>
                        <Col>
                            <US title="United States"
                                onClick={() => handleLanguageChange("en")}
                                style={{width: '30px', height: '30px', cursor: "pointer"}}
                                className="me-1"/>
                            <PL title="Poland"
                                onClick={() => handleLanguageChange("pl")}
                                style={{width: '30px', height: '30px', cursor: "pointer"}}
                                className="me-1"/>
                            <ES title="United States"
                                onClick={() => handleLanguageChange("es")}
                                style={{width: '30px', height: '30px', cursor: "pointer"}}
                            />
                        </Col>
                    </Row>
                </Container>
            </NavbarBs>
            <NavbarBs className="bg-white shadow-lg mb-3">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                        <Nav.Link to="/todo" as={NavLink}>To Do</Nav.Link>
                    </Nav>
                </Container>
            </NavbarBs>
        </>

    )
};


export default Navbar;
