import React from "react";
import { useHistory } from "react-router-dom";

type Props = {
};

function BackButton({
}: Props): JSX.Element {
    const history = useHistory();
    return (
    <div className={"nav-button"} onClick={() => {
        history.goBack();
    }}
    style={{alignSelf:"center"}}>
        BACK
    </div>);
}

export default BackButton;
