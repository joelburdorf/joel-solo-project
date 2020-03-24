import React, { Component } from 'react';
import { connect } from 'react-redux';


class AdminData extends Component {

    componentDidMount() {
        this.getTotalSurveyed();
        // use component did mount to dispatch an action to request total rows from survey table
    }

    getTotalSurveyed = () => {
        this.props.dispatch({ type: 'FETCH_TOTAL_SURVEYED' });
    }

    admin = () => {
        this.props.history.push("/adminhome")
    }

    render() {
        return (
            <div>
                <p><b>Statistics</b></p>
                {/* <h3>{this.props.reduxState.admin.totalSurveyedReducer[0]}</h3> */}
                <ul>
                    {this.props.reduxState.admin.totalSurveyedReducer.map(total => (<li key={total.id}>
                        <label><b>Total People Surveyed:    </b></label><b>{total.count}</b></li>))}
                </ul>
                <br></br>
                <br></br>
                <button onClick={this.admin}>Admin Page</button>
            </div>
        )
    }
}

// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AdminData);