import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const AuthForm = ({
  registrate,
  handleSubmit,
  email,
  handleInputChange,
  password,
  children
}) => {
  return (
    <Form onSubmit={handleSubmit} className="h-100 w-100" method="POST">
      <div className="row align-items-center">
        <div className="col-xs-4 mx-auto d-flex flex-column justify-content-center align-items-center">
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={handleInputChange}
            />
          </Form.Group>
          {children}
          <Button type="submit">
            {registrate === "true" ? "Registrate" : "Login"} in da house
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default AuthForm;
