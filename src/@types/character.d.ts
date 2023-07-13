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
    campaignId?: number;
}

declare enum Race { DWARF, ELF, GNOME, HALF_ORC, HALF_ELF, HALFLING, HUMAN, TIEFLING }
declare enum Profession { BARBARIAN, BARD, CLERIC, DRUID, FIGHTER, MONK, PALADIN, RANGER, ROGUE, SORCEROR, WARLOCK, WIZARD }