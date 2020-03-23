import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';

import AdminHome from '../AdminCompontents/AdminHome/AdminHome';
import AdminUser from '../AdminCompontents/AdminUser/AdminUser';
import AdminData from '../AdminCompontents/AdminData/AdminData';

import AllSurveys from '../SurveyComponents/AllSurveys/AllSurveys';
import SurveyPageOne from '../SurveyComponents/SurveyPageOne/SurveyPageOne';
import SurveyPageTwo from '../SurveyComponents/SurveyPageTwo/SurveyPageTwo';
import SurveyPageThree from '../SurveyComponents/SurveyPageThree/SurveyPageThree';
import SurveySummary from '../SurveyComponents/SurveySummary/SurveySummary';
import SurveyEdit from '../SurveyComponents/SurveyEdit/SurveyEdit';
import SurveyEditName from '../SurveyComponents/SurveyEditName/SurveyEditName';


import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            <ProtectedRoute
              exact
              path="/adminhome"
              component={AdminHome}
            />
            <ProtectedRoute
              exact
              path="/admindata"
              component={AdminData}
            />
            <ProtectedRoute
              exact
              path="/adminUser"
              component={AdminUser}
            />
            <ProtectedRoute
              exact
              path="/allSurveys"
              component={AllSurveys}
            />
            <ProtectedRoute
              exact
              path="/surveyPageOne"
              component={SurveyPageOne}
            />
            <ProtectedRoute
              exact
              path="/surveyPageTwo"
              component={SurveyPageTwo}
            />
            <ProtectedRoute
              exact
              path="/surveyPageThree"
              component={SurveyPageThree}
            />
            <ProtectedRoute
              exact
              path="/surveySummary"
              component={SurveySummary}
            />
            <ProtectedRoute
              exact
              path="/surveyEdit"
              component={SurveyEdit}
            />
            <ProtectedRoute
              exact
              path="/surveyEditName"
              component={SurveyEditName}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
