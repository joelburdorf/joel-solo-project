import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveyEdit extends Component {

    editThis = () => {
        console.log('in editThis');
        this.props.history.push('/surveySummary')
    }

    render() {
        return (
            <div>
                <p>Edit this</p>
                <button onClick={this.editThis}>Save</button>

            </div>
        )
    }
}

export default connect()(SurveyEdit);