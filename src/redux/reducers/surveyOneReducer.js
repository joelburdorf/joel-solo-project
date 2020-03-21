import { combineReducers } from 'redux';

const surveyOneReducer = (state = [], action) => {

    switch (action.type) {
        case 'SET_SURVEY_ID':
            return action.payload;
        default:
            return state;
    }
    
};

export default combineReducers({
    surveyOneReducer,
});