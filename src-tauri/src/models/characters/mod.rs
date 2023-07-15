use diesel::{prelude::*, sql_types::*};
use diesel_derive_enum::DbEnum;

use crate::models::campaigns::Campaign;
use crate::schema::characters;
use rand::Rng;

#[derive(Queryable, Selectable, Associations, Identifiable, PartialEq, Debug, Clone)]
#[diesel(belongs_to(Campaign))]
#[diesel(table_name = characters)]
pub struct Character {
    pub id: i32,
    pub name: String,
    pub level: i32,
    pub strength: i32,
    pub dexterity: i32,
    pub constitution: i32,
    pub intelligence: i32,
    pub wisdom: i32,
    pub charisma: i32,
    pub background: Option<String>,
    pub race: Race,
    pub profession: Profession,
    pub campaign_id: Option<i32>
}

#[derive(Insertable)]
#[diesel(table_name = characters)]
pub struct NewCharacter {
    pub name: String,
    pub level: i32,
    pub strength: i32,
    pub dexterity: i32,
    pub constitution: i32,
    pub intelligence: i32,
    pub wisdom: i32,
    pub charisma: i32,
    pub background: Option<String>,
    pub race: Race,
    pub profession: Profession,
    pub campaign_id: Option<i32>
}

impl From<(String, i32, i32, i32, i32, i32, i32, i32, Option<String>, Race, Profession, Option<i32>)> for NewCharacter {
    fn from((name, level, strength, dexterity, constitution, intelligence, wisdom, charisma, background, race, profession, campaign_id):
        (String, i32, i32, i32, i32, i32, i32, i32, Option<String>, Race, Profession, Option<i32>)) -> Self {
        Self {
            name,
            level,
            strength,
            dexterity,
            constitution,
            intelligence,
            wisdom,
            charisma,
            background,
            race,
            profession,
            campaign_id
        }
    }
}

impl From<(String, String)> for NewCharacter {
    fn from((name, background): (String, String)) -> Self {
        Self::from((name, 1 as i32,
            roll_stat(),
            roll_stat(),
            roll_stat(),
            roll_stat(),
            roll_stat(),
            roll_stat(),
            Some(background),
            Race::Dwarf,
            Profession::Barbarian,
            None))
    }
}

impl From<String> for NewCharacter {
    fn from(name: String) -> Self {
        Self::from((name, String::new()))
    }
}

#[derive(PartialEq, Debug, Clone, DbEnum)]
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

#[derive(PartialEq, Debug, Clone, DbEnum)]
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

pub fn roll_stat() -> i32 {
    let mut rng = rand::thread_rng();
    let mut rolls = vec![0;5];
    for i in 0..rolls.len() {
        rolls[i] = rng.gen_range(1..6);
    }
    rolls.sort();
    rolls[2] + rolls[3] + rolls[4]
}