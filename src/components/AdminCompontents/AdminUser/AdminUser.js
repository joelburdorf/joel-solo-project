import React, { Component } from 'react';
import { connect } from 'react-redux';


class AdminUser extends Component {

    render() {
        return (
            <div>
                <p>User data goes here</p>

            </div>
        )
    }
}

export default connect()(AdminUser);