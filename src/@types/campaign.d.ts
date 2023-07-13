declare type Campaign = {
    id: number;
    name: string;
    description: string;
    notes: Array<CampaignNote>;
    encounters: Array<Encounter>;
    characters: Array<Character>;
}

declare type CampaignInfo = {
    id: number,
    name: string
}

declare type CampaignNote = {
campaignId: number,
note: string
}