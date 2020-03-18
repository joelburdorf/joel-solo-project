import React, { Component } from 'react';
import { connect } from 'react-redux';


class AdminData extends Component {

    render() {
        return (
            <div>
                <p>Date goes here</p>

            </div>
        )
    }
}

export default connect()(AdminData);
