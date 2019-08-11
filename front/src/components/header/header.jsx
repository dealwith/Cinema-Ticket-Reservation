import React from "react";
import Search from "../search/search";
import { history } from "../../helpers/history";
import { Navbar, Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { userActions } from "../../actions/userActions";

const Header = props => {
  useEffect(() => {
    this.props.dispatch(userActions.getAll());
  }, []);

  const { user, users } = this.props;

  if (
    history.location.pathname == "/loginPage" ||
    history.location.pathname == "/registratePage" ||
    history.location.pathname.startsWith("/admin")
  ) {
    return null;
  } else {
    return (
      <header className="mb-5">
        <Navbar expand="xl" variant="dark" bg="dark" className="navbar">
          <Container>
            <Row className="justify-content-xl-between w-100">
              <Col>
                <Navbar.Brand href="/">Cinema-Ticket-Reservarion</Navbar.Brand>
              </Col>
              <Col className="d-flex align-items-start">
                <div inline>
                  <div className='d-flex flex-column'> 
                    <h1>Hi {user.email}</h1>
                    <p>You're logged in with React & JWT!!</p>
                    <h3>Users from secure api end point:</h3>
                    {users.loading && <em>Loading users...</em>}
                    {users.error && <span className='text-danger'>ERROR: {users.error}</span>}
                    {users.items &&
                      <ul>
                        {users.items.map((user, index) =>
                          <li key={user.id}>
                            {user.id + '' + user.email}
                          </li>
                        )}
                      </ul>
                    }
                  </div>
                  <Link to="/loginPage">
                    <Button
                      variant="primary"
                      className="navbar-item navbar-item_login-button mr-3"
                    >
                      Login/Sign up
                    </Button>
                  </Link>
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

const mapStateToProps = (state) => {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };