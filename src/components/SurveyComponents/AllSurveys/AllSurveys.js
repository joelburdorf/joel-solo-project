import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class AllSurveys extends Component {

    goToPageOne = () => {
        this.props.history.push('/surveyPageOne')
    }
    // currently only have one survey to offer
    render() {
        return (
            <div className="center">
                <h1><b>Choose a Survey</b></h1>
                <br></br>
                <Button variant="contained" color="primary" size="small" onClick={this.goToPageOne}><b>Observation</b></Button>
                <br></br>
                <br></br>
                <Button variant="contained" color="primary" size="small" ><b>Children</b></Button>
                <br></br>
                <br></br>
                <Button variant="contained" color="primary" size="small" ><b>Veteran Register</b></Button>
                <br></br>
                <br></br>
                <Button variant="contained" color="primary" size="small" ><b>Transit</b></Button>

            </div>
        )
    }
}

export default connect()(AllSurveys);