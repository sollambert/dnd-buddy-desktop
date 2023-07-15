use diesel::prelude::*;

use crate::schema::characters;
use rand::Rng;

#[derive(Queryable, Selectable, Identifiable, PartialEq, Debug, Clone)]
#[diesel(table_name = characters)]
pub struct Character {
    pub id: u32,
    pub name: String,
    pub level: u8,
    pub strength: u8,
    pub dexterity: u8,
    pub constitution: u8,
    pub intelligence: u8,
    pub wisdom: u8,
    pub charisma: u8,
    pub background: String,
    pub race: Race,
    pub profession: Profession
}

impl From<(u32, String, u8, u8, u8, u8, u8, u8, u8, String, Race, Profession)> for Character {
    fn from((id, name, level, strength, dexterity, constitution, intelligence, wisdom, charisma, background, race, profession):
        (u32, String, u8, u8, u8, u8, u8, u8, u8, String, Race, Profession)) -> Self {
        Self {
            id,
            name,
            level,
            strength,
            dexterity,
            constitution,
            intelligence,
            wisdom,
            charisma,
            background,
            race: Race::Dwarf,
            profession: Profession::Barbarian
        }
    }
}

impl From<(u32, String, String)> for Character {
    fn from((id, name, background): (u32, String, String)) -> Self {
        Self::from((id, name, 1,
            roll_stat(),
            roll_stat(),
            roll_stat(),
            roll_stat(),
            roll_stat(),
            roll_stat(),
            background,
            Race::Dwarf,
            Profession::Barbarian))
    }
}

impl From<(u32, String)> for Character {
    fn from((id, name): (u32, String)) -> Self {
        Self::from((id, name, String::new()))
    }
}

#[derive(PartialEq, Debug, Clone)]
pub enum Race {
    Dwarf,
    Elf,
    Gnome,
    HalfOrc,
    HalfElf,
    Halfling,
    Human,
    Tiefling
}

#[derive(PartialEq, Debug, Clone)]
pub enum Profession {
    Barbarian,
    Bard,
    Cleric,
    Druid,
    Fighter,
    Monk,
    Paladin,
    Ranger,
    Rogue,
    Sorceror,
    Warlock,
    Wizard
}

pub fn roll_stat() -> u8 {
    let mut rng = rand::thread_rng();
    let mut rolls = vec![0 as u8;5];
    for i in 0..rolls.len() {
        rolls[i] = rng.gen_range(1..6);
    }
    rolls.sort();
    rolls[2] + rolls[3] + rolls[4]
}