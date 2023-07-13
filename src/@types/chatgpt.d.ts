declare type ChatGPTRequest = {
    id?: number | undefined;
    prompt: string;
    temperature: number;
}
declare type ChatGPTResponse = {
    id: number;
    choices: Array<Choice>;
    finishReason: string;
    index: number;
    request: ChatGPTRequest;
}

declare type Choice = {
    id : number;
    message : Message;
}

declare type Message = {
    id: number;
    role: string;
    content: string;
}
