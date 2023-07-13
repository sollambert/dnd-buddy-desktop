import { Character } from "../../@types/global";

export const GET_CHARACTER = "character/GET_CHARACTER";
export interface GetCharacterAction {
  type: typeof GET_CHARACTER;
  payload: number,
  callback?: () => void;
}

export const GET_CHARACTERS = "character/GET_CHARACTERS";
export interface GetCharactersAction {
  type: typeof GET_CHARACTERS;
  callback?: () => void;
}

export const SET_CHARACTER = "character/SET_CHARACTER";
export interface SetCharacterAction {
  type: typeof SET_CHARACTER;
  payload: Character;
  callback?: () => void;
}

export const SET_CHARACTERS = "character/SET_CHARACTERS";
export interface SetCharactersAction {
  type: typeof SET_CHARACTERS;
  payload: Array<Character>;
  callback?: () => void;
}

export const ADD_CHARACTER = "character/ADD_CHARACTER";
export interface AddCharacterAction {
  type: typeof ADD_CHARACTER;
  payload: Character;
  callback?: () => void;
}

export const UPDATE_CHARACTER = "character/UPDATE_CHARACTER";
export interface UpdateCharacterAction {
  type: typeof UPDATE_CHARACTER;
  payload: Character;
  callback?: () => void;
}

export const CLEAR_CHARACTER = "character/CLEAR_CHARACTER";
export interface ClearCharacterAction {
    type: typeof CLEAR_CHARACTER;
    callback?: () => void;
}

export const CLEAR_CHARACTERS = "character/CLEAR_CHARACTERS";
export interface ClearCharactersAction {
    type: typeof CLEAR_CHARACTERS;
    callback?: () => void;
}


export const DELETE_CHARACTER = "character/DELETE_CHARACTER";
export interface DeleteCharacterAction {
  type: typeof DELETE_CHARACTER;
  payload: number;
  callback?: () => void;
}

export type CharacterAction =
  | AddCharacterAction
  | UpdateCharacterAction
  | GetCharacterAction
  | GetCharactersAction
  | SetCharacterAction
  | SetCharactersAction
  | DeleteCharacterAction
  | ClearCharacterAction
  | ClearCharactersAction;
