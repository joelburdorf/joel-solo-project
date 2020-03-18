import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveyPageThree extends Component {

    goToSurveySummary = () => {
        console.log('in goToSurveySummary');
        this.props.history.push('/surveySummary')
    }

    render() {
        return (
            <div>
                <p>SurveyPageThree inputs go here</p>
                <button onClick={this.goToSurveySummary}>SUBMIT</button>

            </div>
        )
    }
}

export default connect()(SurveyPageThree);

