import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveyPageThree extends Component {

    state = {
        newSurvey: {
            race: '',
            ethnicity: '',
            group: '',

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
        this.props.dispatch({ type: 'INPUT_SURVEY_P_THREE', payload: this.state.newSurvey })
        console.log('in SurveyPageThree adNewSurvey', this.state.newSurvey);

        this.setState({
            newSurvey: {
                race: '',
                ethnicity: '',
                group: '',

            }
        });
        this.props.history.push('/surveySummary')
    }

 

    render() {
        return (
            <div>
                <p>SurveyPageThree inputs go here</p>

                <form>
                    <label>
                        Select Race:
                         <select value={this.state.value} onChange={(event) => this.handleNameChange(event, 'race')}>
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
                            <option value="Hispanic/Latino">Hispanic/Latino</option>
                            <option value="Non-Hispanic/Non-Latino">Non-Hispanic/Non-Latino</option>
                        </select>
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        Select Group:
                         <select value={this.state.value} onChange={(event) => this.handleNameChange(event, 'group')}>
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

