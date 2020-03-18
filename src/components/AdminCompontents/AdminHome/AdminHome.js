import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminHome extends Component {

   getData=()=>{
    console.log('in getData');
       this.props.history.push('/adminData')
    }

    getUserAccounts = () => {
        console.log('in getUserAccounts');
        this.props.history.push('/adminUser')
    }

    takeSurvey = () => {
        console.log('in takeSurvey');
        this.props.history.push('/allSurveys')
    }

    render() {
        return (
            <div>
                <button onClick={this.getData}>DATA</button>
                <br></br>
                <br></br>
                <button onClick={this.getUserAccounts}>USER ACCOUNTS</button>
                <br></br>
                <br></br>
                <button onClick={this.takeSurvey}>SURVEYS</button>
                <br></br>
            </div>

        )}
}

export default connect()(AdminHome);
