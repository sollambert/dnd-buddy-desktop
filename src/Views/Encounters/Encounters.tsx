import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { getEncounters } from "../../Redux/ActionCreators/encounter.action.creators";


function Encounters(): JSX.Element {
    const dispatch = useDispatch();
    const encounters = useSelector((store: RootState) => store.encountersReducer);

    useEffect(() => {
        dispatch(getEncounters());
    }, [dispatch])

    return (<>
        {JSON.stringify(encounters)}
    </>);
}

export default Encounters;
