import React, { Component } from 'react';
import { connect } from 'react-redux';


class AdminData extends Component {

    admin = () => {
        this.props.history.push("/adminhome")
    }

    render() {
        return (
            <div>
                <p>Date goes here</p>
                <button onClick={this.admin}>Admin Page</button>
            </div>
        )
    }
}

export default connect()(AdminData);
