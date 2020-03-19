import Axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* adminAccessSaga() {
    yield takeEvery('FETCH_ADMIN_USERS', fetchUsers);
}

function* fetchUsers() {
    const elementResponse = yield Axios.get('/api/admin/users');
    console.log('in adminAccessSaga, users:', elementResponse.data);
    yield put({ type: 'GET_USER_ADMIN', payload: elementResponse.data })
}

export default adminAccessSaga;




