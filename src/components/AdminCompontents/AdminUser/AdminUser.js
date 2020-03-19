import React, { Component } from 'react';
import { connect } from 'react-redux';


class AdminUser extends Component {

    componentDidMount() {
        this.getAdminUsers();
        // use component did mount to dispatch an action to request the userlist from the API
    }

    getAdminUsers = () => {
        this.props.dispatch({ type: 'FETCH_ADMIN_USERS' });
    }

    render() {
        return (
            <div>
                <p>USERNAME: {this.props.reduxState.admin.userAdminAccessReducer.user}</p> 

                <ul>
                    {/* {this.props.reduxState.admin.userAdminAccessReducer.user.map(taco => (<li key={taco.username}>
                        </li>))} */}

                </ul>

                <pre>{JSON.stringify(this.props.reduxState.admin.userAdminAccessReducer)}</pre>
            </div>
        )
    }
}



// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AdminUser);