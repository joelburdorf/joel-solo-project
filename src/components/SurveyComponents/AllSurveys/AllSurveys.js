import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class AllSurveys extends Component {

    goToPageOne = () => {
        console.log('in goToPageOne');
        this.props.history.push('/surveyPageOne')
    }
    // currently only have one survey to offer
    render() {
        return (
            <div className="center">
                <h2><b>Choose a Survey</b></h2>
                <Button variant="contained" color="primary" size="small" onClick={this.goToPageOne}><b>Survey One</b></Button>
                <br></br>
                <br></br>
                <Button variant="contained" color="primary" size="small" ><b>Survey Two</b></Button>
                <br></br>
                <br></br>
                <Button variant="contained" color="primary" size="small" ><b>Survey Three</b></Button>

            </div>
        )
    }
}

export default connect()(AllSurveys);