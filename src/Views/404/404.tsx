import React, {useEffect} from "react";
import BackButton from "../../Components/Buttons/BackButton";

type Props = {
};

function FourOFour({
}: Props): JSX.Element {
    
    useEffect(() => {
        document.title = "404";
        return () => {
            document.title = 'D&D Buddy';
        }
    }, []);

    return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <BackButton/>
        <h1>Oops, it seems you've wandered to the wrong lair.</h1>
        <h2>404</h2>
        <img src="/404.png"/>
    </div>);
}

export default FourOFour;
