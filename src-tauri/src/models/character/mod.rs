use diesel::prelude::*;

use crate::schema::characters;

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