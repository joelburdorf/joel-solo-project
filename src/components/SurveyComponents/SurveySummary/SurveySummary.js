import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveySummary extends Component {
    
   //componentDidUpdate works, but creates a loop calling getLastSurvey  repeatedly
    // componentDidUpdate() {
    //     this.getLastSurvey();
    //     
    // }

    getLastSurvey = () => {
        this.props.dispatch({ type: 'FETCH_LAST_SURVEY', 
            payload: this.props.reduxState.surveyOne.surveyOneId 
        });
    }

    edit = () => {
        this.props.history.push('/surveyEdit')
    }

      complete = () => {
          this.props.history.push("/allSurveys")
    }

    render() {
         return (
             <div className="center">
                <p><b>Survey Summary</b></p>
                 <button onClick={this.getLastSurvey}><b>Update Summary</b></button>
                <br></br>
                <br></br>
                <ul>
                     {this.props.reduxState.surveyOne.surveyOneLastSurvey &&
                    this.props.reduxState.surveyOne.surveyOneLastSurvey.map(info => (<li key={info.id}>
                        <label><b>Location:</b></label> {info.location}<br /><br />
                        <label><b>Date</b></label>  {info.date} <br /><br />
                        <label><b>Name:</b></label>  {info.name} <br /><br />
                        <label><b>Age:</b></label>  {info.age} <br /><br />
                        <label><b>Gender:</b></label>  {info.gender} <br /><br />
                        <label><b>Race:</b></label>  {info.race} <br /><br />
                        <label><b>Ethnicity:</b></label>  {info.ethnicity} <br /><br />
                        <label><b>Group:</b></label>  {info.group} <br /><br />
                        <button onClick={this.edit}><b>Edit</b></button>
                        <button onClick={this.complete}><b>Complete</b></button>
                       </li>))}
                </ul>
            </div>
        )
    }
}


// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(SurveySummary);