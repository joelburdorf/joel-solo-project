import React, { Component } from 'react';
import { connect } from 'react-redux';

class SurveyPageTwo extends Component {
    // taking 3 addition inputs on this page, then pass them along with
    // the 3 imputs from surveyPageOne to SurveyPageThree
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
        this.setState({
            newSurvey: {
                ...this.state.newSurvey,
                [param]: event.target.value,
            }
        });
    }
    // alert user to fill in all inputs
    // pass props with object to path /surveyPageThree
    addNewSurvey = (event) => {
        event.preventDefault();
        if (this.state.newSurvey.name === '' || this.state.newSurvey.age === '' || this.state.newSurvey.gender === '') {
                alert('Please make a selection for all three inputs');
            } else {
            this.props.history.push({
                pathname: '/surveyPageThree',
                newSurvey: this.state.newSurvey
            });
        }
    };

    render() {
        return (
            <div className="center">
                <p><b>Survey Page Two</b></p>
                <form className="form">
                    <label><b>Name:</b></label>
                    <input type='text' placeholder="optional" value={this.state.newSurvey.name} 
                        onChange={(event) => this.handleNameChange(event, 'name')} />
                    <br></br>
                    <br></br>
                    <label>
                        <b>Age:</b>
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
                        <b>Gender:</b>
                         <select value={this.state.value} onChange={(event) => this.handleNameChange(event, 'gender')}>
                            <option>Choose Selection</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <br></br>
                    <br></br>
                    <button onClick={this.addNewSurvey}><b>NEXT</b></button>
                </form>
            </div>
        )
    }
}

export default connect()(SurveyPageTwo);