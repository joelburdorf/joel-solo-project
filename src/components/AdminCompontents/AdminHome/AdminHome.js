import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

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
                <Button variant="contained" color="primary" size="small"  onClick={this.getData}><b>DATA</b></Button>
                <br></br>
                <br></br>
                <Button variant="contained" color="primary" size="small" onClick={this.getUserAccounts}><b>USER ACCOUNTS</b></Button>
                <br></br>
                <br></br>
                <Button variant="contained" color="primary" size="small" onClick={this.takeSurvey}><b>SURVEYS</b></Button>
                <br></br>
            </div>
        )}
}

export default connect()(AdminHome);
