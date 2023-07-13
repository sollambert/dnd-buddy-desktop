export const SEND_PROMPT = "gpt/SEND_PROMPT";
export interface SendPromptAction {
    type: typeof SEND_PROMPT;
    payload: ChatGPTRequest;
    callback?: () => void;
}

export const GET_MESSAGES = "gpt/GET_MESSAGES";
export interface GetMessages {
    type: typeof GET_MESSAGES;
    callback?: () => void;
}

export const SET_MESSAGES = "gpt/SET_MESSAGES";
export interface SetMessages {
    type: typeof SET_MESSAGES;
    payload: Array<Message>;
    callback?: () => void;
}

export const GET_PROMPTS = "gpt/GET_PROMPT";
export interface GetPromptsAction {
    type: typeof GET_PROMPTS;
    callback?: () => void;
}

export const ADD_PROMPT = "gpt/ADD_PROMPT";
export interface AddPromptAction {
    type: typeof ADD_PROMPT;
    payload: ChatGPTResponse;
    callback?: () => void;
}

export const SET_PROMPTS = "gpt/SET_PROMPTS";
export interface SetPromptAction {
    type: typeof SET_PROMPTS;
    payload: Array<ChatGPTResponse>;
    callback?: () => void;
}

export const CLEAR_PROMPTS = "gpt/CLEAR_PROMPTS";
export interface ClearPromptsAction {
    type: typeof CLEAR_PROMPTS;
    callback?: () => void;
}

export type ChatGPTAction =
| SendPromptAction
| GetPromptsAction
| AddPromptAction
| SetPromptAction
| ClearPromptsAction
| GetMessages
| SetMessages