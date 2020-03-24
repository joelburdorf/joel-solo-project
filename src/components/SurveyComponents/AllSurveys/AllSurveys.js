import React, { Component } from 'react';
import { connect } from 'react-redux';


class AllSurveys extends Component {

    goToPageOne = () => {
        console.log('in goToPageOne');
        this.props.history.push('/surveyPageOne')
    }

    render() {
        return (
            <div className="center">
                <p><b>Choose a Survey</b></p>
                <button onClick={this.goToPageOne}><b>Survey One</b></button>
                <br></br>
                <button><b>Survey Two</b></button>
                <br></br>
                <button><b>Survey Three</b></button>

            </div>
        )
    }
}

export default connect()(AllSurveys);