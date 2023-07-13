import React from "react";
import { useHistory } from "react-router-dom";

type Props = {
    height: string
};

function BackButton(props: Props): JSX.Element {
    const history = useHistory();
    return (
    <div className={"nav-button"} onClick={() => {
        history.goBack();
    }}
    style={{alignSelf:"center", height: props?.height }}>
        BACK
    </div>);
}

export default BackButton;
