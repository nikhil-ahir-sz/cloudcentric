/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila on 26/02/16.
 */

'use strict';

import React, {
    Component,
    View} from 'react';

import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';

export default class Menu extends Component {
    render() {
        let brandImg = (<img className='logo' src={this.props.logo} alt="" />);

        return (
            <Navbar inverse fixedTop fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        {brandImg}
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Product</NavItem>
                    <NavItem eventKey={2} href="#">Contact</NavItem>
                    <NavItem eventKey={3} href="#">Login</NavItem>
                </Nav>
            </Navbar>
        );
    }
}