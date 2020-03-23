import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveyEditName extends Component {
    state = {
          name: '',  
    }

    handleNameChange = (event, param) => {
        // console.log('event happended in handleChange', event)
        this.setState({
                ...this.state,
                [param]: event.target.value,
        });
    }


    editName = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'UPDATE_NAME', payload: this.state.name })
        console.log('in SurveyEditName editName', this.state.name);
        this.setState({
            name: this.state.name,
        });
        this.props.history.push('/surveySummary')
    }


    render() {
        return (
            <div>
               <form>
                <label><b>Edit Name:</b></label>
                <input type='text' placeholder="optional" value={this.state.name}
                    onChange={(event) => this.handleNameChange(event, 'name')} />
                <br></br>
                <br></br>
                <button onClick={this.editName}>Save Name</button>
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