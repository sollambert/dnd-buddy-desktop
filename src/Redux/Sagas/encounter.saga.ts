import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import * as ActionTypes from "../ActionTypes/encounter.action.types";
import * as ActionCreators from "../ActionCreators/encounter.action.creators";
import { postEncounter, getEncounters, deleteEncounter } from '../Services/encounter.services.ts';

function* addEncounter({ payload, callback }: ActionTypes.AddEncounterAction) {
    try {
        let { data } = yield call(postEncounter, payload);
        yield put(ActionCreators.setEncounter(data));
        yield put(ActionCreators.getEncounters());
    } catch (error) {
        console.error(error);
    } finally {
        yield call(() => callback?.());
    }
}

function* getAllEncounters({ callback }: ActionTypes.GetEncountersAction) {
    try {
        let { data } = yield call(getEncounters);
        yield put(ActionCreators.setEncounters(data));
    } catch (error) {
        console.error(error);
    } finally {
        yield call(() => callback?.());
    }
}

function* getEncounter() { }

function* deleteEncounterById({ payload, callback }: ActionTypes.DeleteEncounterAction) {
    try {
        let { data } = yield call(deleteEncounter, payload);
        yield put(ActionCreators.getEncounters());
    } catch (error) {
        console.error(error);
    } finally {
        yield call(() => callback?.());
    }
}

function* watcherSaga() {
    yield takeLatest(ActionTypes.ADD_ENCOUNTER, addEncounter);
    yield takeLatest(ActionTypes.GET_ENCOUNTER, getEncounter);
    yield takeLatest(ActionTypes.GET_ENCOUNTERS, getAllEncounters);
    yield takeLatest(ActionTypes.DELETE_ENCOUNTER, deleteEncounterById);
}

export default watcherSaga;
