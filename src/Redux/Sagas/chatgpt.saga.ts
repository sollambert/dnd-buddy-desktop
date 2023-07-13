import { call, put, takeLatest } from "redux-saga/effects";
import * as ActionTypes from "../ActionTypes/chatgpt.action.types";
import * as ActionCreators from "../ActionCreators/chatgpt.action.creators";
import { getChatGPTResponses, postChatGPTRequest, getChatGPTMessages } from '../Services/chatgpt.services';

function* getPrompts({ callback }: ActionTypes.GetPromptsAction) {
    try {
        let { data } = yield call(getChatGPTResponses);
        yield put(ActionCreators.setPrompts(data));
        // console.log(data);
    } catch (error) {
        console.error(error);
    } finally {
        yield call(() => callback?.());
    }
}

function* getMessages({ callback } : ActionTypes.GetMessages) {
    try {
        let { data } = yield call(getChatGPTMessages);
        // console.log('getting messages')
        yield put(ActionCreators.setMessages(data));
    } catch (error) {
        console.error(error);
    } finally {
        yield call(() => callback?.());
    }
}

function* sendPrompt({ payload, callback }: ActionTypes.SendPromptAction) {
    try {
        yield call(postChatGPTRequest, payload);
        // console.log('sent prompt')
        yield put(ActionCreators.getMessages());
    } catch (error) {
        console.error(error);
    } finally {
        yield call(() => callback?.());
    }
}

function* watcherSaga() {
    yield takeLatest(ActionTypes.GET_PROMPTS, getPrompts);
    yield takeLatest(ActionTypes.SEND_PROMPT, sendPrompt);
    yield takeLatest(ActionTypes.GET_MESSAGES, getMessages);
}

export default watcherSaga;