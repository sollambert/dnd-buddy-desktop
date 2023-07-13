import { CampaignInfo, CampaignNote, Campaign } from "../../@types/global";

export const GET_CAMPAIGN = "campaign/GET_CAMPAIGN";
export interface GetCampaignAction {
    type: typeof GET_CAMPAIGN;
    payload: number,
    callback?: () => void;
}

export const GET_CAMPAIGNS = "campaign/GET_CAMPAIGNS";
export interface GetCampaignsAction {
    type: typeof GET_CAMPAIGNS;
    callback?: () => void;
}

export const GET_CAMPAIGN_INFO = "campaign/GET_CAMPAIGN_INFO";
export interface GetCampaignInfoAction {
    type: typeof GET_CAMPAIGN_INFO;
    callback?: () => void;
}

export const SET_CAMPAIGN_INFO = "campaign/SET_CAMPAIGN_INFO";
export interface SetCampaignInfoAction {
    type: typeof SET_CAMPAIGN_INFO;
    payload: Array<CampaignInfo>;
    callback?: () => void;
}

export const SET_CAMPAIGN = "campaign/SET_CAMPAIGN";
export interface SetCampaignAction {
    type: typeof SET_CAMPAIGN;
    payload: Campaign;
    callback?: () => void;
}

export const SET_CAMPAIGNS = "campaign/SET_CAMPAIGNS";
export interface SetCampaignsAction {
    type: typeof SET_CAMPAIGNS;
    payload: Array<Campaign>;
    callback?: () => void;
}

export const ADD_CAMPAIGN = "campaign/ADD_CAMPAIGN";
export interface AddCampaignAction {
    type: typeof ADD_CAMPAIGN;
    payload: Campaign;
    callback?: () => void;
}

export const ADD_CAMPAIGN_NOTE = "campaign/ADD_CAMPAIGN_NOTE";
export interface AddCampaignNoteAction {
    type: typeof ADD_CAMPAIGN_NOTE;
    payload: CampaignNote;
    callback?: () => void;
}

export const CLEAR_CAMPAIGN = "campaign/CLEAR_CAMPAIGN";
export interface ClearCampaignAction {
    type: typeof CLEAR_CAMPAIGN;
    callback?: () => void;
}

export const CLEAR_CAMPAIGNS = "campaign/CLEAR_CAMPAIGNS";
export interface ClearCampaignsAction {
    type: typeof CLEAR_CAMPAIGNS;
    callback?: () => void;
}


export const DELETE_CAMPAIGN = "campaign/DELETE_CAMPAIGN";
export interface DeleteCampaignAction {
    type: typeof DELETE_CAMPAIGN;
    payload: number;
    callback?: () => void;
}

export type CampaignAction =
    | AddCampaignAction
    | AddCampaignNoteAction
    | GetCampaignAction
    | GetCampaignInfoAction
    | SetCampaignInfoAction
    | GetCampaignsAction
    | SetCampaignAction
    | SetCampaignsAction
    | DeleteCampaignAction
    | ClearCampaignAction
    | ClearCampaignsAction;
