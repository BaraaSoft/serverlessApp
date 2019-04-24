import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseNavMenu from './common/BaseNavMenu';





class NavMenu extends Component {

    render() {
        return (
            <div>
                <BaseNavMenu />
            </div>
        );
    }
}

export default NavMenu;