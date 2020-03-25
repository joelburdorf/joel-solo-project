import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminHome extends Component {
    // bring Admin back to the adminData page
   getData=()=>{
       this.props.history.push('/adminData')
    }
    // bring Admin back to the adminUser page
    getUserAccounts = () => {
        this.props.history.push('/adminUser')
    }
    // bring Admin back to the allSurveys page
    takeSurvey = () => {
        this.props.history.push('/allSurveys')
    }

    render() {
        return (
            <div className="center">
                <br></br>
                <button className="link-button" onClick={this.getData}><b>DATA</b></button>
                <br></br>
                <br></br>
                <button className="link-button" onClick={this.getUserAccounts}><b>USER ACCOUNTS</b></button>
                <br></br>
                <br></br>
                 <button className="link-button" onClick={this.takeSurvey}><b>SURVEYS</b></button>
                <br></br>
            </div>
        )}
}

export default connect()(AdminHome);
