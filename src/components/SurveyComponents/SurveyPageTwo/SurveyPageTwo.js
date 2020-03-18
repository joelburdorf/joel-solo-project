import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveyPageTwo extends Component {

    render() {
        return (
            <div>
                <p>SurveyPageTwo inputs go here</p>

            </div>
        )
    }
}

export default connect()(SurveyPageTwo);