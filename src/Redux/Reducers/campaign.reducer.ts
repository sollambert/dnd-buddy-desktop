import { CampaignInfo, CampaignNote } from "../../@types/global";
import { Campaign, Encounter, Character } from "../../@types/global";
import * as ActionTypes from "../ActionTypes/campaign.action.types";

const initialState: Campaign = {
    id: 0,
    name: '',
    description: '',
    notes: new Array<CampaignNote>(),
    encounters: new Array<Encounter>(),
    characters: new Array<Character>()
}

export const campaignInfoReducer = (
    state: Array<CampaignInfo> = [],
    action: ActionTypes.CampaignAction
) => {
    switch (action.type) {
        case ActionTypes.SET_CAMPAIGN_INFO:
            return action.payload;
        case ActionTypes.CLEAR_CAMPAIGNS:
            return [];
        default:
            return state;
    }
}

export const campaignsReducer = (
    state: Array<Campaign> = [],
    action: ActionTypes.CampaignAction
) => {
    switch (action.type) {
        case ActionTypes.SET_CAMPAIGNS:
            return action.payload;
        case ActionTypes.CLEAR_CAMPAIGNS:
            return [];
        default:
            return state;
    }
}

export const campaignReducer = (
    state: Campaign = initialState,
    action: ActionTypes.CampaignAction
) => {
    switch (action.type) {
        case ActionTypes.SET_CAMPAIGN:
            return action.payload;
        case ActionTypes.CLEAR_CAMPAIGN:
            return initialState;
        default:
            return state;
    }
};