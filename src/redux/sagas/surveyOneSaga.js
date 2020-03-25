import Axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* surveyOneSaga() {
    yield takeEvery('INPUT_SURVEY', postSurvey);
    yield takeEvery('FETCH_LAST_SURVEY', fetchSurvey);
    yield takeEvery('UPDATE_NAME', updateSurveyName);
}
// PUT to update the name of the survey matching the ID
function* updateSurveyName(action) {
    let lastSurveyId = action.payload.id
    try {
        yield Axios.put(`/api/survey_one/new_name/${lastSurveyId}`, action.payload);
    } catch (error) {
        console.log(error);
    }
}
// GET to get the last survey submmited using the RETURNING id
function* fetchSurvey(action) {
    let lastSurveyId = action.payload
    const elementResponse = yield Axios.get(`/api/survey_one/last/${lastSurveyId}`, lastSurveyId);
     yield put({ type: 'SET_SURVEY', payload: elementResponse.data })
}
// POST to create new survey row in survey table of DB
// response provides the RETURNING survey id which is used
// to edit that survey
function* postSurvey(action) {
    try {
       let response = yield Axios.post('/api/survey_one', action);
        let surveyId = response.data.rows[0].id;
        yield put({
            type: 'SET_SURVEY_ID', payload: surveyId
        })  
    } 
    catch (error) {
        console.log(error);
    }
}


export default surveyOneSaga;

