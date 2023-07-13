import { Encounter } from "../../@types/global";

export const GET_ENCOUNTER = "character/GET_ENCOUNTER";
export interface GetEncounterAction {
    type: typeof GET_ENCOUNTER;
    payload: number,
    callback?: () => void;
}

export const GET_ENCOUNTERS = "character/GET_ENCOUNTERS";
export interface GetEncountersAction {
    type: typeof GET_ENCOUNTERS;
    callback?: () => void;
}

export const SET_ENCOUNTER = "character/SET_ENCOUNTER";
export interface SetEncounterAction {
    type: typeof SET_ENCOUNTER;
    payload: Encounter;
    callback?: () => void;
}

export const SET_ENCOUNTERS = "character/SET_ENCOUNTERS";
export interface SetEncountersAction {
    type: typeof SET_ENCOUNTERS;
    payload: Array<Encounter>;
    callback?: () => void;
}

export const ADD_ENCOUNTER = "character/ADD_ENCOUNTER";
export interface AddEncounterAction {
    type: typeof ADD_ENCOUNTER;
    payload: Encounter;
    callback?: () => void;
}

export const CLEAR_ENCOUNTER = "character/CLEAR_ENCOUNTER";
export interface ClearEncounterAction {
    type: typeof CLEAR_ENCOUNTER;
    callback?: () => void;
}

export const CLEAR_ENCOUNTERS = "character/CLEAR_ENCOUNTERS";
export interface ClearEncountersAction {
    type: typeof CLEAR_ENCOUNTERS;
    callback?: () => void;
}


export const DELETE_ENCOUNTER = "character/DELETE_ENCOUNTER";
export interface DeleteEncounterAction {
    type: typeof DELETE_ENCOUNTER;
    payload: number;
    callback?: () => void;
}

export type EncounterAction =
    | AddEncounterAction
    | GetEncounterAction
    | GetEncountersAction
    | SetEncounterAction
    | SetEncountersAction
    | DeleteEncounterAction
    | ClearEncounterAction
    | ClearEncountersAction;
