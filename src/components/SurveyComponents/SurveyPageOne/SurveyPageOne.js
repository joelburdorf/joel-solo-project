import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveyPageOne extends Component {

    render() {
        return (
            <div>
                <p>SurveyPageOne inputs go here</p>

            </div>
        )
    }
}

export default connect()(SurveyPageOne);