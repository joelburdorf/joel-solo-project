import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveyPageOne extends Component {

    state = {
        newSurvey: {
            location: '',
            date: '',
            time: '',
          
        }
    }

    handleNameChange = (event, param) => {
        // console.log('event happended in handleChange', event)
        this.setState({
            newSurvey: {
                ...this.state.newSurvey,
                [param]: event.target.value,
            }
        });
    }

    addNewSurvey = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'INPUT_SURVEY_P_ONE', payload: this.state.newSurvey })
        console.log('in adNewSurvey', this.state.newSurvey);
        
        this.setState({
            newSurvey: {
                location: '',
                date: '',
                time: '',
               
            }
        });
        this.props.history.push('/surveyPageTwo')
    }

    render() {
        return (
            <div>
                <p>SurveyPageOne inputs go here</p>
                
              <form>
                  <label>Enter Location</label>
                    <input type='text' placeholder="location" value={this.state.newSurvey.location} onChange={(event) => this.handleNameChange(event, 'location')} />
                    <br></br>
                    <br></br>
                    <label>Enter Time</label>
                    <input type='date' placeholder="date" value={this.state.newSurvey.date} onChange={(event) => this.handleNameChange(event, 'date')} />
                    <br></br>
                    <br></br>
                    <label>Enter Date</label>
                    <input type='time' placeholder="time" value={this.state.newSurvey.time} onChange={(event) => this.handleNameChange(event, 'time')} />
                    <br></br>
                    <br></br>
                    <button onClick={this.addNewSurvey}>NEXT</button>
                </form>
            </div>
        )
    }
}

export default connect()(SurveyPageOne);