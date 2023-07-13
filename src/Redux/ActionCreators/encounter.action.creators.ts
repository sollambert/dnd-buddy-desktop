import { Encounter } from "../../@types/global";
import * as actions from "../ActionTypes/encounter.action.types";

export function setEncounter(payload: Encounter): actions.SetEncounterAction {
    return {
        type: actions.SET_ENCOUNTER,
        payload,
    };
}

export function setEncounters(payload: Array<Encounter>): actions.SetEncountersAction {
    return {
        type: actions.SET_ENCOUNTERS,
        payload,
    };
}

export function addEncounter(payload: Encounter, callback?: () => void): actions.AddEncounterAction {
    return {
        type: actions.ADD_ENCOUNTER,
        payload,
        callback
    };
}

export function getEncounter(payload: number): actions.GetEncounterAction {
    return {
        type: actions.GET_ENCOUNTER,
        payload,
    };
}

export function getEncounters(): actions.GetEncountersAction {
    return {
        type: actions.GET_ENCOUNTERS,
    };
}

export function deleteEncounter(
    payload: number
): actions.DeleteEncounterAction {
    return {
        type: actions.DELETE_ENCOUNTER,
        payload,
    };
}
