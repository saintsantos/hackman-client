import React, { Component } from 'react';
import { Card } from 'react-materialize';

export default class TeamInfo extends Component {
    render() {
        return (
            <Card title='Team info card'>
                <h5>Team Name: </h5>
                <p>The team name goes here</p>
                <h5>Project Description: </h5>
                <p>The description of the project goes here</p>
                <h5>Status: </h5>
                <p>The status of the team goes here</p>
                <h5>Location: </h5>
                <p>The location of the team goes here</p>
            </Card>
        )
    }
}
