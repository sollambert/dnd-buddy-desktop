declare type Character = {
    id: number;
    name: string;
    level: number;
    race: Race;
    profession: Profession;
    strength?: number;
    dexterity?: number;
    constitution?: number;
    intelligence?: number;
    wisdom?: number;
    charisma?: number;
    background?: string;
    campaign_id?: number;
}