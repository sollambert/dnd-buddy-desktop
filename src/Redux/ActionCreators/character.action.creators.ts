import { Character } from "../../@types/global";
import * as actions from "../ActionTypes/character.action.types";

export function setCharacter(payload: Character): actions.SetCharacterAction {
  return {
    type: actions.SET_CHARACTER,
    payload,
  };
}

export function setCharacters(payload: Array<Character>): actions.SetCharactersAction {
  return {
    type: actions.SET_CHARACTERS,
    payload,
  };
}

export function addCharacter(payload: Character, callback?: () => void): actions.AddCharacterAction {
  return {
    type: actions.ADD_CHARACTER,
    payload,
    callback
  };
}

export function updateCharacter(payload: Character, callback?: () => void): actions.UpdateCharacterAction {
  return {
    type: actions.UPDATE_CHARACTER,
    payload,
    callback
  };
}

export function getCharacter(payload: number): actions.GetCharacterAction {
  return {
    type: actions.GET_CHARACTER,
    payload,
  };
}

export function getCharacters(): actions.GetCharactersAction {
  return {
    type: actions.GET_CHARACTERS,
  };
}

export function deleteCharacter(
  payload: number
): actions.DeleteCharacterAction {
  return {
    type: actions.DELETE_CHARACTER,
    payload,
  };
}
