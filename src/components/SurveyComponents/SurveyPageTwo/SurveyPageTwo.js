import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveyPageTwo extends Component {

    goToPageThree = () => {
        console.log('in goToPageThree');
        this.props.history.push('/surveyPageThree')
    }

    render() {
        return (
            <div>
                <p>SurveyPageTwo inputs go here</p>
                <button onClick={this.goToPageThree}>NEXT</button>

            </div>
        )
    }
}

export default connect()(SurveyPageTwo);