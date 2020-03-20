import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveyPageTwo extends Component {
    state = {
        newSurvey: {
            name: '',
            age: '',
            gender: '',
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
        this.props.dispatch({ type: 'INPUT_SURVEY_P_TWO', payload: this.state.newSurvey })
        console.log('in SurveyPageTwo adNewSurvey', this.state.newSurvey);
        this.setState({
            newSurvey: {
                name: '',
                age: '',
                gender: '',
            }
        });
        this.props.history.push('/surveyPageThree')
    }

    render() {
        return (
            <div>
                <p>SurveyPageTwo inputs go here</p>
                <form>
                    <label>Enter Name:</label>
                    <input type='text' placeholder="optional" value={this.state.newSurvey.name} 
                        onChange={(event) => this.handleNameChange(event, 'name')} />
                    <br></br>
                    <br></br>
                    <label>
                        Select Age:
                         <select value={this.state.value} onChange={(event) => this.handleNameChange(event, 'age')}>
                            <option value="0-17">0-17</option>
                            <option value="18-25">18-25</option>
                            <option value="26-39">26-30</option>
                            <option value="40-65">40-65</option>
                            <option value="65+">65+</option>
                        </select>
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        Select Gender:
                         <select value={this.state.value} onChange={(event) => this.handleNameChange(event, 'gender')}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <br></br>
                    <br></br>
                    <button onClick={this.addNewSurvey}>NEXT</button>
                </form>
            </div>
        )
    }
}

export default connect()(SurveyPageTwo);