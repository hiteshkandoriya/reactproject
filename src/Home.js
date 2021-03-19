import React from 'react';
import {  Form } from 'react-bootstrap';
import { useState } from 'react';
import { Button } from 'antd'
function Home() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function user(){
        let data = {name,email,password}
        console.warn("called",data)
    }
    return <div>
        <h1>Registration Form</h1>
        <Form>
        <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
        <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e)=>setName(e.target.value)} type="name" placeholder="Enter name" />
            </Form.Group>
            </div></div>
        <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>
            </div></div>
        <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            </div></div>
        <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
            <Button onClick={()=>this.login()} variant="primary" type="submit">
                Submit
            </Button>
            </div></div>
            <div class="row"></div>
        </Form>
    </div>
}

export default Home;