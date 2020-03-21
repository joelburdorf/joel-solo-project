import React, { Component } from 'react';
import { connect } from 'react-redux';

class SurveyPageThree extends Component {

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
        this.props.dispatch({ type: 'INPUT_SURVEY', payload: this.state.newSurvey })
        console.log('in SurveyPageThree adNewSurvey', this.state.newSurvey);
        this.setState({
            newSurvey: this.state.newSurvey,
        });
        this.props.history.push('/surveySummary')
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Select Race:
                         <select value={this.state.value} onChange={(event) => this.handleNameChange(event, 'race')}>
                            <option>Choose Selection</option>
                            <option value="American Indian">American Indian</option>
                            <option value="Afican">Afican</option>
                            <option value="Afican American">Afican American</option>
                            <option value="Asian">Asian</option>
                            <option value="Native Hawaiian">Native Hawaiian</option>
                            <option value="White/Caucasian">White/Caucasian</option>
                            <option value="Unable to determine">Unable to determine</option>
                        </select>
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        Select Ethnicity:
                         <select value={this.state.value} onChange={(event) => this.handleNameChange(event, 'ethnicity')}>
                            <option>Choose Selection</option>
                            <option value="Hispanic/Latino">Hispanic/Latino</option>
                            <option value="Non-Hispanic/Non-Latino">Non-Hispanic/Non-Latino</option>
                        </select>
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        Select Group:
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
                    <button onClick={this.addNewSurvey}>Submit Survey</button>
                </form>
            </div>
        )
    }
}

export default connect()(SurveyPageThree);


