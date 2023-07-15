use diesel::prelude::*;

use crate::schema::entities;

#[derive(Queryable, Selectable, Identifiable, PartialEq, Debug, Clone)]
#[diesel(belongs_to(Encounter))]
#[diesel(table_name = entities)]
pub struct Entity {
    pub id: i32,
    pub name: String,
    pub description: String,
    pub api_url: String,
    pub encounter_id: i32
}