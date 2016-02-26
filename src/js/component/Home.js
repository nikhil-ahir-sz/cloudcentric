'use strict';

import React, {Component} from 'react';
import {RouteHandler} from 'react-router';
import {Grid, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import Menu from './Menu';

export default class Home extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Menu logo='img/logo.png'/>
                    {this.props.children}
                    <Jumbotron>
                        <h1>Load Image here...</h1>
                    </Jumbotron>
                </Row>
            </Grid>
        );
    }
}