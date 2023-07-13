import axios from "axios";

interface campaignResponse {
    campaign: Campaign;
}

interface deleteResponse {
    payload: number;
}

interface campaignsResponse {
    campaigns: Array<Campaign>;
}

interface campaignInfoResponse {
    campaigns: Array<{id: number, name: string}>
}

export async function postCampaign(
    payload: Campaign
) : Promise<campaignResponse> {
    return await axios.post('/api/campaign', payload)
}

export async function postCampaignNote(
    payload: CampaignNote
) : Promise<campaignResponse> {
    return await axios.post('/api/campaign/notes', payload)
}

export async function getCampaigns() : Promise<campaignsResponse> {
    return await axios.get('/api/campaign');
}

export async function getCampaignById(
    payload: number
) : Promise<campaignResponse> {
    return await axios.get(`/api/campaign/${payload}`);
}

export async function getCampaignInfo() : Promise<campaignInfoResponse> {
    return await axios.get('/api/campaign/info');
}

export async function deleteCampaign(
    payload: number
) : Promise<deleteResponse> {
    return await axios.delete(`/api/campaign/${payload}`);
}