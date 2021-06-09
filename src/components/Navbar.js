import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';

export default class Navbar extends Component {
    render() {
        return (
            <div >
                <Menu className="ui tpo inverted attached menu">
                    <span className="item gray">TytusDS</span>
                </Menu>
            </div>
        )
    }
}
