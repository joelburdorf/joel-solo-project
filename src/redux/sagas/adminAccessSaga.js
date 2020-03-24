import Axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* adminAccessSaga() {
    yield takeEvery('FETCH_ADMIN_USERS', fetchUsers);
    yield takeEvery('DELETE_ADMIN_USERS', deleteUsers);
    yield takeEvery('FETCH_TOTAL_SURVEYED', fetchTotalSurveyed);
}

function* fetchUsers() {
    const elementResponse = yield Axios.get('/api/admin/users');
    console.log('in adminAccessSaga, users:', elementResponse.data);
    yield put({ type: 'GET_USER_ADMIN', payload: elementResponse.data })
}

function* fetchTotalSurveyed() {
    const elementResponse = yield Axios.get('/api/admin/total_surveyed');
    console.log('in adminAccessSaga fetchTotalSurveyed, response', elementResponse.data);
    yield put({ type: 'GET_TOTAL_SURVEYED_FROM_DB', payload: elementResponse.data })
}

function* deleteUsers(id) {
    yield console.log('action inside of delete users', id);
    try {
        yield Axios.delete(`/api/admin/deleteUser/${id.payload}`);
        yield put({ type: 'FETCH_ADMIN_USERS' })
    } catch (error) {
        console.log(error);
    }
}

export default adminAccessSaga;




