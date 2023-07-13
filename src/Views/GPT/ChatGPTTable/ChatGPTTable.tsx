import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPrompts } from '../../../Redux/ActionCreators/chatgpt.action.creators';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import ChatGPTResponse from '../../../Classes/ChatGPT/ChatGPTResponse/ChatGPTResponse';

function ChatGPTTable(): JSX.Element {

    const dispatch = useDispatch();
    const responses = useSelector((store: RootState) => store.responseReducer);

    useEffect(() => {
        // dispatch(getMessages());
        dispatch(getPrompts());
    }, [dispatch]);

    return (
        <>
            {responses?.map((response: ChatGPTResponse, i: number) => {
                // console.log(response)
                return (
                    <div key={i} style={{ textAlign: "left", margin: "1em" }}>
                        <div>
                            <p>Id: {response.id}</p>
                            <p>{response.request.prompt}</p>
                            <pre>
                                {response.choices.map((choice) => {
                                    return (choice.message.content)
                                })}
                            </pre>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ChatGPTTable;