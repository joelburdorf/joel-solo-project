import { combineReducers } from 'redux';

const surveyOneReducer = (state = [], action) => {

    switch (action.type) {
        case '':
            return action.payload;
        default:
            return state;
    }
};



export default combineReducers({
    surveyOneReducer,
});