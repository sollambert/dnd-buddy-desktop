import { all, call } from 'redux-saga/effects'
import characterSaga from './character.saga';
import chatgptSaga from './chatgpt.saga';
import campaignSaga from './campaign.saga';
import encounterSaga from './encounter.saga';

export default function* rootSaga() {
    yield all([
        call(characterSaga),
        call(chatgptSaga),
        call(campaignSaga),
        call(encounterSaga)
    ]);
}