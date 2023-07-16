import { call, put, takeLatest } from "redux-saga/effects";
import * as ActionTypes from "../ActionTypes/character.action.types";
import * as ActionCreators from "../ActionCreators/character.action.creators";
import {postCharacter, putCharacter, getCharacter, getCharacters, deleteCharacter} from '../Services/character.services';

function* addCharacter({ payload, callback }: ActionTypes.AddCharacterAction) {
  try {
    let data: Character = yield call (postCharacter, payload);
    yield put(ActionCreators.setCharacter(data));
    yield put(ActionCreators.getCharacters());
  } catch (error) {
    console.error(error);
  } finally {
    yield call(() => callback?.());
  }
}

function* updateCharacter({ payload, callback }: ActionTypes.UpdateCharacterAction) {
  try {
    let { data } = yield call (putCharacter, payload);
    yield put(ActionCreators.setCharacter(data));
    yield put(ActionCreators.getCharacters());
  } catch (error) {
    console.error(error);
  } finally {
    yield call(() => callback?.());
  }
}

function* getAllCharacters({ callback }: ActionTypes.GetCharactersAction) {
  try {
    let data: Array<Character> = yield call (getCharacters);
    console.log(data);
    yield put(ActionCreators.setCharacters(data));
  } catch (error) {
    console.error(error);
  } finally {
    yield call(() => callback?.());
  }
}

function* getCharacterById({payload, callback }: ActionTypes.GetCharacterAction) {
  try {
    let { data } = yield call (getCharacter, payload);
    yield put(ActionCreators.setCharacter(data));
  } catch (error) {
    console.error(error);
  } finally {
    yield call(() => callback?.());
  }
}

function* deleteCharacterById({payload, callback}: ActionTypes.DeleteCharacterAction) {
    try {
        yield call(deleteCharacter, payload);
        yield put(ActionCreators.getCharacters());
    } catch (error) {
        console.error(error);
    } finally {
        yield call(() => callback?.());
    }
}

function* watcherSaga() {
  yield takeLatest(ActionTypes.ADD_CHARACTER, addCharacter);
  yield takeLatest(ActionTypes.UPDATE_CHARACTER, updateCharacter);
  yield takeLatest(ActionTypes.GET_CHARACTER, getCharacterById);
  yield takeLatest(ActionTypes.GET_CHARACTERS, getAllCharacters);
  yield takeLatest(ActionTypes.DELETE_CHARACTER, deleteCharacterById);
}

export default watcherSaga;
