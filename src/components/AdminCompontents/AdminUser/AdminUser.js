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

    render() {
        return (
            <div>
                <p>USERNAME: {this.props.reduxState.admin.userAdminAccessReducer.id}</p> 

                <ul>
                    {this.props.reduxState.admin.userAdminAccessReducer.map(user => (<li key={user.id}>{user.username}
                        <button onClick={(event) => this.deleteAdminUser(event, user.id)}>Delete</button></li>))}

                </ul>

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