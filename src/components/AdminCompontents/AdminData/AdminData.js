import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminData extends Component {

    componentDidMount() {
        this.getTotalSurveyed();
        this.getTotalOther();
        this.getTotalFemale();
        this.getTotalMale();
    }
    // GET count of all rows (surveys) from the sagas
    getTotalSurveyed = () => {
        this.props.dispatch({ type: 'FETCH_TOTAL_SURVEYED' });
    }
    // GET count of all Gender "other" (surveys) from the sagas
    getTotalOther = () => {
        this.props.dispatch({ type: 'FETCH_TOTAL_GENDER_OTHER' });
    }
    // GET count of all Gender "female" (surveys) from the sagas
    getTotalFemale = () => {
        this.props.dispatch({ type: 'FETCH_TOTAL_GENDER_FEMALE' });
    }
    // GET count of all Gender "male" (surveys) from the sagas
    getTotalMale = () => {
        this.props.dispatch({ type: 'FETCH_TOTAL_GENDER_MALE' });
    }
    // route Admin back to adminHome
    admin = () => {
        this.props.history.push("/adminhome");
    }
    // render to DOM the total count of rows (surveys)
    render() {
        return (
            <div className="center">
                <p><b>Statistics:</b></p>
                {/* <h3>{this.props.reduxState.admin.totalSurveyedReducer[0]}</h3> */}
                <ul>
                    {this.props.reduxState.admin.totalSurveyedReducer.map(total => (<li key={total.id}>
                        <label><b>Total People Surveyed:    </b></label><b>{total.count}</b></li>))}
                </ul>
                <br></br>
                <ul>
                    {this.props.reduxState.admin.totalOtherReducer.map(total => (<li key={total.id}>
                        <label><b>Gender "Other":    </b></label><b>{total.count}</b></li>))}
                </ul>
                <br></br>
                <ul>
                    {this.props.reduxState.admin.totalFemaleReducer.map(total => (<li key={total.id}>
                        <label><b>Gender "Female":    </b></label><b>{total.count}</b></li>))}
                </ul>
                <br></br>
                <ul>
                    {this.props.reduxState.admin.totalMaleReducer.map(total => (<li key={total.id}>
                        <label><b>Gender "Male":    </b></label><b>{total.count}</b></li>))}
                </ul>
                <br></br>
                <button onClick={this.admin}><b>Admin Page</b></button>
            </div>
        )
    }
}

// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AdminData);