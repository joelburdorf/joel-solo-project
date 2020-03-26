import React, { Component } from 'react';
import { connect } from 'react-redux';

class SurveyPageThree extends Component {
     // taking 3 addition inputs on this page, then pass them along with
     // the 3 imputs from surveyPageOne and 3 from surveyPageTwo and 
     // then sending all 9 items in state to sagas to be added to redux
     // and POST to the DB as a new Survey, RETURNING the ID of that 
     // survey to be used on the survey summary page

    state = {
        newSurvey: {
            location: '',
            date: '',
            time: '',
            name: '',
            age: '',
            gender: '',
            race: '',
            ethnicity: '',
            group: '',
        }
    }
    componentDidMount = () => {
        this.props.location.newSurvey &&
            this.setState({
                newSurvey: {
                    ...this.state.newSurvey,
                    location: this.props.location.newSurvey.location,
                    date: this.props.location.newSurvey.date,
                    time: this.props.location.newSurvey.time,
                    name: this.props.location.newSurvey.name,
                    age: this.props.location.newSurvey.age,
                    gender: this.props.location.newSurvey.gender,
                }
            })
    }

    handleNameChange = (event, param) => {
        this.setState({
            newSurvey: {
                ...this.state.newSurvey,
                [param]: event.target.value,
            }
        });
    }

    addNewSurvey = event => {
        event.preventDefault();
        if (this.state.newSurvey.race === '' || this.state.newSurvey.ethnicity === '' || this.state.newSurvey.group === '') {
                alert('Please make a selection for all three inputs');
            } else {
                this.props.dispatch({ type: 'INPUT_SURVEY', payload: this.state.newSurvey })
                this.setState({
                    newSurvey: this.state.newSurvey,
            });
            this.props.history.push('/surveySummary');
        }
    }

    render() {
        return (
            <div className="center">
                <p><b>Survey Page Three</b></p>
                <form className="form">
                    <label>
                       <b>Race:</b>
                         <select value={this.state.value} onChange={(event) => this.handleNameChange(event, 'race')}>
                            <option>Choose Selection</option>
                            <option value="American Indian">American Indian</option>
                            <option value="African">African</option>
                            <option value="African American">African American</option>
                            <option value="Asian">Asian</option>
                            <option value="Native Hawaiian">Native Hawaiian</option>
                            <option value="White/Caucasian">White/Caucasian</option>
                            <option value="Unable to determine">Unable to determine</option>
                        </select>
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        <b>Ethnicity:</b>
                         <select value={this.state.value} onChange={(event) => this.handleNameChange(event, 'ethnicity')}>
                            <option>Choose Selection</option>
                            <option value="Hispanic/Latino">Hispanic/Latino</option>
                            <option value="Non-Hispanic/Non-Latino">Non-Hispanic/Non-Latino</option>
                        </select>
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        <b>Group:</b>
                         <select value={this.state.value} onChange={(event) => this.handleNameChange(event, 'group')}>
                            <option>Choose Selection</option>
                            <option value="Individual">Individual</option>
                            <option value="Couple">Couple</option>
                            <option value="Family">Family</option>
                            <option value="Unable to determine">Unable to determine</option>
                        </select>
                    </label>
                    <br></br>
                    <br></br>
                    <button onClick={this.addNewSurvey}><b>Submit Survey</b></button>
                </form>
            </div>
        )
    }
}

export default connect()(SurveyPageThree);


