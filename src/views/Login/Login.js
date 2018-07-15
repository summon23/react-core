'use strict';

import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import { connect } from 'react-redux';
import { authLogin } from '../../action/authAction';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import {
    history
} from '../../helper/history';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("[state]", this.state);
        const data = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.onAuthUser(data)
            .then((res) => {
                console.log("res", res);
                if(res.response.status === true) {
                    console.log("redirectiiinggg...");
                    history.push('#/product/list', { some: "state" });
                    // return (
                    //     <Redirect to="/product/list"/>
                    // )
                }
            })
            .catch((err) => {
               console.log("err", err);
            });
    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-user"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="text" placeholder="Username" name="username" onChange={(e) => this.setState({username: e.target.value})}/>
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-lock"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="password" placeholder="Password" name="password" onChange={(e) => this.setState({password: e.target.value})}/>
                                        </InputGroup>
                                        <Row>
                                            <Col xs="6">
                                                <Button color="primary" className="px-4" onClick={this.handleSubmit}>Login</Button>
                                            </Col>
                                            <Col xs="6" className="text-right">
                                                <Button color="link" className="px-0">Forgot password?</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                                    <CardBody className="text-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.</p>
                                            <Button color="primary" className="mt-3" active>Register Now!</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        userInfo: state.authState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAuthUser: (data) => dispatch(authLogin(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
