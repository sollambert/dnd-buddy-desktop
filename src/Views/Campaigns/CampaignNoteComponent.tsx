import React from "react";
import { CampaignNote } from "../../@types/global";

type Props = {
    note: CampaignNote;
};

function CampaignNoteComponent({ note }: Props): JSX.Element {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <pre style={{whiteSpace: "pre-wrap", wordBreak: "break-word"}}>{note.note}</pre>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <button style={{position: "sticky", height: "100%", width: "2em"}} onClick={() => {
                        alert("edited");
                    }}>📝</button>
                    <button style={{position: "sticky", height: "100%", width: "2em"}} onClick={() => {
                        alert("deleted");
                    }}>❌</button>
                </div>
            </div>
        </>
    );
}

export default CampaignNoteComponent;
