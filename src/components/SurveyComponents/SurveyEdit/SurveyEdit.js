import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveyEdit extends Component {

    // getLastSurvey = () => {
    //     this.props.reduxState.surveyOne.surveyOneId &&
    //         this.props.dispatch({
    //             type: 'FETCH_LAST_SURVEY',
    //             payload: this.props.reduxState.surveyOne.surveyOneId
    //         });
    // }

    editItem = () => {
        console.log('in editItem');
        
    }

    complete = () => {
        this.props.history.push("/allSurveys")
    }

    render() {
        return (
            <div>
                <p><b>Survey Edit</b></p>
                <ul>
                    {this.props.reduxState.surveyOne.surveyOneLastSurvey.map(info => (<li key={info.id}>
                        <label><b>Location:</b></label> {info.location} <button onClick={this.editItem}>Edit</button><br /><br />
                        <label><b>Date</b></label>  {info.date} <button onClick={this.editItem}>Edit</button><br /><br />
                        <label><b>Name:</b></label>  {info.name}<button onClick={this.editItem}>Edit</button> <br /><br />
                        <label><b>Age:</b></label>  {info.age} <button onClick={this.editItem}>Edit</button><br /><br />
                        <label><b>Gender:</b></label>  {info.gender}<button onClick={this.editItem}>Edit</button><br /><br />
                        <label><b>Race:</b></label>  {info.race}<button onClick={this.editItem}>Edit</button><br /><br />
                        <label><b>Ethnicity:</b></label>  {info.ethnicity}<button onClick={this.editItem}>Edit</button><br /><br />
                        <label><b>Group:</b></label>  {info.group}<button onClick={this.editItem}>Edit</button><br /><br />
                    </li>))}
                </ul>
                <button onClick={this.complete}>Complete</button>
            </div>
        )
    }
}


// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(SurveyEdit);