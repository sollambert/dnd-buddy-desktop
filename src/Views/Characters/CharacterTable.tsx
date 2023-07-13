import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getCharacters,
  deleteCharacter,
} from "../../Redux/ActionCreators/character.action.creators.ts"
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store.ts";
import Character from "../../Classes/Character/Character.ts";
import { useHistory } from "react-router-dom";

function CharacterTable(): JSX.Element {
  const dispatch = useDispatch();
  const characters = useSelector((store: RootState) => store.charactersReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const handleDelete = (e: any, id: number) => {
    dispatch(deleteCharacter(id));
  };

  return (
    <table style={{ width: '100%', border: "1px solid black", borderCollapse: "collapse"}}>
      <thead>
        <tr style={{ width: '100%', border: "1px solid black"}}>
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
        {characters?.map((character: Character, i: number) => {
          return (
            <React.Fragment key={i} >
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
                  <button onClick={() => history.push(`characters/${character.id}`)}>DETAILS</button>
                </td>
                <td>
                  <button onClick={(e) => {handleDelete(e, character.id)}}>DELETE</button>
                </td>
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}

export default CharacterTable;
