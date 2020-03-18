import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveyPageOne extends Component {

    goToPageTwo = () => {
        console.log('in goToPageTwo');
        this.props.history.push('/surveyPageTwo')
    }

    render() {
        return (
            <div>
                <p>SurveyPageOne inputs go here</p>
                <button onClick={this.goToPageTwo}>NEXT</button>

            </div>
        )
    }
}

export default connect()(SurveyPageOne);