import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

export default class Header extends Component {
    render() {
        return (
            <Navbar brand='hackman' className='light-blue' right>
                <NavItem>Alerts</NavItem>
                <NavItem>Profile</NavItem>
                <NavItem>Sponsors</NavItem>
                <NavItem>Prizes</NavItem>
                <NavItem>Logout</NavItem>
            </Navbar>
        )
    }
}
