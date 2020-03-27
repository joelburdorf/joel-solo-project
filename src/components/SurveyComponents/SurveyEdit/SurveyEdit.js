import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';


class SurveyEdit extends Component {
    // this page is basically same as the Survey Summary page except
    // that an edit button is added for each item

    // edit Name will route user to surveyEditName page
    editName = () => {
        this.props.history.push("/surveyEditName")
    }
    // edit item is not being used
    editItem = () => {
        console.log('in editItem');
    }
    // complete brings user back to allSurveys page
    complete = () => {
        this.props.history.push("/allSurveys")
    }

    render() {
        return (
            <div className="center">
                <h1><b>Survey Edit</b></h1>
                <ul>
                    {this.props.reduxState.surveyOne.surveyOneLastSurvey.map(info => (<li key={info.id}>
                        <label><b>Name:</b></label>  {info.name}
                        <Button  color="secondary" size="small" onClick={this.editName}>Edit</Button> <br /><br />
                        <label><b>Age:</b></label>  {info.age}
                        <Button  color="secondary" size="small" onClick={this.editItem}>Edit</Button><br /><br />
                        <label><b>Gender:</b></label>  {info.gender}
                        <Button  color="secondary" size="small" onClick={this.editItem}>Edit</Button><br /><br />
                        <label><b>Location:</b></label> {info.location}
                        <Button  color="secondary" size="small" onClick={this.editItem}>Edit</Button><br /><br />
                        <label><b>Date</b></label>  {info.date}
                        <Button  color="secondary" size="small" onClick={this.editItem}>Edit</Button><br /><br />
                        <label><b>Race:</b></label>  {info.race}
                        <Button  color="secondary" size="small" onClick={this.editItem}>Edit</Button><br /><br />
                        <label><b>Ethnicity:</b></label>  {info.ethnicity}
                        <Button  color="secondary" size="small" onClick={this.editItem}>Edit</Button><br /><br />
                        <label><b>Group:</b></label>  {info.group}
                        <Button  color="secondary" size="small" onClick={this.editItem}>Edit</Button><br /><br />
                    </li>))}
                </ul>
                <Button variant="contained" color="primary" size="small" onClick={this.complete}><b>Complete</b></Button>
            </div>
        )
    }
}


// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(SurveyEdit);