import React from "react";
import AuthForm from "./authForm";
import RegistrateForm from "./registrateForm";
import { history } from "../../index";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LOGIN_API, SIGNUP_API } from "../../constants/constants";
import axios from "axios";
import { userActions } from "../../actions/userActions";
import { connect } from 'react-redux';


class Login extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    // this.props.dispatch(userActions.logout());

    this.state = {
      email: "",
      password: "",
      sumbitted: false
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props

    if (email && password) {
      dispatch(userActions.login(email, password))
    }

    history.push("/");
  }

  
componentDidMount() {
  this.props.dispatch(userActions.logout());
}

  render() {
    const { loggedIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <Card className="text-center">
        <Card.Header>
          <Card.Title
            id="contained-Card-title-vcenter"
            className="Card-auth__title"
          >
            Login
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <AuthForm
            handleInputChange={this.handleInputChange}
            email={this.state.email}
            password={this.state.password}
            handleSubmit={this.handleSubmit}
          />
        </Card.Body>
        <Card.Footer>
          <Link
            to="/registratePage"
            className="stretched-link position-relative mr-3"
          >
            Don't have an account?
          </Link>
          <Link to="/">
            <Button>Close</Button>
          </Link>
        </Card.Footer>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { loggingIn } = state.authentication;
  return { loggingIn };
};


const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login };


//////////////////////////////////////////
class Registrate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      repeatPassword: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password, repeatPassword } = this.state;

    const user = {
      email,
      password
    };

    // if(password === repeatPassword) {
    axios
      .post(SIGNUP_API, user)
      .then(res => console.log(res))
      // .then((res) => localStorage.setItem())
      .catch(err => console.log(err));
    // }

    this.setState({
      email: "",
      password: ""
    });
    history.push("/");
  };
  render() {
    return (
      <Card>
        <Card.Header className="Card-auth__header">
          <Card.Title
            id="contained-Card-title-vcenter"
            className="Card-auth__title"
          >
            Registrate
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <RegistrateForm
            handleInputChange={this.handleInputChange}
            email={this.state.email}
            password={this.state.password}
            repeatPassword={this.state.reapeatPassword}
            handleSubmit={this.handleSubmit}
          />
        </Card.Body>
        <Card.Footer>
          <Link
            to="/loginPage"
            className="stretched-link position-relative mr-3"
          >
            Back to login
          </Link>
          <Link to="/">
            <Button>Close</Button>
          </Link>
        </Card.Footer>
      </Card>
    );
  }
}
