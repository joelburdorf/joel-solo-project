import { combineReducers } from 'redux';

// makes returning ID from survey POST avail in reduxStore
const surveyOneId = (state = [], action) => {
    switch (action.type) {
        case 'SET_SURVEY_ID':
            return action.payload;
        default:
            return state;
    }
};
// makes last survey avail. in reduxStore
const surveyOneLastSurvey = (state = [], action) => {
    switch (action.type) {
        case 'SET_SURVEY':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    surveyOneId,
    surveyOneLastSurvey,
});