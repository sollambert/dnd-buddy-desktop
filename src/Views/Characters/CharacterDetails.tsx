import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter, deleteCharacter } from "../../Redux/ActionCreators/character.action.creators";
import { RootState } from "../../Redux/store";
import { useHistory, useParams } from "react-router-dom";
import CharacterForm from "./CharacterForm";
import BackButton from "../../Components/Buttons/BackButton";

type Params = {
    id?: string;
}

function CharacterDetails(): JSX.Element {
    const dispatch = useDispatch();
    const character: Character = useSelector((store: RootState) => store.characterReducer);
    const params: Params = useParams();

    const history = useHistory();

    const [editing, setEditing] = useState(false);

    useEffect(() => {
        dispatch(getCharacter(Number(params.id)))
    }, [dispatch, params])

    useEffect(() => {
        document.title = character.name;
        return () => {
            document.title = 'D&D Buddy';
        }
    }, [character]);

    const handleEdit = () : void => {
        setEditing(!editing);
    }

    const handleDelete = (e: any, id: number) => {
        dispatch(deleteCharacter(id));
    };

    return (
        <>
            <BackButton/>
            {editing ?
            <CharacterForm editCharacter={character} editing={true} editHandler={handleEdit} />
            :
            <table style={{ width: '100%', border: "1px solid black" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Race</th>
                        <th>Class</th>
                        <th>STR</th>
                        <th>DEX</th>
                        <th>CON</th>
                        <th>INT</th>
                        <th>WIS</th>
                        <th>CHA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{character.name}</td>
                        <td>{character.level}</td>
                        <td>{character.race}</td>
                        <td>{character.profession}</td>
                        <td>{character.strength}</td>
                        <td>{character.dexterity}</td>
                        <td>{character.constitution}</td>
                        <td>{character.intelligence}</td>
                        <td>{character.wisdom}</td>
                        <td>{character.charisma}</td>
                        <td>
                            <button
                                onClick={(e) => {
                                    handleEdit();
                                }}
                            >
                                EDIT
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={(e) => {
                                    handleDelete(e, character.id);
                                }}
                            >
                                DELETE
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={12}>
                            {character.background}
                        </td>
                    </tr>
                </tbody>
            </table>
            }
        </>);
}

export default CharacterDetails;
