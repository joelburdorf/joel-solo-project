import Axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* surveyOneSaga() {
    yield takeEvery('INPUT_SURVEY_P_ONE', postSurveyPageOne);
    yield takeEvery('INPUT_SURVEY_P_TWO', postSurveyPageTwo);
    yield takeEvery('INPUT_SURVEY_P_THREE', postSurveyPageThree);
}

function* postSurveyPageOne() {
   
}

function* postSurveyPageTwo() {

}


function* postSurveyPageThree(action) {
    yield console.log('action inside of post, postSurveyPageThree', action);
    try {
        yield Axios.post('/api/survey_one', action);
    } catch (error) {
        console.log(error);
    }
}


export default surveyOneSaga;