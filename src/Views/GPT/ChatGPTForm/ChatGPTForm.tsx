import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendPrompt, getPrompts, getMessages } from '../../../Redux/ActionCreators/chatgpt.action.creators';
import FormInput from '../../../Components/FormInput';

type Props = {
    width?: string;
};

function ChatGPTForm({width}: Props): JSX.Element {

    const initialState: ChatGPTRequest = {prompt: '', temperature: 1.0}

    const [request, setRequest] = useState<ChatGPTRequest>(initialState);

    function handleInput(event: any, key: string) {
        const inputKey = key as keyof typeof request;
        setRequest({ ...request, [inputKey]: event.target.value });
    }

    const handleSubmit = (): void => {
        if (request.prompt !== "") {
            dispatch(sendPrompt(request, () => setRequest(initialState)));
        } else {
            alert("Add a prompt dingus!");
        }
    };

    const dispatch = useDispatch();

    return (
        <div>
            <FormInput
                name="prompt"
                display="Prompt"
                handler={handleInput}
                value={request.prompt}
                width={width ? width : "80vw"}
            />
            <button
                onClick={() => {
                    handleSubmit();
                }}
            >
                SEND
            </button>
        </div>
    );
}

export default ChatGPTForm;