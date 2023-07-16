use std::str::FromStr;

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

impl From<(String, Race, Profession)> for NewCharacter {
    fn from((name, race, profession): (String, Race, Profession)) -> Self {
        Self::from((name, 1 as i32,
            roll_stat(),
            roll_stat(),
            roll_stat(),
            roll_stat(),
            roll_stat(),
            roll_stat(),
            None,
            race,
            profession,
            None))
    }
}

impl From<String> for NewCharacter {
    fn from(name: String) -> Self {
        Self::from((name, Race::Dwarf, Profession::Barbarian))
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

impl FromStr for Race {
    type Err = ();
    fn from_str(input: &str) -> Result<Race, Self::Err> {
        let lower = input.to_lowercase();
        let lower = lower.as_str();
        println!("{}", lower);
        match lower {
            "dwarf" => Ok(Race::Dwarf),
            "elf" => Ok(Race::Elf),
            "gnome" => Ok(Race::Gnome),
            "half_orc" => Ok(Race::HalfOrc),
            "half_elf" => Ok(Race::HalfElf),
            "halfling" => Ok(Race::Halfling),
            "human" => Ok(Race::Human),
            "tiefling" => Ok(Race::Tiefling),
            _ => Err(())
        }
    }
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

impl FromStr for Profession {
    type Err = ();
    fn from_str(input: &str) -> Result<Profession, Self::Err> {
        let lower = input.to_lowercase();
        let lower = lower.as_str();
        println!("{}", lower);
        match lower {
            "barbarian" => Ok(Profession::Barbarian),
            "bard" => Ok(Profession::Bard),
            "cleric" => Ok(Profession::Cleric),
            "druid" => Ok(Profession::Druid),
            "fighter" => Ok(Profession::Fighter),
            "monk" => Ok(Profession::Monk),
            "paladin" => Ok(Profession::Paladin),
            "ranger" => Ok(Profession::Ranger),
            "rogue" => Ok(Profession::Rogue),
            "sorceror" => Ok(Profession::Sorceror),
            "warlock" => Ok(Profession::Warlock),
            "wizard" => Ok(Profession::Wizard),
            _ => Err(())
        }
    }
}

pub fn roll_stat() -> i32 {
    let mut rng = rand::thread_rng();
    let mut rolls = vec![0;5];
    for i in 0..rolls.len() {
        rolls[i] = rng.gen_range(1..7);
    }
    rolls.sort();
    rolls[2] + rolls[3] + rolls[4]
}

// Special modifications for schema.rs
// diesel::table! {
//     use diesel::sql_types::*;
//     use crate::models::characters::{RaceMapping, ProfessionMapping};
//     characters (id) {
//         id -> Integer,
//         name -> Text,
//         level -> Integer,
//         strength -> Integer,
//         dexterity -> Integer,
//         constitution -> Integer,
//         intelligence -> Integer,
//         wisdom -> Integer,
//         charisma -> Integer,
//         race -> RaceMapping,
//         profession -> ProfessionMapping,
//         background -> Nullable<Text>,
//         campaign_id -> Nullable<Integer>,
//     }
// }