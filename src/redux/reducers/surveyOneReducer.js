import { combineReducers } from 'redux';

const surveyOneId = (state = [], action) => {

    switch (action.type) {
        case 'SET_SURVEY_ID':
            return action.payload;
        default:
            return state;
    }
    
};

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