use diesel::prelude::*;

use crate::schema::encounters;

#[derive(Queryable, Selectable, Identifiable, PartialEq, Debug, Clone)]
#[diesel(belongs_to(Campaign))]
#[diesel(table_name = encounters)]
pub struct Encounter {
    pub id: i32,
    pub notes: String,
    pub cr: i32,
    pub exp: i32,
    pub name: String,
    pub description: String,
    pub image_url: String,
    pub campaign_id: i32
}