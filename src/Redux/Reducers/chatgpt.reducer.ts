import * as ActionTypes from "../ActionTypes/chatgpt.action.types";

export const responseReducer = (
    state: Array<ChatGPTResponse> = new Array<ChatGPTResponse>(),
    action: ActionTypes.ChatGPTAction
) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMPT:
            return [...state, action.payload];
        case ActionTypes.SET_PROMPTS:
            return action.payload;
        case ActionTypes.CLEAR_PROMPTS:
            return new Array<ChatGPTResponse>();
        default:
            return state;
    }
};

export const messageReducer = (
    state: Array<Message> = new Array<Message>(),
    action: ActionTypes.ChatGPTAction
) => {
    switch (action.type) {
        case ActionTypes.SET_MESSAGES:
            return action.payload;
        default:
            return state;
    }
}