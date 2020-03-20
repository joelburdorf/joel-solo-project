import Axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* surveyOneSaga() {
    yield takeEvery('INPUT_SURVEY', postSurvey);
    yield takeEvery('FETCH_LAST_SURVEY', fetchSurvey);
}

function* fetchSurvey() {
    const elementResponse = yield Axios.get('/api/survey_one/last');
    console.log('in surveyOneSaga, survey:', elementResponse.data);
     yield put({ type: 'SET_SURVEY', payload: elementResponse.data })
}

function* postSurvey(action) {
    yield console.log('action inside of post, postSurvey', action);
    try {
        yield Axios.post('/api/survey_one', action);
    } catch (error) {
        console.log(error);
    }
}


export default surveyOneSaga;