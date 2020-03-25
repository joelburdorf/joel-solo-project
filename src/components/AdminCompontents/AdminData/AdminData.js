import React, { Component } from 'react';
import { connect } from 'react-redux';


class AdminData extends Component {

    componentDidMount() {
        this.getTotalSurveyed();
        // use component did mount to dispatch an action to request total rows from survey table
    }
    // GET count of all rows (surveys) from the sagas
    getTotalSurveyed = () => {
        this.props.dispatch({ type: 'FETCH_TOTAL_SURVEYED' });
    }
    // route Admin back to adminHome
    admin = () => {
        this.props.history.push("/adminhome")
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