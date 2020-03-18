import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveySummary extends Component {

    edit = () => {
        console.log('in edit');
        this.props.history.push('/surveyEdit')
    }
    deleteSurvey = () => {
        console.log('in deleteSurvey');
        this.props.history.push('/Home')
    }

    render() {
        return (
            <div>
                <p>SurveySummary go here</p>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.deleteSurvey}>Delete Survey</button>

            </div>
        )
    }
}

export default connect()(SurveySummary);