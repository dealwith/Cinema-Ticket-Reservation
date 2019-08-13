import React from "react";
import AuthForm from "./authForm";
import RegistrateForm from "./registrateForm";
import { history } from "../../index";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { LOGIN_API, SIGNUP_API } from "../../constants/constants";

// export class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   handleInputChange = e => {
//     const { name, value } = this.state

//     this.setState({
//       [name]: value
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     const { email, password } = this.state;

//     const user = {
//       email,
//       password
//     };

//     axios
//       .post("http://localhost:3000/login", user)
//       .then(res => console.log(res))
//       // .then((res) => localStorage.setItem())
//       .catch(err => console.log(err));

//     history.push("/");
//   };
//   render() {
//     return (
//       <Card className="text-center">
//         <Card.Header>
//           <Card.Title
//             id="contained-Card-title-vcenter"
//             className="Card-auth__title"
//           >
//             Login
//           </Card.Title>
//         </Card.Header>
//         <Card.Body>
//         {this.props.children}
//         </Card.Body>
//         <Card.Footer>
//           <Link
//             to="/registratePage"
//             className="stretched-link position-relative mr-3"
//           >
//             Don't have an account?
//           </Link>
//           <Link to="/">
//             <Button>Close</Button>
//           </Link>
//         </Card.Footer>
//       </Card>
//     );
//   }
// }

const sharedAuthLogic = (InnerComoponent, api) =>
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        email: "",
        password: ""
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

      const { email, password } = this.state;
      const user = {
        email,
        password
      };

      axios
        .post(api, user)
        .catch(err => console.log(err));
        
      history.push("/");
    };

    render() {
      return (
        <InnerComoponent {...this.props} api={api}>
          {/* <Card className="text-center">
            <Card.Header>
              <Card.Title
                id="contained-Card-title-vcenter"
                className="Card-auth__title"
              >
                Login
              </Card.Title>
            </Card.Header>
            <Card.Body>{this.props.children}</Card.Body>
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
          </Card> */}
        </InnerComoponent>
      );
    }
  };

export const Login = sharedAuthLogic(
  <AuthForm
    handleInputChange={this.handleInputChange}
    email={this.state.email}
    password={this.state.password}
    handleSubmit={this.handleSubmit}
  />,
  LOGIN_API
);
export const Registrate = sharedAuthLogic(<RegistrateForm />, SIGNUP_API);
