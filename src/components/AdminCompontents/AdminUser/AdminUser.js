import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';


class AdminUser extends Component {

    componentDidMount() {
        this.getAdminUsers();
        // use component did mount to dispatch an action to request the userlist from the API
        // only admin users will be able to access the DB for userlist or DB statistics
    }
    // call to sagas to GET a list of all users from DB
    getAdminUsers = () => {
        this.props.dispatch({ type: 'FETCH_ADMIN_USERS' });
    }
    // call to sagas to delete a user from the user table in the DB
    deleteAdminUser = (event, id) => {
        this.props.dispatch({ type: 'DELETE_ADMIN_USERS', payload: id })
    }
    // bring Admin back to the adminHome page
    admin = () => {
        this.props.history.push("/adminhome")
    }
    // render entire user list to DOM from reduxStore 
    render() {
        return (
            <div className="center">
                <h1><b>Current Users</b></h1> 
                <ul>
                    {this.props.reduxState.admin.userAdminAccessReducer.map(user => (<li key={user.id}><b>{user.username}</b>   
                        <Button color="secondary" size="small" onClick={(event) => this.deleteAdminUser(event, user.id)}><b>Delete</b></Button></li>))}
                </ul>
                <br></br>
                <Button variant="contained" color="primary" size="small" onClick={this.admin}><b>Admin Page</b></Button>
                {/* <pre>{JSON.stringify(this.props.reduxState.admin.userAdminAccessReducer)}</pre> */}
            </div>
        )
    }
}

// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AdminUser);