import React from "react";
import Search from "../search/search";
import { history } from "../../helpers/history";
import { Navbar, Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Header = props => {
  const logout = e => {
    e.preventDefault();
    
  }
  if (
    history.location.pathname == "/loginPage" ||
    history.location.pathname == "/registratePage" ||
    history.location.pathname.startsWith("/admin")
  ) {
    return null;
  } else {
    const { user } = props;
    return (
      <header className="mb-5">
        <Navbar expand="xl" variant="dark" bg="dark" className="navbar">
          <Container>
            <Row className="justify-content-xl-between w-100">
              <Col>
                <Navbar.Brand href="/">Cinema-Ticket-Reservarion</Navbar.Brand>
              </Col>
              <Col className="d-flex align-items-start">
                <div inline="true">
                  {user ? (
                    <span className="d-flex text-light">
                      hello {user.email}
                      <Button onClick={ logout }>Logout</Button>
                    </span>
                  ) : (
                    <Link to="/loginPage">
                      <Button
                        variant="primary"
                        className="navbar-item navbar-item_login-button mr-3"
                      >
                        Login/Sign up
                      </Button>
                    </Link>
                  )}
                </div>
                <Search />
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>
    );
  }
};

Header.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = state => {
  const { authentication } = state;
  const { user } = authentication;
  return { user };
};

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };
