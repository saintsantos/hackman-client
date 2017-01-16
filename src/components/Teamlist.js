import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

export default class TeamList extends Component {
    render() {
        return (
            <Collapsible popout>
                <CollapsibleItem header='First' icon='filter_drama'>
                    This is team 1
                </CollapsibleItem>
                <CollapsibleItem header='Secod' icon='palce'>
                    This is team 2
                </CollapsibleItem>
                <CollapsibleItem header='Third' icon='whatshot'>
                    This is team 3
                </CollapsibleItem>
            </Collapsible>
        )
    }
}
