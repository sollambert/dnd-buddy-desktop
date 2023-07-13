import { useState } from "react";
import FormInput from "../../Components/FormInput";
import { useDispatch } from "react-redux";
import { addCharacter, updateCharacter } from "../../Redux/ActionCreators/character.action.creators";
import { Profession, Race } from "../../lib/character.constants";

type Props = {
  editCharacter?: Character;
  editing?: boolean;
  editHandler?: () => void;
}

function CharacterForm({ editCharacter, editing, editHandler }: Props): JSX.Element {

  const initCharacter: Character = {id: 0, name: "", level: 1, race: Race.DWARF, profession: Profession.BARBARIAN};
  const [character, setCharacter] = useState<Character>(editCharacter ? editCharacter : initCharacter);

  const dispatch = useDispatch();

  function handleInput(event: any, key: string) {
    if (key === "level") {
      event.target.value = Math.max(1, Math.min(event.target.value, 20));
    }
    const inputKey = key as keyof typeof character;
    setCharacter({ ...character, [inputKey]: event.target.value });
  }

  const handleSubmit = (): void => {
    if (character.name !== "") {
      if (editing) {
        dispatch(updateCharacter(character, editHandler))
      }
      else {
        dispatch(addCharacter(character, () => setCharacter(initCharacter)))
      }
    } else {
      alert("Add a name dingus!");
    }
  };

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}>
          <div>
            <FormInput
              name="name"
              display="Name"
              handler={handleInput}
              value={character.name}
            />
          </div>
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}>
            <select
              onChange={(e: any) => handleInput(e, "race")}
              value={character.race}
            >
              {(
                Object.values(Race).filter(
                  (value) => typeof value === "string"
                ) as string[]
              ).map((race: string, i: number) => {
                if (typeof race === "string") {
                  return (
                    <option value={race} key={i}>
                      {race}
                    </option>
                  );
                } return null;
              })}
            </select>
            <select
              onChange={(e: any) => handleInput(e, "profession")}
              value={character.profession}
            >
              {(
                Object.values(Profession).filter(
                  (value) => typeof value === "string"
                ) as string[]
              ).map((profession: string, i: number) => {
                if (typeof profession === "string") {
                  return (
                    <option value={profession} key={i}>
                      {profession}
                    </option>
                  );
                } return null;
              })}
            </select>
          </div>
          <div>
            <FormInput
              type="number"
              name="level"
              display="Level"
              handler={handleInput}
              value={character.level}
            />
          </div>
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            SUBMIT
          </button>
          {editing ?
            <button onClick={editHandler}>CANCEL</button>
            : ''}
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}>
          <FormInput
            type="number"
            name="strength"
            display="Strength"
            handler={handleInput}
            value={character.strength}
          />
          <FormInput
            type="number"
            name="dexterity"
            display="Dexterity"
            handler={handleInput}
            value={character.dexterity}
          />
          <FormInput
            type="number"
            name="constitution"
            display="Constitution"
            handler={handleInput}
            value={character.constitution}
          />
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}>
          <FormInput
            type="number"
            name="intelligence"
            display="Intelligence"
            handler={handleInput}
            value={character.intelligence}
          />
          <FormInput
            type="number"
            name="wisdom"
            display="Wisdom"
            handler={handleInput}
            value={character.wisdom}
          />
          <FormInput
            type="number"
            name="charisma"
            display="Charisma"
            handler={handleInput}
            value={character.charisma}
          />
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: '100%', height: '100%'
        }}>
          <label htmlFor={'notes'}>Notes</label>
          <textarea
            value={character.background}
            onChange={(e) => handleInput(e, 'background')}
            rows={6}
            style={{ width: 'stretch', resize: 'none' }}
          />
        </div>
      </div>
    </>
  );
}

export default CharacterForm;
