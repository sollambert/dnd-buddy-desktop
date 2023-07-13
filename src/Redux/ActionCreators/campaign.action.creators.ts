import * as actions from "../ActionTypes/campaign.action.types";

export function setCampaign(payload: Campaign): actions.SetCampaignAction {
    return {
        type: actions.SET_CAMPAIGN,
        payload,
    };
}

export function setCampaigns(payload: Array<Campaign>): actions.SetCampaignsAction {
    return {
        type: actions.SET_CAMPAIGNS,
        payload,
    };
}

export function addCampaign(payload: Campaign, callback?: () => void): actions.AddCampaignAction {
    return {
        type: actions.ADD_CAMPAIGN,
        payload,
        callback
    };
}

export function addCampaignNote(payload: CampaignNote, callback?: () => void): actions.AddCampaignNoteAction {
    return {
        type: actions.ADD_CAMPAIGN_NOTE,
        payload,
        callback
    };
}

export function getCampaign(payload: number): actions.GetCampaignAction {
    return {
        type: actions.GET_CAMPAIGN,
        payload,
    };
}

export function getCampaigns(): actions.GetCampaignsAction {
    return {
        type: actions.GET_CAMPAIGNS,
    };
}

export function getCampaignInfo(): actions.GetCampaignInfoAction {
    return {
        type: actions.GET_CAMPAIGN_INFO,
    };
}

export function setCampaignInfo(payload: Array<CampaignInfo>): actions.SetCampaignInfoAction {
    return {
        type: actions.SET_CAMPAIGN_INFO,
        payload,
    };
}

export function deleteCampaign(
    payload: number
): actions.DeleteCampaignAction {
    return {
        type: actions.DELETE_CAMPAIGN,
        payload,
    };
}
