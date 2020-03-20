import { combineReducers } from 'redux';

const surveyOneReducer = (state = [], action) => {

    switch (action.type) {
        case 'GET_USER_ADMIN':
            return action.payload;
        default:
            return state;
    }
    
};


export default combineReducers({
    surveyOneReducer,
});