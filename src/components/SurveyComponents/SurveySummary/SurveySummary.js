import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveySummary extends Component {

    componentDidMount() {
        this.getLastSurvey();
        // use component did mount to dispatch an action to request the userlist from the API
    }

    getLastSurvey = () => {
        this.props.dispatch({ type: 'FETCH_LAST_SURVEY' });
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
                <p>SurveySummary go here</p>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.deleteSurvey}>Delete Survey</button>

            </div>
        )
    }
}

export default connect()(SurveySummary);