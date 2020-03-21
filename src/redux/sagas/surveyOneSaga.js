import Axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* surveyOneSaga() {
    yield takeEvery('INPUT_SURVEY', postSurvey);
    yield takeEvery('FETCH_LAST_SURVEY', fetchSurvey);
}

function* fetchSurvey(action) {
    // console.log('in fetchSurvey action', action.payload);
    let lastSurveyId = action.payload
    const elementResponse = yield Axios.get(`/api/survey_one/last/${lastSurveyId}`, lastSurveyId);
    console.log('in surveyOneSaga, survey:', elementResponse.data);
     yield put({ type: 'SET_SURVEY', payload: elementResponse.data })
}

function* postSurvey(action) {
    yield console.log('action inside of post, postSurvey', action);
    try {
       let response = yield Axios.post('/api/survey_one', action);
        let surveyId = response.data.rows[0].id;
        // console.log('in postSurvey, surveyId', surveyId);
        yield put({
            type: 'SET_SURVEY_ID', payload: surveyId
        })  
    } 
    catch (error) {
        console.log(error);
    }
}


export default surveyOneSaga;

