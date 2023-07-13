import ChatGPTRequest from "../../Classes/ChatGPT/ChatGPTRequest/ChatGPTRequest";
import ChatGPTResponse, { Message } from "../../Classes/ChatGPT/ChatGPTResponse/ChatGPTResponse";
import axios from 'axios';

interface chatGPTResponse {
    response: ChatGPTResponse;
}

interface chatGPTMessage {
    response: Array<Message>;
}

export async function getChatGPTMessages(): Promise<chatGPTMessage> {
    return await axios.get('/api/chatgpt/response/messages');
}

export async function getChatGPTResponses(): Promise<chatGPTResponse> {
    return await axios.get('/api/chatgpt/response');
}

export async function postChatGPTRequest(
    payload: ChatGPTRequest
): Promise<chatGPTResponse> {
    // console.log(payload);
    return await axios.post('/api/chatgpt', payload)
}