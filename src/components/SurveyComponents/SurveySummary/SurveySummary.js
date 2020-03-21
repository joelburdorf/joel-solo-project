import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveySummary extends Component {

    // componentDidUpdate() {
    //     this.props.reduxState.surveyOne.surveyOneId &&
    //     this.getLastSurvey();
    //     // use component did mount to dispatch an action to request the userlist from the API
    // }

    getLastSurvey = () => {
        this.props.dispatch({ type: 'FETCH_LAST_SURVEY', 
            payload: this.props.reduxState.surveyOne.surveyOneId 
        });
    }

    // deleteAdminUser = (event, id) => {
    //     console.log('in deleteUser', id);
    //     this.props.dispatch({ type: 'DELETE_ADMIN_USERS', payload: id })
    // }

    edit = () => {
        console.log('in edit');
        this.props.history.push('/surveyEdit')
    }
    // deleteSurvey = () => {
    //     console.log('in deleteSurvey');
    //     this.props.dispatch({ type: 'DELETE_LAST_SURVEY', payload: id })
    //     this.props.history.push('/Home')
    // }

    render() {
         return (
            <div>
                <p><b>Survey Summary</b></p>
                
                <button onClick={this.getLastSurvey}>View Summary</button>
                
                

                <ul>
                    {this.props.reduxState.surveyOne.surveyOneLastSurvey.map(info => (<li key={info.id}>
                       <label><b>Location:</b></label> {info.location}<br /><br />
                        <label><b>Date</b></label>  {info.date}<br /><br />
                        <label><b>Name:</b></label>  {info.name}<br /><br />
                        <label><b>Age:</b></label>  {info.age}<br /><br />
                        <label><b>Gender:</b></label>  {info.gender}<br /><br />
                        <label><b>Race:</b></label>  {info.race}<br /><br />
                        <label><b>Ethnicity:</b></label>  {info.ethnicity}<br /><br />
                        <label><b>Group:</b></label>  {info.group}<br /><br />
                        <button onClick={this.edit}>Edit Survey</button>
                        <button onClick={this.deleteSurvey}>Delete Survey</button>
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