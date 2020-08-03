import { put, cancel, takeLatest , take,all} from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';
import { LOCATION_CHANGE } from "react-router-redux";

import { GET_NEWS_URL ,GET_NEWS} from "../actions/constants";
import { getNewsSucess } from "../actions";



export function* getNewsData(data) {
    const requestURL = `${GET_NEWS_URL}?page=${data.pageNumber}`
    try {        
        const result =yield fetch(requestURL).then(response => response.json(), );
        if (result) { 
            yield put(getNewsSucess(result))
        }
        else{
            NotificationManager.error("error", result);
        }
    }
    catch (err) {
        NotificationManager.error("error", err);
    }
}


export function* watchNewsGet() {
    const watcher = yield takeLatest(GET_NEWS, getNewsData);
    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
}


export default function* rootSaga() {
    yield all([
        watchNewsGet(),
    ])
  }