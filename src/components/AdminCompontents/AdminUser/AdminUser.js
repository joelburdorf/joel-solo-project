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

    deleteAdminUser = (event, id) => {
        console.log('in deleteUser', id);
        this.props.dispatch({ type: 'DELETE_ADMIN_USERS', payload: id })
    }
    admin = () => {
        this.props.history.push("/adminhome")
    }

    render() {
        return (
            <div className="center">
                <p><b>Current Users:</b></p> 

                <ul>
                    {this.props.reduxState.admin.userAdminAccessReducer.map(user => (<li key={user.id}><b>{user.username}</b>   
                        <button onClick={(event) => this.deleteAdminUser(event, user.id)}><b>Delete</b></button></li>))}

                </ul>
                <br></br>
                <button onClick={this.admin}><b>Admin Page</b></button>

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