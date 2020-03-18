import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveyPageThree extends Component {

    render() {
        return (
            <div>
                <p>SurveyPageThree inputs go here</p>

            </div>
        )
    }
}

export default connect()(SurveyPageThree);