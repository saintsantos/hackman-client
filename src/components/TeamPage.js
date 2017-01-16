import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import TeamInfo from './TeamInfo.js';
import Alerts from './Alerts.js';
import Logo from './Logo.js';
import Header from './Navbar.js';
import TeamList from './Teamlist.js';

export default class TeamPage extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Row>
                    <Col s={3} offset='1'>
                        <Logo></Logo>
                    </Col>
                    <Col s={7}>
                        <Alerts></Alerts>
                    </Col>
                </Row>
                <Row>
                    <Col s={4}>
                        <TeamList></TeamList>
                    </Col>
                    <Col s={7}>
                        <TeamInfo></TeamInfo>
                    </Col>
                </Row>
            </div>
        )
    }
}
