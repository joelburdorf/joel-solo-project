import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveyEditName extends Component {
    // this component is to change the name in state then
    // call to sagas to change name in the DB for this ID only
    // id is the RETURNING id for this users last POST of latest survey
    state = {
          name: '',
          id: this.props.reduxState.surveyOne.surveyOneId, 
    }
    handleNameChange = (event, param) => {
        this.setState({
                ...this.state,
                [param]: event.target.value,
        });
    }
    // alert user to fill in name
    // then dispatch name to redux then PUT to DB
    editName = event => {
        event.preventDefault();
            if (this.state.name === '') {
                alert('Please add a name');
            } else {
            this.props.dispatch({ type: 'UPDATE_NAME', payload: this.state });
            this.setState({
                name: this.state,
            });
            this.props.history.push('/surveySummary');
        }
    }
    render() {
        return (
            <div className="center">
                <form className="form">
                <label><b>Edit Name:</b></label>
                <input type='text' placeholder="optional" value={this.state.name}
                    onChange={(event) => this.handleNameChange(event, 'name')} />
                <br></br>
                <br></br>
                    <button onClick={this.editName}><b>Save Name</b></button>
                </form>
              </div>
        )
    }
}


// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(SurveyEditName);