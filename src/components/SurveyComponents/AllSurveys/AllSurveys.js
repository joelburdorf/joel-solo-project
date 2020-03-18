import React, { Component } from 'react';
import { connect } from 'react-redux';


class AllSurveys extends Component {

    goToPageOne = () => {
        console.log('in goToPageOne');
        this.props.history.push('/surveyPageOne')
    }

    render() {
        return (
            <div>
                <p>Choose a Survey</p>
                <button onClick={this.goToPageOne}>Survey One</button>

            </div>
        )
    }
}

export default connect()(AllSurveys);