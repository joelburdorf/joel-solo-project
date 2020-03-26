import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveyPageOne extends Component {
    // taking 3 inputs on this page, then pass them as props
    state = {
        newSurvey: {
            location: '',
            date: '',
            time: '',
        }
    }

    handleNameChange = (event, param) => {
        this.setState({
            newSurvey: {
                ...this.state.newSurvey,
                [param]: event.target.value,
            }
        });
    }
    // alert user to fill in all inputs
    // pass props with object to path /surveyPageTwo
    addNewSurvey = (event) => {
        event.preventDefault();
        if (this.state.newSurvey.location === '' || this.state.newSurvey.date === '' || this.state.newSurvey.time === '') {
                alert('Please make a selection for all three inputs');
            } else {
            this.props.history.push({
                pathname: '/surveyPageTwo',
                newSurvey: this.state.newSurvey 
            });
        }
    };

    render() {
        return (
            <div className="center">
                <p><b>Survey Page One</b></p>
              <form className="form">
                    <label><b>Location:</b></label>
                    <input type='text' placeholder="location" value={this.state.newSurvey.location} 
                    onChange={(event) => this.handleNameChange(event, 'location')} />
                    <br></br>
                    <br></br>             
                    <label><b>Date:</b></label>
                    <input type='date' placeholder="date" value={this.state.newSurvey.date} 
                    onChange={(event) => this.handleNameChange(event, 'date')} />
                    <br></br>
                    <br></br>
                    <label><b>Time:</b></label>
                    <input type='time' placeholder="time" value={this.state.newSurvey.time} 
                    onChange={(event) => this.handleNameChange(event, 'time')} />
                    <br></br>
                    <br></br>
                    <button onClick={this.addNewSurvey}><b>NEXT</b></button>
                </form>
            </div>
        )
    }
}

export default connect()(SurveyPageOne);