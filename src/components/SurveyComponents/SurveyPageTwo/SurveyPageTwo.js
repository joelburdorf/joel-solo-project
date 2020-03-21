import React, { Component } from 'react';
import { connect } from 'react-redux';

class SurveyPageTwo extends Component {
    state = {
        newSurvey: {
            location: '',
            date: '',
            time: '',
            name: '',
            age: '',
            gender: '',
        }
    }

    componentDidMount = () => {
        this.props.location.newSurvey &&
        this.setState({
            newSurvey:{
                ...this.state.newSurvey,
                location: this.props.location.newSurvey.location,
                date: this.props.location.newSurvey.date,
                time: this.props.location.newSurvey.time,
            }
        })
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

    addNewSurvey = (event) => {
        event.preventDefault();
        this.props.history.push({
            pathname: '/surveyPageThree',
            newSurvey: this.state.newSurvey
        });
    };

    render() {
        return (
            <div>
                <p><b>Survey Page Two</b></p>
                <form>
                    <label>Enter Name:</label>
                    <input type='text' placeholder="optional" value={this.state.newSurvey.name} 
                        onChange={(event) => this.handleNameChange(event, 'name')} />
                    <br></br>
                    <br></br>
                    <label>
                        Select Age:
                         <select value={this.state.value} onChange={(event) => this.handleNameChange(event, 'age')}>
                            <option>Choose Selection</option>
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
                            <option>Choose Selection</option>
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