import * as ActionTypes from "../ActionTypes/encounter.action.types";

const initialState: Encounter = {
    id: 0,
    entities: new Array<Entity>(),
    items: new Array<Item>(),
    notes: new Array<string>(),
    cr: 0,
    exp: 0,
    name: '',
    description: '',
    imageUrl: ''
}

export const encountersReducer = (
    state: Array<Encounter> = [],
    action: ActionTypes.EncounterAction
) => {
    switch (action.type) {
        case ActionTypes.SET_ENCOUNTERS:
            return action.payload;
        case ActionTypes.CLEAR_ENCOUNTERS:
            return [];
        default:
            return state;
    }
}

export const encounterReducer = (
    state: Encounter = initialState,
    action: ActionTypes.EncounterAction
) => {
    switch (action.type) {
        case ActionTypes.SET_ENCOUNTER:
            return action.payload;
        case ActionTypes.CLEAR_ENCOUNTER:
            return initialState;
        default:
            return state;
    }
};