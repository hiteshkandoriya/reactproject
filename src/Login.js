import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'antd'
function Login() {
    return <div>
        <br></br>
        <h1>Login Form</h1>
        <Form>
        <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            </div></div>
        <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            </div></div>
        <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            </div></div>
        <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </div></div>
        </Form>
    </div>
}

export default Login;